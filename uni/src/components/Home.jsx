import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/1.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="Water Resources Lab" className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">WATER RESOURCES LAB @ CMU</h1>
            <div className="hero-subtitle">Sustainable Water Management Solutions</div>
          </div>
        </div>
      </div>
      
      {/* Welcome Content */}
      <div className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <h2 className="section-title">Welcome to Our Lab</h2>
            <div className="welcome-divider"></div>
            <p className="welcome-text">
              Welcome to the Water Resources Lab at Central Michigan University, led by Dr. Rod Lammers. 
              Our research is focused on sustainable water management, including how to use urban stormwater 
              management and stream restoration to improve water quality, manage flood risk, and restore 
              functioning stream ecosystems.
            </p>
            <div className="cta-container">
              <Link to="/research" className="cta-button">Explore Our Research</Link>
              <Link to="/publications" className="cta-button secondary">View Publications</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Research Highlights */}
      <div className="highlights-section">
        <div className="container">
          <h2 className="section-title">Research Focus Areas</h2>
          <div className="welcome-divider"></div>
          <div className="highlights-grid">
            <div className="highlight-card">
              <h3 className="highlight-title">Stormwater Management</h3>
              <p className="highlight-text">
                Developing innovative approaches to manage urban stormwater runoff and reduce its impact on stream ecosystems.
              </p>
              <Link to="/research" className="highlight-link">Learn More</Link>
            </div>
            
            <div className="highlight-card">
              <h3 className="highlight-title">Stream Restoration</h3>
              <p className="highlight-text">
                Designing and evaluating stream restoration techniques to improve water quality and ecosystem health.
              </p>
              <Link to="/research" className="highlight-link">Learn More</Link>
            </div>
            
            <div className="highlight-card">
              <h3 className="highlight-title">Flood Management</h3>
              <p className="highlight-text">
                Exploring natural infrastructure solutions for flood risk reduction and floodplain management.
              </p>
              <Link to="/research" className="highlight-link">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Join Us Section */}
      <div className="join-section">
        <div className="container">
          <div className="join-content">
            <h2 className="join-title">Join Our Team</h2>
            <p className="join-text">
              We're looking for passionate students and researchers interested in water resources engineering and environmental science.
            </p>
            <Link to="/opportunities" className="cta-button">View Opportunities</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 