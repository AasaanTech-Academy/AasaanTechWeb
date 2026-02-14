// import { Link } from 'react-router-dom';
// import AnimatedSection from '../components/Common/AnimatedSection';
// import Card from '../components/Common/Card';
// import Button from '../components/Common/Button';
// import BackToTop from '../components/UI/BackToTop';
// import './Services.css';
// import useTechiesColor from '../components/Common/useTechiesColor';

// const Services = () => {
//   const services = [
//     {
//       icon: '🎓',
//       title: 'Individual Training',
//       description: 'Personalized one-on-one training sessions tailored to your learning pace and goals.',
//       features: ['Flexible scheduling', 'Personalized curriculum', 'Direct instructor access', 'Progress tracking']
//     },
//     {
//       icon: '🏢',
//       title: 'Corporate Training',
//       description: 'Comprehensive training programs designed for teams and organizations.',
//       features: ['Customized programs', 'On-site or remote', 'Team assessments', 'Certification support']
//     },
//     {
//       icon: '📜',
//       title: 'Certification Programs',
//       description: 'Industry-recognized certification courses to boost your career credentials.',
//       features: ['Industry standards', 'Exam preparation', 'Practice tests', 'Certification badge']
//     },
//     {
//       icon: '💼',
//       title: 'Career Counseling',
//       description: 'Expert guidance to help you navigate your tech career path.',
//       features: ['Resume review', 'Interview prep', 'Career planning', 'Job placement support']
//     },
//     {
//       icon: '🔧',
//       title: 'Custom Training',
//       description: 'Bespoke training solutions designed for your specific needs.',
//       features: ['Tailored curriculum', 'Flexible duration', 'Specialized topics', 'Ongoing support']
//     },
//     {
//       icon: '🌐',
//       title: 'Online Learning Platform',
//       description: 'Access our comprehensive online learning platform anytime, anywhere.',
//       features: ['24/7 access', 'Video lectures', 'Interactive exercises', 'Community forum']
//     }
//   ];

//   return (
//     <div className="services-page">
//       <div className="services-hero section">
//         <div className="container">
//           <AnimatedSection direction="up">
//             <div className="page-header">
//               <h1 className="page-title">
//                 Our <span style={{ color: useTechiesColor() }}>Services</span>
//               </h1>
//               <p className="page-description">
//                 Comprehensive training solutions to meet all your learning needs
//               </p>
//             </div>
//           </AnimatedSection>
//         </div>
//       </div>

//       <div className="services-content section">
//         <div className="container">
//           <div className="services-grid">
//             {services.map((service, index) => (
//               <AnimatedSection key={service.title} direction="up" delay={index * 0.1}>
//                 <Card className="service-card">
//                   <div className="service-icon">{service.icon}</div>
//                   <h3 className="service-title">{service.title}</h3>
//                   <p className="service-description">{service.description}</p>
//                   <ul className="service-features">
//                     {service.features.map((feature) => (
//                       <li key={feature}>✓ {feature}</li>
//                     ))}
//                   </ul>
//                   <Button variant="outline" className="service-button">
//                     Learn More
//                   </Button>
//                 </Card>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="services-cta section">
//         <div className="container">
//           <AnimatedSection direction="up">
//             <Card className="cta-card">
//               <h2>Ready to Get Started?</h2>
//               <p>Contact us today to discuss your training needs</p>
//               <Link to="/contact">
//                 <Button size="lg" variant="primary">
//                   Contact Us
//                 </Button>
//               </Link>
//             </Card>
//           </AnimatedSection>
//         </div>
//       </div>

//       <BackToTop />
//     </div>
//   );
// };

// export default Services;

//------------------------------------------

