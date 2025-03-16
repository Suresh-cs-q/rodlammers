import React, { useState } from 'react';
import teachingImage from '../assets/7.jpg';
import '../styles/Teaching.css';

const Teaching = () => {
  const [activeTab, setActiveTab] = useState('cmu');
  
  return (
    <div className="teaching">
      {/* Hero Section */}
      <div className="teaching-hero">
        <img src={teachingImage} alt="Teaching at Water Resources Lab" className="teaching-hero-image" />
        <div className="teaching-hero-overlay">
          <div className="teaching-hero-content">
            <h1 className="teaching-hero-title">TEACHING</h1>
            <div className="teaching-hero-subtitle">Water Resources Engineering Education</div>
          </div>
        </div>
      </div>
      
      <div className="teaching-content">
        <div className="container">
          <div className="teaching-intro">
            <h2 className="section-title">Course Offerings</h2>
            <div className="section-divider"></div>
            <p className="teaching-description">
              Dr. Lammers teaches a variety of undergraduate and graduate courses in environmental engineering, 
              water resources, and related fields. These courses combine theoretical knowledge with practical 
              applications to prepare students for careers in water resources management and environmental engineering.
            </p>
          </div>
          
          {/* Course Navigation */}
          <div className="course-tabs">
            <button 
              className={`course-tab ${activeTab === 'cmu' ? 'active' : ''}`}
              onClick={() => setActiveTab('cmu')}
            >
              CMU Courses
            </button>
            <button 
              className={`course-tab ${activeTab === 'previous' ? 'active' : ''}`}
              onClick={() => setActiveTab('previous')}
            >
              Previous Courses
            </button>
          </div>
          
          {/* CMU Courses */}
          <div className={`course-section ${activeTab === 'cmu' ? 'visible' : 'hidden'}`}>
            <div className="courses-grid">
              <div className="course">
                <div className="course-header">
                  <h3 className="course-title">EGR 306: Environmental Engineering Laboratory</h3>
                </div>
                <div className="course-content">
                  <p className="course-description">
                    Laboratory methods in environmental engineering applications. Analysis of selected chemical and 
                    microbiological water quality parameters. Experiments on selected unit operations and processes 
                    of environmental engineering.
                  </p>
                </div>
              </div>
              
              <div className="course">
                <div className="course-header">
                  <h3 className="course-title">EGR 408: Water Resources Engineering</h3>
                </div>
                <div className="course-content">
                  <p className="course-description">
                    Fundamentals and applications of water resources engineering. Open-channel flow; pipe networks; 
                    hydrologic techniques; surface water and ground-water supplies; water demand; and development 
                    of water resources.
                  </p>
                </div>
              </div>
              
              <div className="course">
                <div className="course-header">
                  <h3 className="course-title">EGR 409: Solid and Hazardous Waste Engineering</h3>
                </div>
                <div className="course-content">
                  <p className="course-description">
                    Engineering design, planning, and analysis of problems associated with waste minimization, 
                    storage, collection, processing, and disposal of solid and hazardous wastes. Recycling and 
                    reuse options.
                  </p>
                </div>
              </div>
              
              <div className="course">
                <div className="course-header">
                  <h3 className="course-title">EGR 511: Water Quality Management</h3>
                </div>
                <div className="course-content">
                  <p className="course-description">
                    Water quality standards. Indicators, monitoring and impacts of water quality. Point and 
                    non-point sources of water pollution. Water quality protection and improvement. Green 
                    infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Previous Courses */}
          <div className={`course-section ${activeTab === 'previous' ? 'visible' : 'hidden'}`}>
            <div className="courses-grid">
              <div className="course">
                <div className="course-header">
                  <h3 className="course-title">ENVE 4435/6435: Natural Resources Engineering</h3>
                </div>
                <div className="course-content">
                  <p className="course-description">
                    Engineering hydrology, soil erosion, introduction to open channel design, runoff estimations 
                    and calculations, engineered containment structures, landscape-scale water distribution, and 
                    non-point water quality.
                  </p>
                </div>
              </div>
              
              <div className="course">
                <div className="course-header">
                  <h3 className="course-title">ENVE 4900/6450: Engineering Hydrology and Hydraulics</h3>
                </div>
                <div className="course-content">
                  <p className="course-description">
                    Quantitative methods in hydrology and hydraulics providing a theoretical background for water 
                    resource management from an engineering perspective. Hydrology topics include precipitation, 
                    rainfall losses, storm runoff, unit hydrographs, and statistical hydrology. Hydraulics topics 
                    include open channel flow, groundwater flow, floodplain analysis, and flow control structures.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Teaching Philosophy */}
          <div className="teaching-philosophy">
            <h2 className="section-title">Teaching Philosophy</h2>
            <div className="section-divider"></div>
            <div className="philosophy-content">
              <p>
                Our teaching approach emphasizes hands-on learning and real-world applications of water resources 
                engineering concepts. Students engage with current research problems and develop practical skills 
                that prepare them for careers in environmental engineering and water management.
              </p>
              <p>
                We believe in fostering critical thinking and problem-solving abilities through a combination of 
                theoretical foundations and applied projects. Our courses incorporate the latest advancements in 
                the field while maintaining focus on fundamental principles that form the basis of sound engineering practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaching; 