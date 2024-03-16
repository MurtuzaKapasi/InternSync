const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  fullName: { type: String, required: true },
  mobile: { type: String, required: true },
  avatarId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Avatar'
  },
  bio: { type: String },
  website: { type: String },
  socialMediaLinks: { type: Object },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
