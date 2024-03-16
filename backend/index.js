<<<<<<< HEAD
// server.js
const express = require('express');
const fileUpload = require('express-fileupload');
const pdfParse = require('pdf-parse');
const path = require('path');
const natural = require('natural');
const app = express();
const cors = require('cors');
=======
// server.mjs
import express from 'express';
import fileUpload from 'express-fileupload';
import fetch from 'node-fetch';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
>>>>>>> d9f44d2aefb7f17772dac0399790c2e10022014e

// Enable CORS for all origins
app.use(cors());

const port = 3000;

<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'public')));
=======
app.use(express.static(join(__dirname, 'public')));
>>>>>>> d9f44d2aefb7f17772dac0399790c2e10022014e
app.use(fileUpload());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

<<<<<<< HEAD

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
=======
app.post('/upload', async (req, res) => {
  console.log('Request body:', req.body);
  console.log('Request files:', req.files);

  try {
    if (!req.files || !req.files.resume) {
      console.log('No resume uploaded.');
      return res.status(400).send('No resume uploaded.');
    }

    const resumeFile = req.files.resume;

    // Move the uploaded file to a folder (e.g., 'resumes')
    const uploadPath = join(__dirname, 'resumes', resumeFile.name);
    await resumeFile.mv(uploadPath);

    // Call the resume parsing API with the uploaded resume file
    const apiKey = 'wo19mDF9boJyTT8G8NUBywvsr9luH0XI';
    const requestOptions = {
      method: 'POST',
      headers: {
        'apikey': apiKey,
        'Content-Type': 'application/octet-stream' // Set content type for file upload
      },
      body: resumeFile.data // Send the resume file data as the request body
    };

    const response = await fetch('https://api.apilayer.com/resume_parser/upload', requestOptions);
    const parsedResume = await response.text();

    // Return the parsed resume to the client
    console.log('Parsed resume:', parsedResume);
    res.send(parsedResume);
  } catch (error) {
    console.error('Error parsing resume:', error);
    res.status(500).send('Error parsing resume');
  }
>>>>>>> d9f44d2aefb7f17772dac0399790c2e10022014e
});
