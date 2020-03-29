'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  date: {
    type: Date,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    maxlength: 128
  },
  imgUrl: {
    type: String
  },
  youtubeUrl: {
    type: String
  }
});

module.exports = mongoose.model('Topic', topicSchema)
