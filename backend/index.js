const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');

connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/user", require("./routes/user"));
//app.use("/api/cv", require("./routes/cv"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

