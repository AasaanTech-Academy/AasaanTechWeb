// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { getWhatsAppUrl, config } from '../../utils/config';
// import './AskIba.css';

// const AskIba = () => {
//   const [open, setOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('chat'); // 'chat' | 'book'
//   const [status, setStatus] = useState(null);
//   const [adminEmail, setAdminEmail] = useState(config.email?.adminEmail || '');

//   return (
//     <div className="ask-iba-container">
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="ask-iba-panel"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.2 }}
//           >
//             <div className="ask-iba-header">
//               <div className="ask-iba-avatar">
//                 <img
//                   src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=120&h=120&fit=crop&crop=faces"
//                   alt="Ask Iba"
//                   onError={(e) => { e.currentTarget.style.display = 'none'; }}
//                 />
//                 {/* <span className="ask-iba-emoji" aria-hidden>👶🏻</span> */}
//               </div>
//               <div className="ask-iba-title">
//                 <div className="ask-iba-name">Ask Iba</div>
//                 <div className="ask-iba-subtitle">How can I help you?</div>
//               </div>
//               <button
//                 className="ask-iba-close"
//                 aria-label="Close chat"
//                 onClick={() => setOpen(false)}
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="ask-iba-tabs">
//               <button
//                 className={`ask-iba-tab ${activeTab === 'chat' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('chat')}
//               >
//                 Chat
//               </button>
//               <button
//                 className={`ask-iba-tab ${activeTab === 'book' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('book')}
//               >
//                 Book
//               </button>
//             </div>

//             {activeTab === 'chat' && (
//               <div className="ask-iba-body">
//                 <div className="ask-iba-message bot">
//                   Hi! I’m Iba. Ask me about courses, schedules, fees, or college trainings.
//                 </div>
//                 <div className="ask-iba-quick-actions">
//                   <button onClick={() => window.location.href = '/courses'}>View Courses</button>
//                   <button onClick={() => window.location.href = '/college-training'}>College Training</button>
//                   <button onClick={() => window.location.href = '/contact'}>Contact Us</button>
//                 </div>
//                 <form
//                   className="ask-iba-form"
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     const formData = new FormData(e.currentTarget);
//                     const message = formData.get('message')?.toString() || '';
//                     const url = getWhatsAppUrl(`Hi! I have a query: ${message}`);
//                     window.open(url, '_blank', 'noopener,noreferrer');
//                     e.currentTarget.reset();
//                   }}
//                 >
//                   <input
//                     type="text"
//                     name="message"
//                     placeholder="Type your question..."
//                     aria-label="Your message"
//                     required
//                   />
//                   <button type="submit" className="ask-iba-send">Send</button>
//                 </form>
//                 <a
//                   className="ask-iba-whatsapp"
//                   href={getWhatsAppUrl('Hello Iba! I need assistance.')}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Chat on WhatsApp
//                 </a>
//               </div>
//             )}

//             {activeTab === 'book' && (
//               <div className="ask-iba-body">
//                 <div className="ask-iba-message bot">
//                   I can help schedule an appointment. Please share a few details.
//                 </div>
//                 {/* <div className="ask-iba-admin-field"> */}
//                   {/* <label htmlFor="adminEmail">Admin email</label>
//                   <input
//                     id="adminEmail"
//                     type="email"
//                     value={adminEmail}
//                     onChange={(e) => setAdminEmail(e.target.value)}
//                     placeholder="admin@example.com"
//                   /> */}
//                 {/* </div> */}
//                 <form
//                   className="ask-iba-book-form"
//                   onSubmit={async (e) => {
//                     e.preventDefault();
//                     setStatus(null);
//                     const formData = new FormData(e.currentTarget);
//                     const name = formData.get('name')?.toString() || '';
//                     const email = formData.get('email')?.toString() || '';
//                     const phone = formData.get('phone')?.toString() || '';

//                     // Prefer Cal.com if configured, fallback to Calendly, else mailto
//                     if (config.calcom?.username) {
//                       const calUrl = config.calcom.getUrl();
//                       window.open(calUrl, '_blank', 'noopener,noreferrer');
//                     } else if (config.calendly?.username && config.calendly.username !== 'YOUR_CALENDLY_USERNAME') {
//                       const calendlyUrl = `${config.calendly.getEmbedUrl()}?hide_gdpr_banner=1&prefill%5Bemail%5D=${encodeURIComponent(email)}`;
//                       window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
//                     } else {
//                       const subject = encodeURIComponent('New Appointment Request');
//                       const body = encodeURIComponent(
//                         `Please schedule an appointment:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n`
//                       );
//                       window.location.href = `mailto:${adminEmail || config.email?.adminEmail}?subject=${subject}&body=${body}`;
//                     }

