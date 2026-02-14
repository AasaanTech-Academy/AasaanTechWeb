// models/CollegeTrainingForm.js
const mongoose = require('mongoose');

const collegeTrainingFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
    trim: true
  },
  collegeName: {
    type: String,
    required: [true, 'College name is required'],
    trim: true
  },
  department: {
    type: String,
    required: [true, 'Department is required'],
    trim: true
  },
  programInterest: {
    type: String,
    required: [true, 'Program interest is required'],
    enum: [
      'Web Development Bootcamp',
      'Data Science Workshop',
      'Soft Skills & Communication',
      'Java Full Stack Training',
      'Aptitude & Reasoning',
      'Cloud Computing Fundamentals',
      'Custom Program'
    ]
  },
  duration: {
    type: String,
    enum: [
      '1-day Bootcamp',
      '2-week Intensive',
      '3-day Workshop',
      '1-week Workshop',
      'Custom Duration',
      ''
    ]
  },
  participants: {
    type: Number,
    min: 1
  },
  message: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'scheduled', 'completed'],
    default: 'new'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('CollegeTrainingForm', collegeTrainingFormSchema);
