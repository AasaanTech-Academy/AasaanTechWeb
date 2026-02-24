// // config/emailConfig.js - WITH AUTO-REPLY TO USERS
// const nodemailer = require('nodemailer');

// // Email configuration for Hostinger
// const emailConfig = {
//   host: process.env.SMTP_HOST || 'smtp.hostinger.com',
//   port: parseInt(process.env.SMTP_PORT) || 465,
//   secure: process.env.SMTP_PORT === '465',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// };

// // Create transporter
// const transporter = nodemailer.createTransport(emailConfig);

// // Verify connection
// transporter.verify(function(error, success) {
//   if (error) {
//     console.error('❌ Email error:', error);
//   } else {
//     console.log('✅ Email server ready');
//   }
// });

// // Email templates
// const emailTemplates = {
//   // 1. ADMIN NOTIFICATION - Contact Form
//   contactFormAdmin: (data) => ({
//     from: process.env.EMAIL_USER,
//     to: process.env.ADMIN_EMAIL,
//     subject: `New Contact: ${data.subject}`,
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//         <h2 style="color: #26aa61;">📧 New Contact Form</h2>
//         <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
//           <p><strong>Name:</strong> ${data.name}</p>
//           <p><strong>Email:</strong> ${data.email}</p>
//           <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
//           <p><strong>Subject:</strong> ${data.subject}</p>
//         </div>
//         <div style="background: #f0f8ff; padding: 15px; border-radius: 5px;">
//           <p><strong>Message:</strong></p>
//           <p>${data.message}</p>
//         </div>
//         <p style="color: #999; font-size: 12px; margin-top: 20px;">
//           ${new Date().toLocaleString()}
//         </p>
//       </div>
//     `
//   }),

//   // 2. USER AUTO-REPLY - Contact Form
//   contactFormUser: (data) => ({
//     from: process.env.EMAIL_USER,
//     to: data.email,
//     subject: 'Thank you for contacting AasaanTech Academy! 🎓',
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//         <h2 style="color: #26aa61;">Thank You, ${data.name}! 🎓</h2>
        
//         <p style="font-size: 16px; line-height: 1.6;">
//           We have received your message and appreciate you reaching out to <strong>AasaanTech Academy</strong>.
//         </p>
        
//         <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <p><strong>Your Message:</strong></p>
//           <p>Subject: ${data.subject}</p>
//           <p>Submitted: ${new Date().toLocaleString()}</p>
//         </div>
        
//         <p style="font-size: 16px; line-height: 1.6;">
//           Our team will review your inquiry and get back to you within <strong>24-48 hours</strong>.
//         </p>
        
//         <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <p style="margin: 5px 0;"><strong>📞 Need Quick Help?</strong></p>
//           <p style="margin: 5px 0;">Phone: +91-8903308041</p>
//           <p style="margin: 5px 0;">WhatsApp: +91-8903308041</p>
//           <p style="margin: 5px 0;">Email: admin@aasaantech.com</p>
//         </div>
        
//         <p>Best regards,<br><strong>AasaanTech Academy Team</strong></p>
        
//         <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
//         <p style="color: #999; font-size: 12px; text-align: center;">
//           This is an automated response. Please do not reply to this email.
//         </p>
//       </div>
//     `
//   }),

//   // 3. ADMIN NOTIFICATION - College Training
//   collegeTrainingFormAdmin: (data) => ({
//     from: process.env.EMAIL_USER,
//     to: process.env.ADMIN_EMAIL,
//     subject: `New Training Request: ${data.collegeName}`,
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//         <h2 style="color: #26aa61;">🎓 New College Training Request</h2>
        
//         <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
//           <h3 style="margin-top: 0;">Contact</h3>
//           <p><strong>Name:</strong> ${data.name} ${data.lastName || ''}</p>
//           <p><strong>Email:</strong> ${data.email}</p>
//           <p><strong>Phone:</strong> ${data.phone}</p>
//         </div>
        
//         <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 15px 0;">
//           <h3 style="margin-top: 0;">College</h3>
//           <p><strong>Name:</strong> ${data.collegeName}</p>
//           <p><strong>Department:</strong> ${data.department}</p>
//         </div>
        
