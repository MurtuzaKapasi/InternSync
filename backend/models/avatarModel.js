const mongoose = require('mongoose');

const avatarSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model('Avatar', avatarSchema);
