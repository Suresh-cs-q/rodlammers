import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import researchImage from '../assets/2.jpg';
import stormwaterImage from '../assets/3.jpg';
import floodManagementImage from '../assets/4.jpg';
import nutrientPollutionImage from '../assets/5.jpg';
import '../styles/Research.css';

const Research = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  return (
    <div className="research">
      {/* Hero Section */}
      <div className="research-hero">
        <img src={researchImage} alt="Research at Water Resources Lab" className="research-hero-image" />
        <div className="research-hero-overlay">
          <div className="research-hero-content">
            <h1 className="research-hero-title">RESEARCH</h1>
            <div className="research-hero-subtitle">Advancing Water Resources Science</div>
          </div>
        </div>
      </div>

      {/* Research Content Section */}
      <div className="research-content">
        <div className="container">
          <div className="research-intro">
            <h2 className="section-title">Our Research Focus</h2>
            <div className="section-divider"></div>
            <p className="research-description">
              The Water Resources Lab at CMU conducts cutting-edge research in various areas of water
              management and environmental engineering. Our interdisciplinary approach combines field studies,
              laboratory experiments, and computational modeling to address complex water-related challenges.
            </p>
          </div>
          
          {/* Research Navigation */}
          <div className="research-nav">
            <button 
              className={`research-nav-item ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Research Areas
            </button>
            <button 
              className={`research-nav-item ${activeTab === 'stormwater' ? 'active' : ''}`}
              onClick={() => setActiveTab('stormwater')}
            >
              Stormwater Management
            </button>
            <button 
              className={`research-nav-item ${activeTab === 'flood' ? 'active' : ''}`}
              onClick={() => setActiveTab('flood')}
            >
              Flood Management
            </button>
            <button 
              className={`research-nav-item ${activeTab === 'nutrient' ? 'active' : ''}`}
              onClick={() => setActiveTab('nutrient')}
            >
              Nutrient Pollution
            </button>
          </div>

          {/* Research Areas */}
          <div className="research-areas">
            {/* Stormwater Management + Stream Restoration */}
            <div className={`research-area ${activeTab === 'all' || activeTab === 'stormwater' ? 'visible' : 'hidden'}`}>
              <div className="research-area-header">
                <h3 className="research-area-title">Stormwater Management + Stream Restoration</h3>
                <div className="research-area-divider"></div>
              </div>

              <div className="research-area-content">
                <div className="research-area-image-container">
                  <img src={stormwaterImage} alt="Stormwater Management and Stream Restoration" className="research-area-image" />
                </div>

                <div className="research-area-text">
                  <p>
                    Streams in cities often suffer significant erosion as they are overwhelmed by the huge amount
                    of water running off pavement, buildings, and other impervious area. Excess erosion can damage
                    infrastructure (e.g., roads and bridges), harm water quality, and impact fish and other biota.
                    These eroding streams can be "restored" to help make them more resistant to erosion, but this
                    addresses the symptoms, rather than the cause of the problem.
                  </p>
                  <p>
                    Stormwater management can help capture this excess runoff, preventing it from reaching streams
                    in the first place. Still, it is unclear how to best design stormwater controls to minimize
                    stream erosion and what additional benefits stream restoration can provide when coordinated
                    with these practices. I'm exploring the links between stormwater management and stream
                    restoration to help provide design-relevant guidance to practicing engineers and city
                    stormwater managers.
                  </p>
                  <div className="research-area-actions">
                    <Link to="/publications" className="research-link">Related Publications</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Natural Infrastructure for Flood Management */}
            <div className={`research-area ${activeTab === 'all' || activeTab === 'flood' ? 'visible' : 'hidden'}`}>
              <div className="research-area-header">
                <h3 className="research-area-title">Natural Infrastructure for Flood Management</h3>
                <div className="research-area-divider"></div>
              </div>

              <div className="research-area-content">
                <div className="research-area-image-container">
                  <img src={floodManagementImage} alt="Natural Infrastructure for Flood Management" className="research-area-image" />
                </div>

                <div className="research-area-text">
                  <p>
                    Most people think of infrastructure as bridges, roads, dams, and power lines. However,
                    natural systems also serve as infrastructure and provide valuable services to society.
                    For example, functioning river floodplains can store and slow flood water, reducing the
                    extent and severity of flooding downstream. This natural infrastructure can also provide
                    additional benefits, such as improving water quality and enhancing biodiversity.
                  </p>
                  <p>
                    The potential of natural infrastructure is being increasingly recognized, but there is
                    not clear guidance on how to plan and design these features. As an example, flood control
                    levees may protect some properties from flooding, but can actually increase flood risk
                    elsewhere. Strategically removing or setting back these levees can restore natural
                    river-floodplain connections, creating a natural infrastructure system to reduce flood impacts.
                  </p>
                  <p>
                    I am interested in these types of riverine natural infrastructure solutions and improving
                    our understanding of when and where these types of projects are most effective.
                  </p>
                  <div className="research-area-actions">
                    <Link to="/publications" className="research-link">Related Publications</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Reducing Nutrient Pollution */}
            <div className={`research-area ${activeTab === 'all' || activeTab === 'nutrient' ? 'visible' : 'hidden'}`}>
              <div className="research-area-header">
                <h3 className="research-area-title">Reducing Nutrient Pollution</h3>
                <div className="research-area-divider"></div>
              </div>

              <div className="research-area-content">
                <div className="research-area-image-container">
                  <img src={nutrientPollutionImage} alt="Reducing Nutrient Pollution" className="research-area-image" />
                </div>

                <div className="research-area-text">
                  <p>
                    Nutrient pollution - excess nitrogen and phosphorus - cause algal blooms which damage
                    aquatic ecosystems and contaminate drinking water supplies. Common sources of nutrient
                    pollution are urban wastewater and stormwater and agricultural runoff. Strategies to
                    reduce nutrient pollution at the source is critical, but we may also be able to enhance
                    the natural filtering capabilities of the streams and rivers that carry this pollution downstream.
                  </p>
                  <p>
                    Targeted stream restoration can help remove nitrogen and phosphorus from streams either
                    through biogeochemical processes (e.g., denitrification) or through deposition and storage
                    of contaminated sediment (e.g., on floodplains). Still, stream restoration may not be
                    effective in all cases and, even if it is, quantifying these benefits is extraordinarily difficult.
                  </p>
                  <p>
                    I am working on improving these methods and improving our understanding of the potential
                    for stream systems to trap and remove nutrient pollution.
                  </p>
                  <div className="research-area-actions">
                    <Link to="/publications" className="research-link">Related Publications</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="research-cta">
            <h3 className="research-cta-title">Interested in Our Research?</h3>
            <p className="research-cta-text">
              We're always looking for passionate students and collaborators to join our research efforts.
            </p>
            <div className="research-cta-buttons">
              <Link to="/publications" className="cta-button">View Publications</Link>
              <Link to="/opportunities" className="cta-button secondary">Join Our Team</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research; 