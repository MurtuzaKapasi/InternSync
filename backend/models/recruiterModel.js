const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  company: { type : String },
  jobTitle: { type : String },
  position: { type : String },
});

module.exports = mongoose.model('Recruiter', recruiterSchema);