//         <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 15px 0;">
//           <h3 style="margin-top: 0;">Requirements</h3>
//           <p><strong>Program:</strong> ${data.programInterest}</p>
//           <p><strong>Duration:</strong> ${data.duration || 'Not specified'}</p>
//           <p><strong>Participants:</strong> ${data.participants || 'Not specified'}</p>
//         </div>
        
//         ${data.message ? `
//         <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
//           <p><strong>Message:</strong></p>
//           <p>${data.message}</p>
//         </div>
//         ` : ''}
        
//         <p style="color: #999; font-size: 12px; margin-top: 20px;">
//           ${new Date().toLocaleString()}
//         </p>
//       </div>
//     `
//   }),

//   // 4. USER AUTO-REPLY - College Training
//   collegeTrainingFormUser: (data) => ({
//     from: process.env.EMAIL_USER,
//     to: data.email,
//     subject: 'Thank you for your Training Request! 🎓',
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//         <h2 style="color: #26aa61;">Thank You, ${data.name}! 🎓</h2>
        
//         <p style="font-size: 16px; line-height: 1.6;">
//           We have received your training request for <strong>${data.collegeName}</strong> 
//           and are excited about the opportunity to work with you!
//         </p>
        
//         <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <p><strong>Request Summary:</strong></p>
//           <p>Program: ${data.programInterest}</p>
//           <p>Department: ${data.department}</p>
//           <p>Participants: ${data.participants || 'To be discussed'}</p>
//         </div>
        
//         <p style="font-size: 16px; line-height: 1.6;">
//           Our training coordinator will contact you within <strong>24 hours</strong> to discuss:
//         </p>
        
//         <ul style="line-height: 1.8;">
//           <li>Customized training curriculum</li>
//           <li>Scheduling and duration</li>
//           <li>Pricing and payment options</li>
//           <li>Resource requirements</li>
//         </ul>
        
//         <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <p style="margin: 5px 0;"><strong>📞 Quick Connect:</strong></p>
//           <p style="margin: 5px 0;">Phone: +91-8903308041</p>
//           <p style="margin: 5px 0;">WhatsApp: +91-8903308041</p>
//           <p style="margin: 5px 0;">Email: admin@aasaantech.com</p>
//         </div>
        
//         <p>Best regards,<br><strong>AasaanTech Academy Team</strong></p>
        
//         <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
//         <p style="color: #999; font-size: 12px; text-align: center;">
//           This is an automated response. Please do not reply to this email.
//         </p>
//       </div>
//     `
//   }),

//   // ADD THESE TO YOUR backend/config/emailConfig.js file
// // Add to the emailTemplates object

//   // ADMIN NOTIFICATION - Course Quote
//   courseQuoteAdmin: (data) => ({
//     from: process.env.EMAIL_USER,
//     to: process.env.ADMIN_EMAIL,
//     subject: `New Quote Request: ${data.courseName}`,
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//         <h2 style="color: #26aa61;">💼 New Course Quote Request</h2>
        
//         <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <h3 style="margin-top: 0; color: #333;">Course Details</h3>
//           <p style="margin: 5px 0;"><strong>Course:</strong> ${data.courseName}</p>
//           ${data.courseId ? `<p style="margin: 5px 0;"><strong>Course ID:</strong> ${data.courseId}</p>` : ''}
//         </div>
        
//         <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
//           <p style="margin: 5px 0;"><strong>Name:</strong> ${data.name}</p>
//           <p style="margin: 5px 0;"><strong>Email:</strong> ${data.email}</p>
//           <p style="margin: 5px 0;"><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
//         </div>
        
//         ${data.message ? `
//         <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <h3 style="margin-top: 0; color: #333;">Additional Requirements</h3>
//           <p style="margin: 5px 0; line-height: 1.6;">${data.message}</p>
//         </div>
//         ` : ''}
        
//         <p style="color: #999; font-size: 12px; margin-top: 20px;">
//           Submitted: ${new Date().toLocaleString()}
//         </p>
//       </div>
//     `
//   }),