//                     // Attempt Mailchimp subscription (frontend note: for production, proxy via backend)
//                     try {
//                       const mcPayload = {
//                         email_address: email || 'jannath.sarahibrat@gmail.com',
//                         status: 'subscribed',
//                         merge_fields: {
//                           FNAME: name,
//                           PHONE: phone
//                         }
//                       };

//                       await fetch(config.mailchimp.getApiUrl(), {
//                         method: 'POST',
//                         headers: {
//                           'Authorization': `Bearer ${config.mailchimp.apiKey}`,
//                           'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify(mcPayload)
//                       });

//                       setStatus({ type: 'success', message: 'Booked via Calendly. You’re added to our updates!' });
//                       e.currentTarget.reset();
//                     } catch (err) {
//                       setStatus({ type: 'info', message: 'Opened Calendly. We could not add you to updates.' });
//                     }
//                   }}
//                 >
//                   <input type="text" name="name" placeholder="Your Name" required />
//                   <input type="tel" name="phone" placeholder="Phone" required />
//                   <input type="email" name="email" placeholder="Email (for confirmation)" />
//                   <button type="submit" className="ask-iba-send">Book Appointment</button>
//                 </form>
//                 {status && (
//                   <div className={`ask-iba-status ${status.type}`}>{status.message}</div>
//                 )}
//                 <div className="ask-iba-note">We’ll confirm via email/SMS shortly.</div>
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.button
//         className="ask-iba-button"
//         onClick={() => setOpen(!open)}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.98 }}
//         aria-label="Open Ask Iba chatbot"
//       >
//         <img
//           src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=120&h=120&fit=crop&crop=faces"
//           alt="Ask Iba"
//           className="ask-iba-btn-avatar"
//         />
//         <span className="ask-iba-label">Ask Iba</span>
//       </motion.button>
//     </div>
//   );
// };

// export default AskIba;


//--------------------------------------

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { getWhatsAppUrl, config } from '../../utils/config';
// import axios from 'axios';
// import './AskIba.css';

// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// const AskIba = () => {
//   const [open, setOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('chat');
//   const [status, setStatus] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleBookAppointment = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setStatus(null);

//     const formData = new FormData(e.currentTarget);
//     const data = {
//       name: formData.get('name')?.toString() || '',
//       phone: formData.get('phone')?.toString() || '',
//       email: formData.get('email')?.toString() || '',
//       preferredDate: formData.get('preferredDate')?.toString() || '',
//       message: formData.get('message')?.toString() || ''
//     };

//     try {
//       console.log('Booking appointment...', data);
      
//       const response = await axios.post(`${API_URL}/forms/appointment`, data);
      
//       console.log('Response:', response.data);

//       if (response.data.success) {
//         setStatus({
//           type: 'success',
//           message: '✅ Appointment request sent! We\'ll confirm shortly.'
//         });
        
//         // Reset form
//         e.currentTarget.reset();

//         // Close after 3 seconds
//         setTimeout(() => {
//           setStatus(null);
//         }, 3000);
//       }
//     } catch (error) {
//       console.error('Booking error:', error);
//       setStatus({
//         type: 'error',
//         message: '❌ Something went wrong. Please try WhatsApp instead.'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="ask-iba-container">
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="ask-iba-panel"
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.95 }}
//             transition={{ duration: 0.3 }}
//           >
//             {/* Header */}
//             <div className="ask-iba-header">
//               <div className="ask-iba-avatar">
//                 <img
//                   src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=120&h=120&fit=crop&crop=faces"
//                   alt="Ask Iba"
//                   onError={(e) => { e.currentTarget.style.display = 'none'; }}
//                 />
//                 <span className="ask-iba-status-dot"></span>
//               </div>
//               <div className="ask-iba-title">
//                 <div className="ask-iba-name">Ask Iba</div>
//                 <div className="ask-iba-subtitle">Online • Ready to help</div>
//               </div>
//               <button
//                 className="ask-iba-close"
//                 aria-label="Close chat"
//                 onClick={() => setOpen(false)}
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Tabs */}
//             <div className="ask-iba-tabs">
//               <button
//                 className={`ask-iba-tab ${activeTab === 'chat' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('chat')}
//               >
//                 💬 Chat
//               </button>
//               <button
//                 className={`ask-iba-tab ${activeTab === 'book' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('book')}
//               >
//                 📅 Book
//               </button>
//             </div>

//             {/* Chat Tab */}
//             {activeTab === 'chat' && (
//               <div className="ask-iba-body">
//                 <div className="ask-iba-message bot">
//                   <div className="message-avatar">👋</div>
//                   <div className="message-content">
//                     Hi! I'm Iba. Ask me about courses, schedules, fees, or college trainings.
//                   </div>
//                 </div>

