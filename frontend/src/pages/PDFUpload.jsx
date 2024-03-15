// PDFUpload.jsx
import React, { useState } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000'; // Update with your server's URL

function PDFUpload() {
  const [text, setText] = useState('');

  const handleFileUpload = async (event) => {
    try {
      console.log("this is event target ", event.target)
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('file', file);

      const response = await axios.post('/upload', formData);
      setText(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <br />
      <textarea value={text} readOnly cols="30" rows="10"></textarea>
    </div>
  );
}

export default PDFUpload;
