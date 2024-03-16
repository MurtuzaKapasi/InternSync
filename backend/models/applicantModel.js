const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  graduationYear: Number,
  percentage: Number
});

const experienceSchema = new mongoose.Schema({
  company: String,
  position: String,
  startDate: Date,
  endDate: Date,
  achievements: [String]
});

const certificationSchema = new mongoose.Schema({
  name: String,
  issuer: String,
  dateObtained: Date
});

const applicantSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true},
  resume: {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Resume'
  },
  education: [educationSchema],
  workExperience: [experienceSchema],
  skills: [String],
  certifications: [certificationSchema],
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

module.exports = mongoose.model('Applicant', applicantSchema);
