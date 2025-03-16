import React, { useState, useEffect } from 'react';
import peopleImage from '../assets/8.jpg';
import rodLammersImage from '../assets/9.jpg';
import hooshyarImage from '../assets/10.jpg';
import mohamedImage from '../assets/11.jpg';
import '../styles/People.css';

const People = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animateCards, setAnimateCards] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimateCards(true);
    }, 100);
  }, []);
  
  const handleCategoryChange = (category) => {
    setAnimateCards(false);
    setTimeout(() => {
      setActiveCategory(category);
      setAnimateCards(true);
    }, 300);
  };
  
  return (
    <div className="people">
      {/* Hero Section */}
      <div className="people-hero">
        <img src={peopleImage} alt="People at Water Resources Lab" className="people-hero-image" />
        <div className="people-hero-overlay">
          <div className="people-hero-content">
            <h1 className="people-hero-title">PEOPLE</h1>
            <p className="people-hero-description">
              Meet the researchers and students working to advance water resources science
            </p>
          </div>
        </div>
      </div>
      
      <div className="people-content">
        <div className="container">
          {/* Category Navigation */}
          <div className="category-navigation">
            <button 
              className={`category-button ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              All Team Members
            </button>
            <button 
              className={`category-button ${activeCategory === 'faculty' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('faculty')}
            >
              Faculty
            </button>
            <button 
              className={`category-button ${activeCategory === 'researchers' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('researchers')}
            >
              Research Team
            </button>
            <button 
              className={`category-button ${activeCategory === 'alumni' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('alumni')}
            >
              Alumni
            </button>
          </div>
          
          {/* Faculty Section */}
          {(activeCategory === 'all' || activeCategory === 'faculty') && (
            <section className={`team-section ${animateCards ? 'animate' : ''}`}>
              <h2 className="section-heading">Faculty</h2>
              
              <div className="faculty-profile">
                <div className="faculty-image-container">
                  <img src={rodLammersImage} alt="Dr. Roderick Lammers" className="faculty-image" />
                </div>
                <div className="faculty-details">
                  <div className="faculty-header">
                    <h3 className="faculty-name">Dr. Roderick Lammers</h3>
                    <p className="faculty-position">Assistant Professor</p>
                    <p className="faculty-department">
                      <a href="https://www.cmich.edu/academics/colleges/college-science-engineering/departments-schools/school-of-engineering-and-technology/" target="_blank" rel="noopener noreferrer">
                        School of Engineering & Technology
                      </a>
                    </p>
                  </div>
                  <div className="faculty-bio">
                    <p>
                      I am an Assistant Professor in Environmental Engineering at Central Michigan University. 
                      I have BS degrees in Ecological Engineering and Ecology from Purdue University and a MS and PhD 
                      in Civil & Environmental Engineering from Colorado State University. I am interested in improving 
                      management of our water resources, especially in heavily impacted urban areas. I hope my research 
                      and teaching can help make real-world changes to improve water quality, reduce flood risk, and 
                      improve the ecological health of our waterways. I enjoy canoeing, hiking, and running, especially 
                      with my wife and two sons.
                    </p>
                  </div>
                  <div className="faculty-contact">
                    <div className="contact-item">
                      <span className="contact-label">Email:</span>
                      <span className="contact-value">lammers@cmu.edu</span>
                    </div>
                    <div className="contact-item">
                      <span className="contact-label">Office:</span>
                      <span className="contact-value">Engineering Building, Room 123</span>
                    </div>
                    <div className="contact-item">
                      <span className="contact-label">Phone:</span>
                      <span className="contact-value">(555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          
          {/* Research Team Section */}
          {(activeCategory === 'all' || activeCategory === 'researchers') && (
            <section className={`team-section ${animateCards ? 'animate' : ''}`}>
              <h2 className="section-heading">Research Team</h2>
              
              <div className="researchers-grid">
                <div className="researcher-card">
                  <div className="researcher-image-wrapper">
                    <img src={mohamedImage} alt="Mohamed S. Gaballah" className="researcher-image" />
                  </div>
                  <div className="researcher-content">
                    <h3 className="researcher-name">Mohamed S. Gaballah</h3>
                    <p className="researcher-position">Postdoctoral Fellow</p>
                    <p className="researcher-department">Environmental Engineering</p>
                    <div className="researcher-bio-wrapper">
                      <p className="researcher-bio">
                        I am a post-doc researcher in Environmental Engineering at Central Michigan University. 
                        I have B.Sc. and M.Sc. degrees in Agricultural & Bio-systems Engineering from Alexandria 
                        University (Egypt) and a Ph.D. in Engineering at China Agricultural University (China). 
                        I am interested in pollutants (i.e., nutrients, heavy metals, and antibiotics) removal 
                        from water and wastewater, Nature-Based Solutions technologies (using constructed wetlands), 
                        bioenergy production from wastes (using anaerobic digestion processes), monitoring pollutant 
                        fate and transport in the environment, and pollutant removal modelling aspects. I hope my 
                        research can help reduce water pollution using low-cost technology that can be applied 
                        around the world. I enjoy soccer, volleyball, and running.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="researcher-card">
                  <div className="researcher-image-wrapper">
                    <img src={hooshyarImage} alt="Hooshyar Yousefyani" className="researcher-image" />
                  </div>
                  <div className="researcher-content">
                    <h3 className="researcher-name">Hooshyar Yousefyani</h3>
                    <p className="researcher-position">Ph.D. Student</p>
                    <p className="researcher-department">Earth and Ecosystem Science</p>
                    <div className="researcher-bio-wrapper">
                      <p className="researcher-bio">
                        I am a PhD student in Earth and Ecosystem Science, studying at Central Michigan University, 
                        working with Professor Lammers. For my master's degree, I studied Civil Engineering for Risk 
                        Mitigation at Politecnico di Milano University. This field was related to studying natural 
                        hazards, so I worked on sediment transport phenomenon for my thesis. My thesis topic helped 
                        me get to know Professor Lammers to do research on topics related to flood management and 
                        stream restoration. I hope my research under his supervision helps to add a piece to the 
                        complex puzzle of hydrology and hydraulic science. In my free time, I enjoy watching movies 
                        and YouTube, playing video games and camping in nature.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          
          {/* Alumni Section */}
          {(activeCategory === 'all' || activeCategory === 'alumni') && (
            <section className={`team-section ${animateCards ? 'animate' : ''}`}>
              <h2 className="section-heading">Alumni</h2>
              
              <div className="alumni-grid">
                <div className="alumni-card">
                  <h3 className="alumni-name">Mohammadjavad Karami</h3>
                  <p className="alumni-info">MS Student - graduated 2024</p>
                </div>
                
                <div className="alumni-card">
                  <h3 className="alumni-name">Daniel Ruane</h3>
                  <p className="alumni-info">Undergrad - graduated 2022</p>
                </div>
                
                <div className="alumni-card">
                  <h3 className="alumni-name">Sara Plude</h3>
                  <p className="alumni-info">Undergrad - graduated 2022</p>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default People; 