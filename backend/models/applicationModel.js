const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant' },
  appliedAt: { type: Date, default: Date.now },
  status: { type : String , default: 'Pending'},
  feedback: { type : String }
});

module.exports = mongoose.model('Application', applicationSchema);
