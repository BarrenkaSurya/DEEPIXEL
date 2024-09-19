import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Our Work</h2>
      <p>Check out some of our recent projects in film, gaming, and virtual production.</p>
      <div className="portfolio-grid">
        <div className="portfolio-item" style={{backgroundImage: 'url(https://source.unsplash.com/400x300/?film)'}}></div>
        <div className="portfolio-item" style={{backgroundImage: 'url(https://source.unsplash.com/400x300/?game)'}}></div>
        <div className="portfolio-item" style={{backgroundImage: 'url(https://source.unsplash.com/400x300/?vr)'}}></div>
      </div>
    </section>
  );
};

export default Portfolio;
