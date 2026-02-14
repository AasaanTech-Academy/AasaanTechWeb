// import { useState } from 'react';
// import { eventsData } from '../../data/events';
// import AnimatedSection from '../Common/AnimatedSection';
// import './EventsGallery.css';

// const EventsGallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   // Flatten all images from all events
//   const allImages = eventsData.flatMap(event => 
//     event.images.map(img => ({
//       url: img,
//       title: event.title,
//       location: event.location
//     }))
//   );

//   const openLightbox = (index) => {
//     setSelectedImage(allImages[index]);
//     setSelectedIndex(index);
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//   };

//   const nextImage = () => {
//     const newIndex = (selectedIndex + 1) % allImages.length;
//     setSelectedIndex(newIndex);
//     setSelectedImage(allImages[newIndex]);
//   };

//   const prevImage = () => {
//     const newIndex = selectedIndex === 0 ? allImages.length - 1 : selectedIndex - 1;
//     setSelectedIndex(newIndex);
//     setSelectedImage(allImages[newIndex]);
//   };

//   return (
//     <section className="events-gallery-section">
//       <div className="container">
//         <AnimatedSection direction="up">
//           <div className="section-header">
//             <h2 className="section-title">
//               Our <span className="text-gradient">Events</span>
//             </h2>
//             <p className="section-description">
//               Capturing moments from our workshops and training programs
//             </p>
//           </div>
//         </AnimatedSection>

//         {/* Horizontal Scrolling Photo Gallery */}
//         <AnimatedSection direction="up" delay={0.2}>
//           <div className="gallery-scroll-container">
//             <div className="gallery-scroll-track">
//               {/* Duplicate images for seamless infinite loop */}
//               {[...allImages, ...allImages].map((item, index) => (
//                 <div 
//                   key={index} 
//                   className="gallery-image-wrapper"
//                   onClick={() => openLightbox(index % allImages.length)}
//                 >
//                   <img 
//                     src={item.url} 
//                     alt={item.title}
//                     className="gallery-image"
//                     loading="lazy"
//                   />
//                   <div className="gallery-overlay">
//                     <span className="event-title">{item.title}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </AnimatedSection>
//       </div>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div className="lightbox-overlay" onClick={closeLightbox}>
//           <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
//             <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
//               ✕
//             </button>
            
//             <button className="lightbox-nav lightbox-prev" onClick={prevImage} aria-label="Previous">
//               ‹
//             </button>

//             <img 
//               src={selectedImage.url} 
//               alt={selectedImage.title}
//               className="lightbox-image"
//             />

//             <button className="lightbox-nav lightbox-next" onClick={nextImage} aria-label="Next">
//               ›
//             </button>

//             <div className="lightbox-info">
//               <h3>{selectedImage.title}</h3>
//               <p>{selectedImage.location}</p>
//               <p className="lightbox-counter">
//                 {selectedIndex + 1} / {allImages.length}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default EventsGallery;

import { useState } from 'react';
import { eventsData } from '../../data/events';
import './EventsGallery.css';

const EventsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Flatten all images from all events
  const allImages = eventsData.flatMap(event => 
    event.images.map(img => ({
      url: img,
      title: event.title
    }))
  );

  const openLightbox = (index) => {
    setSelectedImage(allImages[index]);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (selectedIndex + 1) % allImages.length;
    setSelectedIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = selectedIndex === 0 ? allImages.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  return (
    <>
      {/* Just the scrolling photos - nothing else */}
      <div className="gallery-scroll-container">
        <div className="gallery-scroll-track">
          {/* Duplicate images for seamless infinite loop */}
          {[...allImages, ...allImages].map((item, index) => (
            <div 
              key={index} 
              className="gallery-image-wrapper"
              onClick={() => openLightbox(index % allImages.length)}
            >
              <img 
                src={item.url} 
                alt={item.title}
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            
            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              ‹
            </button>

            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="lightbox-image"
            />

            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsGallery;
