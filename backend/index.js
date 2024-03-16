// server.js
const express = require('express');
const fileUpload = require('express-fileupload');
const pdfParse = require('pdf-parse');
const path = require('path');
const natural = require('natural');
const app = express();
const cors = require('cors');

// Enable CORS for all origins
app.use(cors());

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


function extractKeywords(text, nKeywords = 5) {
  const tokenizer = new natural.WordTokenizer();
  const tfidf = new natural.TfIdf();
  const tokens = tokenizer.tokenize(text);
  
  // Add document to the TF-IDF model
  tfidf.addDocument(tokens);

  // Get the most important terms
  const terms = [];
  tfidf.listTerms(0).forEach(term => {
      terms.push({ term: term.term, tfidf: term.tfidf });
  });

  // Sort terms by TF-IDF score and get top keywords
  const sortedTerms = terms.sort((a, b) => b.tfidf - a.tfidf);
  const keywords = sortedTerms.slice(0, nKeywords).map(term => term.term);
  console.log(keywords);
  return keywords;
}

app.post('/upload', (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.file;
  pdfParse(file.data)
    .then((data) => {
      const text = data.text;
      // res.send(text);
      const keywords = extractKeywords(text);
      res.json({ text, keywords });
    })
    .catch((error) => {
      console.error('Error parsing PDF:', error);
      res.status(500).send('Error parsing PDF');
    });
});
