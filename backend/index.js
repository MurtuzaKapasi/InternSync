// const express = require('express')
// const fileUpload = require('express-fileupload')
// const pdfParse = require('pdf-parse')


// const app = express()
// const port = 3000

// app.use('/' , express.static("public"));
// app.use(fileUpload())

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

// app.post('/upload', (req, res) => {
//     if (!req.files) {
//         return res.status(400).send('No files were uploaded.');
//     }
//     const file = req.files.file
//     pdfParse(file.data).then(data => {
//         res.send(data.text)
//     })
// })


// server.js
const express = require('express');
const fileUpload = require('express-fileupload');
const pdfParse = require('pdf-parse');
const path = require('path');
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

app.post('/upload', (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.file;
  pdfParse(file.data)
    .then((data) => {
      res.send(data.text);
    })
    .catch((error) => {
      console.error('Error parsing PDF:', error);
      res.status(500).send('Error parsing PDF');
    });
});
