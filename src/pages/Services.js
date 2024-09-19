import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <p>We offer a range of services from virtual production, motion capture, and AR/VR solutions.</p>
      <div className="service-grid">
        <div className="service">
          <h3>Virtual Production</h3>
          <p>Immersive virtual production services for film, TV, and gaming.</p>
        </div>
        <div className="service">
          <h3>Motion Capture</h3>
          <p>High-end motion capture solutions with real-time integration.</p>
        </div>
        <div className="service">
          <h3>AR/VR Development</h3>
          <p>Cutting-edge AR/VR solutions to bring your ideas to life.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
