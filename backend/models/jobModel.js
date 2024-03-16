const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: { type : String },
  title: { type : String },
  description: { type : String },
  skills: [String],
  experience: { type : String },
  education: { type : String },
  salary: {type : Number},
  location: { type : String },
  isActive: {type : Boolean, default: true},
  createdAt: { type: Date, default: Date.now },
  recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recruiter' }
});

module.exports = mongoose.model('Job', jobSchema);
