const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
  company: { type : String },
  jobTitle: { type : String },
  department: { type : String },
  bio: { type : String }
});

module.exports = mongoose.model('Recruiter', recruiterSchema);
