const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recruiter' },
  applicationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Application' },
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant' },
  feedback: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);
