const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');

connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/user", require("./routes/user"));
app.use("/api/applicant", require("./routes/applicant"));
app.use("/api/recruiter", require("./routes/recruiter"));
app.use("/api/application", require("./routes/application"));
app.use("/api/job", require("./routes/job"));
app.use("/api/resume", require("./routes/resume"));
app.use("/api/avatar", require("./routes/avatar"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

