// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const ContactForm = require('../models/ContactForm');
const CollegeTrainingForm = require('../models/CollegeTrainingForm');
const { sendEmail } = require('../config/emailConfig');

// ==========================================
// CONTACT FORM ROUTE
// ==========================================
router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Save to database
    const contactForm = await ContactForm.create({
      name,
      email,
      phone,
      subject,
      message
    });

    // Send email notification
    try {
      await sendEmail('contactForm', {
        name,
        email,
        phone,
        subject,
        message
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Continue even if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! We will contact you shortly.',
      data: contactForm
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
      error: error.message
    });
  }
});

// ==========================================
// COLLEGE TRAINING FORM ROUTE
// ==========================================
router.post('/college-training', async (req, res) => {
  try {
    const {
      name,
      lastName,
      email,
      phone,
      collegeName,
      department,
      programInterest,
      duration,
      participants,
      message
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !collegeName || !department || !programInterest) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Save to database
    const trainingForm = await CollegeTrainingForm.create({
      name,
      lastName,
      email,
      phone,
      collegeName,
      department,
      programInterest,
      duration,
      participants,
      message
    });

    // Send email notification
    try {
      await sendEmail('collegeTrainingForm', {
        name,
        lastName,
        email,
        phone,
        collegeName,
        department,
        programInterest,
        duration,
        participants,
        message
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Continue even if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! We will contact you soon to discuss your training requirements.',
      data: trainingForm
    });

  } catch (error) {
    console.error('College training form error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
      error: error.message
    });
  }
});

// ==========================================
// GET ALL CONTACT FORMS (Admin only)
// ==========================================
router.get('/contact', async (req, res) => {
  try {
    const forms = await ContactForm.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: forms.length,
      data: forms
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching forms',
      error: error.message
    });
  }
});

// ==========================================
// GET ALL COLLEGE TRAINING FORMS (Admin only)
// ==========================================
router.get('/college-training', async (req, res) => {
  try {
    const forms = await CollegeTrainingForm.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: forms.length,
      data: forms
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching forms',
      error: error.message
    });
  }
});

// ADD THIS TO YOUR backend/routes/formRoutes.js file

const CourseQuote = require('../models/CourseQuote');

// ==========================================
// COURSE QUOTE FORM ROUTE
// ==========================================
router.post('/course-quote', async (req, res) => {
  try {
    const { courseName, courseId, name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !courseName) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Save to database
    const quoteRequest = await CourseQuote.create({
      courseName,
      courseId,
      name,
      email,
      phone,
      message
    });

    // Send emails (admin notification + user auto-reply)
    try {
      await sendEmail('courseQuote', {
        courseName,
        courseId,
        name,
        email,
        phone,
        message
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Continue even if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! We will send you a customized quote within 24 hours.',
      data: quoteRequest
    });

  } catch (error) {
    console.error('Course quote form error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
      error: error.message
    });
  }
});

const Appointment = require('../models/Appointment');

// ==========================================
// APPOINTMENT BOOKING ROUTE (Ask Iba Chatbot)
// ==========================================
router.post('/appointment', async (req, res) => {
  try {
    const { name, email, phone, preferredDate, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Save to database
    const appointment = await Appointment.create({
      name,
      email,
      phone,
      preferredDate: preferredDate || null,
      message: message || ''
    });

    // Send emails (admin notification + user confirmation)
    try {
      await sendEmail('appointment', {
        name,
        email,
        phone,
        preferredDate: preferredDate || 'Not specified',
        message: message || 'No additional message'
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Continue even if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Appointment request received! We\'ll confirm within 24 hours.',
      data: appointment
    });

  } catch (error) {
    console.error('Appointment booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
      error: error.message
    });
  }
});

// ==========================================
// GET ALL APPOINTMENTS (Admin only)
// ==========================================
router.get('/appointment', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: appointments.length,
      data: appointments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching appointments',
      error: error.message
    });
  }
});


// ==========================================
// GET ALL COURSE QUOTES (Admin only)
// ==========================================
router.get('/course-quote', async (req, res) => {
  try {
    const quotes = await CourseQuote.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: quotes.length,
      data: quotes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching quotes',
      error: error.message
    });
  }
});

module.exports = router;