//   // USER AUTO-REPLY - Course Quote
//   courseQuoteUser: (data) => ({
//     from: process.env.EMAIL_USER,
//     to: data.email,
//     subject: `Quote Request Received - ${data.courseName} 🎓`,
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//         <h2 style="color: #26aa61;">Thank You, ${data.name}! 🎓</h2>
        
//         <p style="font-size: 16px; line-height: 1.6; color: #333;">
//           We have received your quote request for <strong>${data.courseName}</strong> 
//           and appreciate your interest in AasaanTech Academy!
//         </p>
        
//         <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 25px 0;">
//           <h3 style="margin-top: 0; color: #333;">📋 What Happens Next?</h3>
//           <ul style="line-height: 1.8; color: #555; padding-left: 20px;">
//             <li>Our course advisor will review your request</li>
//             <li>We'll prepare a customized quote based on your requirements</li>
//             <li>You'll receive a detailed quote within <strong>24 hours</strong></li>
//             <li>We'll include course schedule, pricing, and payment options</li>
//           </ul>
//         </div>
        
//         <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
//           <p style="margin: 5px 0; color: #856404;">
//             <strong>📞 Need to Talk to Us?</strong><br><br>
//             Phone: +91-8903308041<br>
//             WhatsApp: +91-8903308041<br>
//             Email: admin@aasaantech.com
//           </p>
//         </div>
        
//         <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
//           <p style="margin: 5px 0;"><strong>Your Request Summary:</strong></p>
//           <p style="margin: 5px 0;">Course: ${data.courseName}</p>
//           <p style="margin: 5px 0;">Submitted: ${new Date().toLocaleString()}</p>
//         </div>
        
//         <p style="line-height: 1.6; color: #333;">
//           Best regards,<br>
//           <strong>AasaanTech Academy Team</strong>
//         </p>
        
//         <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">
        
//         <p style="color: #999; font-size: 12px; text-align: center;">
//           This is an automated response. Please do not reply to this email.<br>
//           For urgent matters, contact us at admin@aasaantech.com
//         </p>
//       </div>
//     `
//   }),
//   // ADMIN NOTIFICATION - Appointment Booking
//   appointmentAdmin: (data) => ({
//     from: process.env.EMAIL_USER,
//     to: process.env.ADMIN_EMAIL,
//     subject: `New Appointment Request from ${data.name}`,
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//         <h2 style="color: #26aa61;">📅 New Appointment Request</h2>
        
//         <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
//           <p style="margin: 5px 0;"><strong>Name:</strong> ${data.name}</p>
//           <p style="margin: 5px 0;"><strong>Email:</strong> ${data.email}</p>
//           <p style="margin: 5px 0;"><strong>Phone:</strong> ${data.phone}</p>
//         </div>
        
//         <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <h3 style="margin-top: 0; color: #333;">Appointment Details</h3>
//           <p style="margin: 5px 0;"><strong>Preferred Date:</strong> ${data.preferredDate}</p>
//           ${data.message ? `<p style="margin: 5px 0;"><strong>Purpose:</strong> ${data.message}</p>` : ''}
//         </div>
        
//         <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <p style="margin: 5px 0; color: #666;">
//             <strong>Action Required:</strong> Please confirm the appointment by contacting the customer.
//           </p>
//         </div>
        
//         <p style="color: #999; font-size: 12px; margin-top: 20px;">
//           Submitted: ${new Date().toLocaleString()}
//         </p>
//       </div>
//     `
//   }),

//   // USER CONFIRMATION - Appointment Booking
//   appointmentUser: (data) => ({
//     from: process.env.EMAIL_USER,
//     to: data.email,
//     subject: 'Appointment Request Received - AasaanTech Academy 📅',
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//         <h2 style="color: #26aa61;">Thank You, ${data.name}! 📅</h2>
        
//         <p style="font-size: 16px; line-height: 1.6; color: #333;">
//           We have received your appointment request and will get back to you shortly.
//         </p>
        
//         <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 25px 0;">
//           <h3 style="margin-top: 0; color: #333;">📋 Your Request Details</h3>
//           <p style="margin: 8px 0;"><strong>Name:</strong> ${data.name}</p>
//           <p style="margin: 8px 0;"><strong>Phone:</strong> ${data.phone}</p>
//           <p style="margin: 8px 0;"><strong>Email:</strong> ${data.email}</p>
//           <p style="margin: 8px 0;"><strong>Preferred Date:</strong> ${data.preferredDate}</p>
//         </div>
        