//                 <div className="ask-iba-quick-actions">
//                   <button onClick={() => window.location.href = '/courses'}>
//                     🎓 View Courses
//                   </button>
//                   <button onClick={() => window.location.href = '/college-training'}>
//                     🏢 College Training
//                   </button>
//                   <button onClick={() => window.location.href = '/contact'}>
//                     📞 Contact Us
//                   </button>
//                 </div>

//                 <form
//                   className="ask-iba-form"
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     const formData = new FormData(e.currentTarget);
//                     const message = formData.get('message')?.toString() || '';
//                     const url = getWhatsAppUrl(`Hi! I have a query: ${message}`);
//                     window.open(url, '_blank', 'noopener,noreferrer');
//                     e.currentTarget.reset();
//                   }}
//                 >
//                   <input
//                     type="text"
//                     name="message"
//                     placeholder="Type your question..."
//                     aria-label="Your message"
//                     required
//                   />
//                   <button type="submit" className="ask-iba-send">
//                     ➤
//                   </button>
//                 </form>

//                 <a
//                   className="ask-iba-whatsapp"
//                   href={getWhatsAppUrl('Hello! I need assistance from AasaanTech Academy.')}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <span className="whatsapp-icon">💬</span>
//                   Chat on WhatsApp
//                 </a>
//               </div>
//             )}

//             {/* Book Tab */}
//             {activeTab === 'book' && (
//               <div className="ask-iba-body">
//                 <div className="ask-iba-message bot">
//                   <div className="message-avatar">📅</div>
//                   <div className="message-content">
//                     Schedule an appointment with our team. We'll confirm within 24 hours.
//                   </div>
//                 </div>

//                 <form className="ask-iba-book-form" onSubmit={handleBookAppointment}>
//                   <div className="form-field">
//                     <label htmlFor="book-name">Name *</label>
//                     <input
//                       id="book-name"
//                       type="text"
//                       name="name"
//                       placeholder="Your full name"
//                       required
//                     />
//                   </div>

//                   <div className="form-field">
//                     <label htmlFor="book-phone">Phone *</label>
//                     <input
//                       id="book-phone"
//                       type="tel"
//                       name="phone"
//                       placeholder="+91-XXXXXXXXXX"
//                       required
//                     />
//                   </div>

//                   <div className="form-field">
//                     <label htmlFor="book-email">Email *</label>
//                     <input
//                       id="book-email"
//                       type="email"
//                       name="email"
//                       placeholder="your@email.com"
//                       required
//                     />
//                   </div>

//                   <div className="form-field">
//                     <label htmlFor="book-date">Preferred Date</label>
//                     <input
//                       id="book-date"
//                       type="date"
//                       name="preferredDate"
//                       min={new Date().toISOString().split('T')[0]}
//                     />
//                   </div>

//                   <div className="form-field">
//                     <label htmlFor="book-message">Purpose (Optional)</label>
//                     <textarea
//                       id="book-message"
//                       name="message"
//                       placeholder="What would you like to discuss?"
//                       rows="2"
//                     ></textarea>
//                   </div>

//                   {status && (
//                     <div className={`ask-iba-status ${status.type}`}>
//                       {status.message}
//                     </div>
//                   )}

//                   <button
//                     type="submit"
//                     className="ask-iba-send book-btn"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? 'Booking...' : '📅 Book Appointment'}
//                   </button>
//                 </form>

//                 <div className="ask-iba-note">
//                   💡 We'll send confirmation via email and SMS
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Floating Button */}
//       <motion.button
//         className="ask-iba-button"
//         onClick={() => setOpen(!open)}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         animate={open ? { rotate: 0 } : { rotate: [0, -10, 10, -10, 0] }}
//         transition={{ duration: 0.5, repeat: open ? 0 : Infinity, repeatDelay: 3 }}
//         aria-label="Open Ask Iba chatbot"
//       >
//         <img
//           src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=120&h=120&fit=crop&crop=faces"
//           alt="Ask Iba"
//           className="ask-iba-btn-avatar"
//         />
//         <span className="ask-iba-label">Ask Iba</span>
//         <span className="ask-iba-pulse"></span>
//       </motion.button>
//     </div>
//   );
// };

// export default AskIba;


