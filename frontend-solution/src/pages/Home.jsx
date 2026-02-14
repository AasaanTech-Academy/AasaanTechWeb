import Hero from '../components/Home/Hero';
import FeaturedCourses from '../components/Home/FeaturedCourses';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import TestimonialsPreview from '../components/Home/TestimonialsPreview';
import BackToTop from '../components/UI/BackToTop';
import EventsGallery from '../components/Events/EventsGallery';
import './Home.css';


const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <FeaturedCourses />
      <EventsGallery /> 
      <WhyChooseUs />
      <TestimonialsPreview />
      <BackToTop />
    </div>
  );
};

export default Home;

