import React from 'react';
import { Link } from 'react-router-dom';
import opportunitiesImage from '../assets/12.jpg';
import '../styles/Opportunities.css';

const Opportunities = () => {
  return (
    <div className="opportunities">
      {/* Hero Section */}
      <div className="opportunities-hero">
        <img src={opportunitiesImage} alt="Opportunities at Water Resources Lab" className="opportunities-hero-image" />
        <div className="opportunities-hero-overlay">
          <div className="opportunities-hero-content">
            <h1 className="opportunities-hero-title">OPPORTUNITIES</h1>
            <p className="opportunities-hero-subtitle">Join Our Research Team</p>
          </div>
        </div>
      </div>
      
      <div className="opportunities-content">
        <div className="container">
          <div className="opportunities-intro">
            <p>
              The Water Resources Lab at CMU is actively seeking talented and motivated individuals to join our research team. 
              We offer various opportunities for undergraduate and graduate students interested in water resources engineering, 
              environmental science, and related fields.
            </p>
          </div>
          
          <section className="opportunity-section">
            <h2 className="section-title">Undergraduate Researchers</h2>
            <div className="opportunity-card">
              <div className="opportunity-description">
                <p>
                  I am looking for undergraduate students to join our lab. There is the potential to work on a 
                  variety of projects related to urban stormwater, stream restoration, water quality, and flood 
                  issues (see <Link to="/research" className="inline-link">Research</Link> for more information). 
                  I primarily use custom and off-the-shelf computer models to explore these topics. Experience 
                  with one or more of the following tools is ideal, but not required:
                </p>
                
                <ul className="skills-list">
                  <li>Hydrologic (e.g., SWMM) and hydraulic (e.g., HEC-RAS) models</li>
                  <li>Geographic Information Systems (GIS)</li>
                  <li>Coding/scripting (R, Python, VBA)</li>
                  <li>Basic surveying</li>
                </ul>
                
                <div className="application-info">
                  <p>
                    Undergraduate students interested in a paid research position can contact me at 
                    <a href="mailto:lamme1r@cmich.edu" className="email-link">lamme1r@cmich.edu</a>. 
                    Please include a short statement on why you are interested in research.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="opportunity-section">
            <h2 className="section-title">Graduate Students</h2>
            <div className="opportunity-card">
              <div className="opportunity-description">
                <p>
                  Prospective masters students will apply to CMU's Master's of Science in Engineering program. 
                  Please email me (<a href="mailto:lamme1r@cmich.edu" className="email-link">lamme1r@cmich.edu</a>) 
                  to discuss potential positions before applying. Please include a resume/CV along with a short 
                  description of the type of research you are interested in.
                </p>
              </div>
            </div>
          </section>
          
          <section className="join-cta-section">
            <div className="join-cta">
              <h2 className="join-cta-title">Why Join Our Lab?</h2>
              <div className="join-cta-content">
                <p>
                  As a member of our research team, you'll have the opportunity to work on cutting-edge projects 
                  that address real-world water management challenges. You'll gain valuable research experience, 
                  develop technical skills, and contribute to sustainable water resource solutions.
                </p>
                <div className="cta-buttons">
                  <Link to="/people" className="cta-button">Meet Our Team</Link>
                  <Link to="/research" className="cta-button secondary">Explore Research</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Opportunities; 