//         <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
//           <h3 style="margin-top: 0; color: #333;">⏰ What Happens Next?</h3>
//           <ul style="line-height: 1.8; color: #555; padding-left: 20px; margin: 10px 0;">
//             <li>Our team will review your request</li>
//             <li>We'll confirm your appointment within <strong>24 hours</strong></li>
//             <li>You'll receive a confirmation call/email</li>
//             <li>Meeting details will be shared before the appointment</li>
//           </ul>
//         </div>
        
//         <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin: 20px 0;">
//           <p style="margin: 5px 0; color: #2e7d32;">
//             <strong>📞 Need Immediate Help?</strong><br><br>
//             Phone: +91-XXXXXXXXXX<br>
//             WhatsApp: +91-XXXXXXXXXX<br>
//             Email: admin@aasaantech.com
//           </p>
//         </div>
        
//         <p style="line-height: 1.6; color: #333;">
//           Best regards,<br>
//           <strong>AasaanTech Academy Team</strong>
//         </p>
        
//         <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">
        
//         <p style="color: #999; font-size: 12px; text-align: center;">
//           This is an automated response. Please do not reply to this email.<br>
//           For urgent matters, contact us at admin@aasaantech.com
//         </p>
//       </div>
//     `
//   }),

//   // 5. User Registration Welcome
//   userRegistration: (data) => ({
//     from: process.env.EMAIL_USER,
//     to: data.email,
//     subject: 'Welcome to AasaanTech Academy! 🎉',
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//         <h2 style="color: #26aa61;">Welcome, ${data.name}! 🎉</h2>
        
//         <p>Thank you for registering! Your account is ready.</p>
        
//         <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <p><strong>Email:</strong> ${data.email}</p>
//         </div>
        
//         <div style="text-align: center; margin: 30px 0;">
//           <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/login" 
//              style="display: inline-block; padding: 12px 30px; background: #26aa61; 
//                     color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
//             Get Started
//           </a>
//         </div>
        
//         <p>Best regards,<br><strong>AasaanTech Academy Team</strong></p>
//       </div>
//     `
//   })
// };



// // Send email function - SENDS BOTH ADMIN AND USER EMAILS
// // UPDATE YOUR sendEmail function in backend/config/emailConfig.js

// const sendEmail = async (type, data) => {
//   try {
//     // For forms that need both admin and user emails
//     if (type === 'contactForm' || type === 'collegeTrainingForm' || type === 'courseQuote' || type === 'appointment') {
      
//       // 1. Send to admin
//       console.log(`📧 Sending admin notification for ${type}...`);
//       const adminTemplate = type === 'contactForm' ? 'contactFormAdmin' 
//                           : type === 'collegeTrainingForm' ? 'collegeTrainingFormAdmin'
//                           : type === 'courseQuote' ? 'courseQuoteAdmin'
//                           : 'appointmentAdmin';
//       await transporter.sendMail(emailTemplates[adminTemplate](data));
//       console.log('✅ Admin email sent!');
      
//       // 2. Send auto-reply to user
//       console.log(`📧 Sending auto-reply to ${data.email}...`);
//       const userTemplate = type === 'contactForm' ? 'contactFormUser' 
//                          : type === 'collegeTrainingForm' ? 'collegeTrainingFormUser'
//                          : type === 'courseQuote' ? 'courseQuoteUser'
//                          : 'appointmentUser';
//       await transporter.sendMail(emailTemplates[userTemplate](data));
//       console.log('✅ User auto-reply sent!');
      
//       return { success: true };
//     } else {
//       // For other types (registration, etc)
//       await transporter.sendMail(emailTemplates[type](data));
//       console.log('✅ Email sent!');
//       return { success: true };
//     }
//   } catch (error) {
//     console.error('❌ Email error:', error.message);
//     return { success: false, error: error.message };
//   }
// };

// module.exports = { sendEmail, transporter };