//---------------------------------
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppUrl, config } from '../../utils/config';
import axios from 'axios';
import './AskIba.css';
import IbaAvatar from './iba-avatar.jpg'; // Import the avatar image

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const AskIba = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookAppointment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      preferredDate: formData.get('preferredDate')?.toString() || '',
      message: formData.get('message')?.toString() || ''
    };

    try {
      console.log('Booking appointment...', data);
      
      const response = await axios.post(`${API_URL}/forms/appointment`, data);
      
      console.log('Response:', response.data);

      if (response.data.success) {
        setStatus({
          type: 'success',
          message: '✅ Appointment request sent! We\'ll confirm shortly.'
        });
        
        // Reset form
        e.currentTarget.reset();

        // Close after 3 seconds
        setTimeout(() => {
          setStatus(null);
        }, 3000);
      }
    } catch (error) {
      console.error('Booking error:', error);
      setStatus({
        type: 'error',
        message: '❌ Something went wrong. Please try WhatsApp instead.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ask-iba-container">
      <AnimatePresence>
        {open && (
          <motion.div
            className="ask-iba-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="ask-iba-header">
              <div className="ask-iba-avatar">
                <img
                  src={IbaAvatar}
                  alt="Ask Iba"
                />
                <span className="ask-iba-status-dot"></span>
              </div>
              <div className="ask-iba-title">
                <div className="ask-iba-name">Ask Iba</div>
                <div className="ask-iba-subtitle">Online • Ready to help</div>
              </div>
              <button
                className="ask-iba-close"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div className="ask-iba-tabs">
              <button
                className={`ask-iba-tab ${activeTab === 'chat' ? 'active' : ''}`}
                onClick={() => setActiveTab('chat')}
              >
                💬 Chat
              </button>
              <button
                className={`ask-iba-tab ${activeTab === 'book' ? 'active' : ''}`}
                onClick={() => setActiveTab('book')}
              >
                📅 Book
              </button>
            </div>

            {/* Chat Tab */}
            {activeTab === 'chat' && (
              <div className="ask-iba-body">
                <div className="ask-iba-message bot">
                  <div className="message-avatar">👋</div>
                  <div className="message-content">
                    Hi! I'm Iba. Ask me about courses, schedules, fees, or college trainings.
                  </div>
                </div>

                <div className="ask-iba-quick-actions">
                  <button onClick={() => window.location.href = '/courses'}>
                    🎓 View Courses
                  </button>
                  <button onClick={() => window.location.href = '/college-training'}>
                    🏢 College Training
                  </button>
                  <button onClick={() => window.location.href = '/contact'}>
                    📞 Contact Us
                  </button>
                </div>

                <form
                  className="ask-iba-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const message = formData.get('message')?.toString() || '';
                    const url = getWhatsAppUrl(`Hi! I have a query: ${message}`);
                    window.open(url, '_blank', 'noopener,noreferrer');
                    e.currentTarget.reset();
                  }}
                >
                  <input
                    type="text"
                    name="message"
                    placeholder="Type your question..."
                    aria-label="Your message"
                    required
                  />
                  <button type="submit" className="ask-iba-send">
                    ➤
                  </button>
                </form>

                <a
                  className="ask-iba-whatsapp"
                  href={getWhatsAppUrl('Hello! I need assistance from AasaanTech Academy.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="whatsapp-icon">💬</span>
                  Chat on WhatsApp
                </a>
              </div>
            )}

            {/* Book Tab */}
            {activeTab === 'book' && (
              <div className="ask-iba-body">
                <div className="ask-iba-message bot">
                  <div className="message-avatar">📅</div>
                  <div className="message-content">
                    Schedule an appointment with our team. We'll confirm within 24 hours.
                  </div>
                </div>

                <form className="ask-iba-book-form" onSubmit={handleBookAppointment}>
                  <div className="form-field">
                    <label htmlFor="book-name">Name *</label>
                    <input
                      id="book-name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="book-phone">Phone *</label>
                    <input
                      id="book-phone"
                      type="tel"
                      name="phone"
                      placeholder="+91-XXXXXXXXXX"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="book-email">Email *</label>
                    <input
                      id="book-email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="book-date">Preferred Date</label>
                    <input
                      id="book-date"
                      type="date"
                      name="preferredDate"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="book-message">Purpose (Optional)</label>
                    <textarea
                      id="book-message"
                      name="message"
                      placeholder="What would you like to discuss?"
                      rows="2"
                    ></textarea>
                  </div>

                  {status && (
                    <div className={`ask-iba-status ${status.type}`}>
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="ask-iba-send book-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Booking...' : '📅 Book Appointment'}
                  </button>
                </form>

                <div className="ask-iba-note">
                  💡 We'll send confirmation via email and SMS
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        className="ask-iba-button"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={open ? { rotate: 0 } : { rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5, repeat: open ? 0 : Infinity, repeatDelay: 3 }}
        aria-label="Open Ask Iba chatbot"
      >
        <img
          src={IbaAvatar}
          alt="Ask Iba"
          className="ask-iba-btn-avatar"
        />
        <span className="ask-iba-label">Ask Iba</span>
        <span className="ask-iba-pulse"></span>
      </motion.button>
    </div>
  );
};

export default AskIba;