import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/Common/AnimatedSection';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import Modal from '../components/Common/Modal';
import BackToTop from '../components/UI/BackToTop';
import './Services.css';
import useTechiesColor from '../components/Common/useTechiesColor';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: '🎓',
      title: 'Individual Training',
      description: 'Personalized one-on-one training sessions tailored to your learning pace and goals.',
      features: ['Flexible scheduling', 'Personalized curriculum', 'Direct instructor access', 'Progress tracking'],
      // Extended details
      longDescription: 'Our individual training program provides personalized attention and customized learning paths designed specifically for your career goals and current skill level. Get direct access to experienced instructors who will guide you every step of the way.',
      benefits: [
        'One-on-one mentorship with industry experts',
        'Customized curriculum based on your goals',
        'Flexible scheduling to fit your lifestyle',
        'Real-time doubt resolution',
        'Hands-on project work'
      ],
      duration: '4-12 weeks',
      pricing: 'Starting from ₹15,000'
    },
    {
      icon: '🏢',
      title: 'Corporate Training',
      description: 'Comprehensive training programs designed for teams and organizations.',
      features: ['Customized programs', 'On-site or remote', 'Team assessments', 'Certification support'],
      longDescription: 'Empower your team with cutting-edge skills through our comprehensive corporate training programs. We design custom curriculums that align with your business objectives and team requirements.',
      benefits: [
        'Tailored curriculum for your organization',
        'On-site or remote training options',
        'Pre and post-training assessments',
        'Detailed progress reports',
        'Flexible batch scheduling'
      ],
      duration: '2-8 weeks',
      pricing: 'Custom quotes based on team size'
    },
    {
      icon: '📜',
      title: 'Certification Programs',
      description: 'Industry-recognized certification courses to boost your career credentials.',
      features: ['Industry standards', 'Exam preparation', 'Practice tests', 'Certification badge'],
      longDescription: 'Get certified in industry-recognized technologies and boost your career prospects. Our certification programs are designed to prepare you thoroughly for professional certification exams.',
      benefits: [
        'Aligned with industry certification exams',
        'Comprehensive study materials',
        'Mock tests and practice questions',
        'Exam strategies and tips',
        'Post-certification career guidance'
      ],
      duration: '6-10 weeks',
      pricing: 'Starting from ₹20,000'
    },
    {
      icon: '💼',
      title: 'Career Counseling',
      description: 'Expert guidance to help you navigate your tech career path.',
      features: ['Resume review', 'Interview prep', 'Career planning', 'Job placement support'],
      longDescription: 'Get expert career guidance from industry professionals who understand the tech landscape. We help you make informed career decisions and prepare for your dream job.',
      benefits: [
        'Professional resume review and rewriting',
        'Mock interviews with detailed feedback',
        'Personalized career roadmap',
        'Job search strategies',
        'LinkedIn profile optimization'
      ],
      duration: '4-8 sessions',
      pricing: 'Starting from ₹5,000'
    },
    {
      icon: '🔧',
      title: 'Custom Training',
      description: 'Bespoke training solutions designed for your specific needs.',
      features: ['Tailored curriculum', 'Flexible duration', 'Specialized topics', 'Ongoing support'],
      longDescription: 'Need something specific? We create completely customized training programs tailored to your unique requirements, whether it\'s a niche technology or specific business need.',
      benefits: [
        'Fully customized curriculum',
        'Choose your own topics and depth',
        'Flexible duration and schedule',
        'One-on-one or group options',
        'Ongoing mentorship available'
      ],
      duration: 'Completely flexible',
      pricing: 'Custom quotes'
    },
    {
      icon: '🌐',
      title: 'Online Learning Platform',
      description: 'Access our comprehensive online learning platform anytime, anywhere.',
      features: ['24/7 access', 'Video lectures', 'Interactive exercises', 'Community forum'],
      longDescription: 'Learn at your own pace with our comprehensive online learning platform. Access high-quality video lectures, hands-on exercises, and connect with a community of learners.',
      benefits: [
        'Learn anytime, anywhere',
        'Self-paced learning modules',
        'Access to entire course library',
        'Interactive coding exercises',
        'Community support and forums'
      ],
      duration: 'Lifetime access',
      pricing: 'Starting from ₹999/month'
    }
  ];

  return (
    <div className="services-page">
      <div className="services-hero section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="page-header">
              <h1 className="page-title">
                Our <span style={{ color: useTechiesColor() }}>Services</span>
              </h1>
              <p className="page-description">
                Comprehensive training solutions to meet all your learning needs
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="services-content section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} direction="up" delay={index * 0.1}>
                <Card className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature) => (
                      <li key={feature}>✓ {feature}</li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="service-button"
                    onClick={() => setSelectedService(service)}
                  >
                    Learn More
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <div className="services-cta section">
        <div className="container">
          <AnimatedSection direction="up">
            <Card className="cta-card">
              <h2>Ready to Get Started?</h2>
              <p>Contact us today to discuss your training needs</p>
              <Link to="/contact">
                <Button size="lg" variant="primary">
                  Contact Us
                </Button>
              </Link>
            </Card>
          </AnimatedSection>
        </div>
      </div>

      {/* Service Details Modal */}
      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
        size="lg"
      >
        {selectedService && (
          <div style={{ padding: '0' }}>
            {/* Icon */}
            <div style={{ 
              fontSize: '3.5rem', 
              textAlign: 'center', 
              marginBottom: '20px' 
            }}>
              {selectedService.icon}
            </div>
            
            {/* Long Description */}
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.7', 
              marginBottom: '28px', 
              color: '#555' 
            }}>
              {selectedService.longDescription}
            </p>

            {/* Key Benefits */}
            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '16px', 
                color: '#333',
                fontWeight: '600'
              }}>
                Key Benefits
              </h3>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                margin: 0
              }}>
                {selectedService.benefits.map((benefit, idx) => (
                  <li key={idx} style={{ 
                    padding: '12px 0', 
                    borderBottom: idx < selectedService.benefits.length - 1 ? '1px solid #f0f0f0' : 'none',
                    color: '#555',
                    fontSize: '15px',
                    display: 'flex',
                    alignItems: 'start'
                  }}>
                    <span style={{ 
                      color: '#26aa61', 
                      marginRight: '10px',
                      fontWeight: 'bold',
                      fontSize: '18px'
                    }}>
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Duration & Pricing */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px', 
              marginBottom: '28px',
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <div>
                <h4 style={{ 
                  fontSize: '13px', 
                  color: '#666', 
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}>
                  Duration
                </h4>
                <p style={{ 
                  fontSize: '17px', 
                  fontWeight: '600', 
                  color: '#333', 
                  margin: 0 
                }}>
                  {selectedService.duration}
                </p>
              </div>
              <div>
                <h4 style={{ 
                  fontSize: '13px', 
                  color: '#666', 
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}>
                  Pricing
                </h4>
                <p style={{ 
                  fontSize: '17px', 
                  fontWeight: '600', 
                  color: '#26aa61', 
                  margin: 0 
                }}>
                  {selectedService.pricing}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '2px solid #e8e8e8'
            }}>
              <Link to="/contact" style={{ flex: 1, textDecoration: 'none' }}>
                <Button variant="primary" style={{ width: '100%' }}>
                  Get Started
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => setSelectedService(null)}
                style={{ flex: 1 }}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

      <BackToTop />
    </div>
  );
};

export default Services;
