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


// Enable CORS for all origins
app.use(cors());


const port = 3000;


app.use(express.static(join(__dirname, 'public')));
app.use(fileUpload());


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


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
});