//-------------------------------------------------
// config/emailConfig.js - SENDGRID VERSION
const sgMail = require('@sendgrid/mail');

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Your verified sender email from SendGrid
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'your-verified-email@example.com';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@aasaantech.com';

// Verify SendGrid is ready
console.log('✅ SendGrid email service initialized');

// Email templates (keeping all your existing templates)
const emailTemplates = {
  // 1. ADMIN NOTIFICATION - Contact Form
  contactFormAdmin: (data) => ({
    to: ADMIN_EMAIL,
    from: SENDER_EMAIL,
    subject: `New Contact: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #26aa61;">📧 New Contact Form</h2>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
        </div>
        <div style="background: #f0f8ff; padding: 15px; border-radius: 5px;">
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          ${new Date().toLocaleString()}
        </p>
      </div>
    `
  }),

  // 2. USER AUTO-REPLY - Contact Form
  contactFormUser: (data) => ({
    to: data.email,
    from: SENDER_EMAIL,
    subject: 'Thank you for contacting AasaanTech Academy! 🎓',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #26aa61;">Thank You, ${data.name}! 🎓</h2>
        
        <p style="font-size: 16px; line-height: 1.6;">
          We have received your message and appreciate you reaching out to <strong>AasaanTech Academy</strong>.
        </p>
        
        <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Your Message:</strong></p>
          <p>Subject: ${data.subject}</p>
          <p>Submitted: ${new Date().toLocaleString()}</p>
        </div>
        
        <p style="font-size: 16px; line-height: 1.6;">
          Our team will review your inquiry and get back to you within <strong>24-48 hours</strong>.
        </p>
        
        <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>📞 Need Quick Help?</strong></p>
          <p style="margin: 5px 0;">Phone: +91-8903308041</p>
          <p style="margin: 5px 0;">WhatsApp: +91-8903308041</p>
          <p style="margin: 5px 0;">Email: admin@aasaantech.com</p>
        </div>
        
        <p>Best regards,<br><strong>AasaanTech Academy Team</strong></p>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="color: #999; font-size: 12px; text-align: center;">
          This is an automated response. Please do not reply to this email.
        </p>
      </div>
    `
  }),

  // 3. ADMIN NOTIFICATION - College Training
  collegeTrainingFormAdmin: (data) => ({
    to: ADMIN_EMAIL,
    from: SENDER_EMAIL,
    subject: `New Training Request: ${data.collegeName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #26aa61;">🎓 New College Training Request</h2>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <h3 style="margin-top: 0;">Contact</h3>
          <p><strong>Name:</strong> ${data.name} ${data.lastName || ''}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
        </div>
        
        <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <h3 style="margin-top: 0;">College</h3>
          <p><strong>Name:</strong> ${data.collegeName}</p>
          <p><strong>Department:</strong> ${data.department}</p>
        </div>
        
        <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <h3 style="margin-top: 0;">Requirements</h3>
          <p><strong>Program:</strong> ${data.programInterest}</p>
          <p><strong>Duration:</strong> ${data.duration || 'Not specified'}</p>
          <p><strong>Participants:</strong> ${data.participants || 'Not specified'}</p>
        </div>
        
        ${data.message ? `
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        </div>
        ` : ''}
        
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          ${new Date().toLocaleString()}
        </p>
      </div>
    `
  }),

  // 4. USER AUTO-REPLY - College Training
  collegeTrainingFormUser: (data) => ({
    to: data.email,
    from: SENDER_EMAIL,
    subject: 'Thank you for your Training Request! 🎓',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #26aa61;">Thank You, ${data.name}! 🎓</h2>
        
        <p style="font-size: 16px; line-height: 1.6;">
          We have received your training request for <strong>${data.collegeName}</strong> 
          and are excited about the opportunity to work with you!
        </p>
        
        <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Request Summary:</strong></p>
          <p>Program: ${data.programInterest}</p>
          <p>Department: ${data.department}</p>
          <p>Participants: ${data.participants || 'To be discussed'}</p>
        </div>
        
        <p style="font-size: 16px; line-height: 1.6;">
          Our training coordinator will contact you within <strong>24 hours</strong> to discuss:
        </p>
        
        <ul style="line-height: 1.8;">
          <li>Customized training curriculum</li>
          <li>Scheduling and duration</li>
          <li>Pricing and payment options</li>
          <li>Resource requirements</li>
        </ul>
        
        <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>📞 Quick Connect:</strong></p>
          <p style="margin: 5px 0;">Phone: +91-8903308041</p>
          <p style="margin: 5px 0;">WhatsApp: +91-8903308041</p>
          <p style="margin: 5px 0;">Email: admin@aasaantech.com</p>
        </div>
        
        <p>Best regards,<br><strong>AasaanTech Academy Team</strong></p>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="color: #999; font-size: 12px; text-align: center;">
          This is an automated response. Please do not reply to this email.
        </p>
      </div>
    `
  }),

  // 5. ADMIN NOTIFICATION - Course Quote
  courseQuoteAdmin: (data) => ({
    to: ADMIN_EMAIL,
    from: SENDER_EMAIL,
    subject: `New Quote Request: ${data.courseName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #26aa61;">💼 New Course Quote Request</h2>
        
        <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Course Details</h3>
          <p style="margin: 5px 0;"><strong>Course:</strong> ${data.courseName}</p>
          ${data.courseId ? `<p style="margin: 5px 0;"><strong>Course ID:</strong> ${data.courseId}</p>` : ''}
        </div>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${data.name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${data.email}</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        </div>
        
        ${data.message ? `
        <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Additional Requirements</h3>
          <p style="margin: 5px 0; line-height: 1.6;">${data.message}</p>
        </div>
        ` : ''}
        
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          Submitted: ${new Date().toLocaleString()}
        </p>
      </div>
    `
  }),

  // 6. USER AUTO-REPLY - Course Quote
  courseQuoteUser: (data) => ({
    to: data.email,
    from: SENDER_EMAIL,
    subject: `Quote Request Received - ${data.courseName} 🎓`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #26aa61;">Thank You, ${data.name}! 🎓</h2>
        
        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          We have received your quote request for <strong>${data.courseName}</strong> 
          and appreciate your interest in AasaanTech Academy!
        </p>
        
        <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 25px 0;">
          <h3 style="margin-top: 0; color: #333;">📋 What Happens Next?</h3>
          <ul style="line-height: 1.8; color: #555; padding-left: 20px;">
            <li>Our course advisor will review your request</li>
            <li>We'll prepare a customized quote based on your requirements</li>
            <li>You'll receive a detailed quote within <strong>24 hours</strong></li>
            <li>We'll include course schedule, pricing, and payment options</li>
          </ul>
        </div>
        
        <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 5px 0; color: #856404;">
            <strong>📞 Need to Talk to Us?</strong><br><br>
            Phone: +91-8903308041<br>
            WhatsApp: +91-8903308041<br>
            Email: admin@aasaantech.com
          </p>
        </div>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Your Request Summary:</strong></p>
          <p style="margin: 5px 0;">Course: ${data.courseName}</p>
          <p style="margin: 5px 0;">Submitted: ${new Date().toLocaleString()}</p>
        </div>
        
        <p style="line-height: 1.6; color: #333;">
          Best regards,<br>
          <strong>AasaanTech Academy Team</strong>
        </p>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">
        
        <p style="color: #999; font-size: 12px; text-align: center;">
          This is an automated response. Please do not reply to this email.<br>
          For urgent matters, contact us at admin@aasaantech.com
        </p>
      </div>
    `
  }),

  // 7. ADMIN NOTIFICATION - Appointment
  appointmentAdmin: (data) => ({
    to: ADMIN_EMAIL,
    from: SENDER_EMAIL,
    subject: `New Appointment Request from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #26aa61;">📅 New Appointment Request</h2>
        
        <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${data.name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${data.email}</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${data.phone}</p>
        </div>
        
        <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Appointment Details</h3>
          <p style="margin: 5px 0;"><strong>Preferred Date:</strong> ${data.preferredDate}</p>
          ${data.message ? `<p style="margin: 5px 0;"><strong>Purpose:</strong> ${data.message}</p>` : ''}
        </div>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 5px 0; color: #666;">
            <strong>Action Required:</strong> Please confirm the appointment by contacting the customer.
          </p>
        </div>
        
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          Submitted: ${new Date().toLocaleString()}
        </p>
      </div>
    `
  }),

  // 8. USER CONFIRMATION - Appointment
  appointmentUser: (data) => ({
    to: data.email,
    from: SENDER_EMAIL,
    subject: 'Appointment Request Received - AasaanTech Academy 📅',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #26aa61;">Thank You, ${data.name}! 📅</h2>
        
        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          We have received your appointment request and will get back to you shortly.
        </p>
        
        <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 25px 0;">
          <h3 style="margin-top: 0; color: #333;">📋 Your Request Details</h3>
          <p style="margin: 8px 0;"><strong>Name:</strong> ${data.name}</p>
          <p style="margin: 8px 0;"><strong>Phone:</strong> ${data.phone}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> ${data.email}</p>
          <p style="margin: 8px 0;"><strong>Preferred Date:</strong> ${data.preferredDate}</p>
        </div>
        
        <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">⏰ What Happens Next?</h3>
          <ul style="line-height: 1.8; color: #555; padding-left: 20px; margin: 10px 0;">
            <li>Our team will review your request</li>
            <li>We'll confirm your appointment within <strong>24 hours</strong></li>
            <li>You'll receive a confirmation call/email</li>
            <li>Meeting details will be shared before the appointment</li>
          </ul>
        </div>
        
        <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 5px 0; color: #2e7d32;">
            <strong>📞 Need Immediate Help?</strong><br><br>
            Phone: +91-8903308041<br>
            WhatsApp: +91-8903308041<br>
            Email: admin@aasaantech.com
          </p>
        </div>
        
        <p style="line-height: 1.6; color: #333;">
          Best regards,<br>
          <strong>AasaanTech Academy Team</strong>
        </p>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">
        
        <p style="color: #999; font-size: 12px; text-align: center;">
          This is an automated response. Please do not reply to this email.<br>
          For urgent matters, contact us at admin@aasaantech.com
        </p>
      </div>
    `
  }),

  // 9. User Registration Welcome
  userRegistration: (data) => ({
    to: data.email,
    from: SENDER_EMAIL,
    subject: 'Welcome to AasaanTech Academy! 🎉',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #26aa61;">Welcome, ${data.name}! 🎉</h2>
        
        <p>Thank you for registering! Your account is ready.</p>
        
        <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Email:</strong> ${data.email}</p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/login" 
             style="display: inline-block; padding: 12px 30px; background: #26aa61; 
                    color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
            Get Started
          </a>
        </div>
        
        <p>Best regards,<br><strong>AasaanTech Academy Team</strong></p>
      </div>
    `
  })
};

// Send email function using SendGrid
const sendEmail = async (type, data) => {
  try {
    // For forms that need both admin and user emails
    if (type === 'contactForm' || type === 'collegeTrainingForm' || type === 'courseQuote' || type === 'appointment') {
      
      // 1. Send to admin
      console.log(`📧 Sending admin notification for ${type}...`);
      const adminTemplate = type === 'contactForm' ? 'contactFormAdmin' 
                          : type === 'collegeTrainingForm' ? 'collegeTrainingFormAdmin'
                          : type === 'courseQuote' ? 'courseQuoteAdmin'
                          : 'appointmentAdmin';
      
      await sgMail.send(emailTemplates[adminTemplate](data));
      console.log('✅ Admin email sent!');
      
      // 2. Send auto-reply to user
      console.log(`📧 Sending auto-reply to ${data.email}...`);
      const userTemplate = type === 'contactForm' ? 'contactFormUser' 
                         : type === 'collegeTrainingForm' ? 'collegeTrainingFormUser'
                         : type === 'courseQuote' ? 'courseQuoteUser'
                         : 'appointmentUser';
      
      await sgMail.send(emailTemplates[userTemplate](data));
      console.log('✅ User auto-reply sent!');
      
      return { success: true };
    } else {
      // For other types (registration, etc)
      await sgMail.send(emailTemplates[type](data));
      console.log('✅ Email sent!');
      return { success: true };
    }
  } catch (error) {
    console.error('❌ Email error:', error.message);
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }
    return { success: false, error: error.message };
  }
};

module.exports = { sendEmail };