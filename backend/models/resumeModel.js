const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant' },
  file: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model('Resume', resumeSchema);
