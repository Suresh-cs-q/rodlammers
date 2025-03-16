import React, { useState } from 'react';
import publicationsImage from '../assets/6.jpg';
import '../styles/Publications.css';

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter publications based on year or search query
  const filterPublications = (year) => {
    setActiveFilter(year);
    setSearchQuery('');
  };
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setActiveFilter('all');
  };
  
  return (
    <div className="publications">
      {/* Hero Section */}
      <div className="publications-hero">
        <img src={publicationsImage} alt="Publications from Water Resources Lab" className="publications-hero-image" />
        <div className="publications-hero-overlay">
          <div className="publications-hero-content">
            <h1 className="publications-hero-title">PUBLICATIONS</h1>
            <div className="publications-hero-subtitle">Research Contributions to Water Resources Science</div>
          </div>
        </div>
      </div>
      
      <div className="publications-content">
        <div className="container">
          <div className="publications-intro-section">
            <h2 className="section-title">Our Research Publications</h2>
            <div className="section-divider"></div>
            <p className="publications-intro">
              Our lab has published research in leading journals and conferences in the field of water resources
              management and environmental engineering. Dr. Lammers' work has been cited over 400 times, with an 
              h-index of 12 and i10-index of 14. Below is a selection of our peer-reviewed publications and reports.
            </p>
          </div>
          
          {/* Publications Filter and Search */}
          <div className="publications-controls">
            <div className="publications-filters">
              <button 
                className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => filterPublications('all')}
              >
                All Years
              </button>
              <button 
                className={`filter-button ${activeFilter === '2024' ? 'active' : ''}`}
                onClick={() => filterPublications('2024')}
              >
                2024
              </button>
              <button 
                className={`filter-button ${activeFilter === '2023' ? 'active' : ''}`}
                onClick={() => filterPublications('2023')}
              >
                2023
              </button>
              <button 
                className={`filter-button ${activeFilter === '2022' ? 'active' : ''}`}
                onClick={() => filterPublications('2022')}
              >
                2022
              </button>
              <button 
                className={`filter-button ${activeFilter === '2021-2017' ? 'active' : ''}`}
                onClick={() => filterPublications('2021-2017')}
              >
                2021-2017
              </button>
              <button 
                className={`filter-button ${activeFilter === 'reports' ? 'active' : ''}`}
                onClick={() => filterPublications('reports')}
              >
                Reports
              </button>
            </div>
            
            <div className="publications-search">
              <input 
                type="text" 
                placeholder="Search publications..." 
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
          </div>
          
          {/* Publications Categories */}
          <div className="publications-categories">
            {/* Peer-Reviewed Publications */}
            <div className={`publications-section ${activeFilter !== 'reports' ? 'visible' : 'hidden'}`}>
              <h2 className="publications-category-title">Peer-Reviewed Publications</h2>
              
              {/* 2024 Publications */}
              <div className={`publications-year-section ${activeFilter === 'all' || activeFilter === '2024' || searchQuery ? 'visible' : 'hidden'}`}>
                <h3 className="publications-year">2024</h3>
                <div className="publications-list">
                  <div className={`publication-item ${searchQuery && !('from literature to action nitrogen phosphorus removal wetlands').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">From literature to action: Analyzing how nitrogen and phosphorus removal responds to different design factors in free water surface constructed wetlands</h3>
                    <p className="publication-authors">Gaballah, M.S., Yousefyani, H., and Lammers, R.W. (2024)</p>
                    <p className="publication-journal">ACS ES&T Engineering</p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1021/acsestengg.4c00392" className="publication-link" target="_blank" rel="noopener noreferrer">View Publication</a>
                    </div>
                  </div>
                  
                  <div className={`publication-item ${searchQuery && !('free water surface constructed wetlands review pollutant removal').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">Free water surface constructed wetlands: Review of pollutant removal performance and modeling approaches</h3>
                    <p className="publication-authors">Gaballah, M.S., Yousefyani, H., Karami, M., and Lammers, R.W. (2024)</p>
                    <p className="publication-journal">Environmental Science and Pollution Research, 31: 44649-44668</p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1007/s11356-024-34151-7" className="publication-link" target="_blank" rel="noopener noreferrer">View Publication</a>
                    </div>
                  </div>
                  
                  <div className={`publication-item ${searchQuery && !('modeling flood protection levee setbacks nature-based solution').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">Modeling the flood protection services of levee setbacks, a nature-based solution</h3>
                    <p className="publication-authors">Chambers, M., Lammers, R.W., Gupta, A., Bilskie, M.V., Bledsoe B. (2024)</p>
                    <p className="publication-journal">Journal of Hydrology, 634: 131106</p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1016/j.jhydrol.2024.131106" className="publication-link" target="_blank" rel="noopener noreferrer">View Publication</a>
                    </div>
                  </div>
                  
                  <div className={`publication-item ${searchQuery && !('modeling effects levee setbacks flood hydraulics').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">Modeling the effects of levee setbacks on flood hydraulics</h3>
                    <p className="publication-authors">Lammers, R.W., Chambers, M., and Bledsoe, B.P. (2023)</p>
                    <p className="publication-journal">Journal of Flood Risk Management, E12693</p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1111/jfr3.12963" className="publication-link" target="_blank" rel="noopener noreferrer">View Publication</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 2023 Publications */}
              <div className={`publications-year-section ${activeFilter === 'all' || activeFilter === '2023' || searchQuery ? 'visible' : 'hidden'}`}>
                <h3 className="publications-year">2023</h3>
                <div className="publications-list">
                  <div className={`publication-item ${searchQuery && !('reimagining infrastructure biodiverse future').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">Re-imagining infrastructure for a biodiverse future</h3>
                    <p className="publication-authors">Van Rees, C.B., Hernandez-Abrams, D., Shudtz, M., Lammers, R.W., Byers, J., Bledsoe, B., et al. (2023)</p>
                    <p className="publication-journal">Proceedings of the National Academy of Sciences, 120(46): e2214334120</p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1073/pnas.2214334120" className="publication-link" target="_blank" rel="noopener noreferrer">View Publication</a>
                    </div>
                  </div>
                  
                  <div className={`publication-item ${searchQuery && !('nature-based solutions leveed river corridors').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">Nature-based solutions for leveed river corridors</h3>
                    <p className="publication-authors">Chambers, M.L., van Rees, C.B., Bledsoe, B.P., Crane, D., Ferreira, S., Hall, D.M., Lammers, R.W., et al. (2023)</p>
                    <p className="publication-journal">Anthropocene, 44: 100417</p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1016/j.ancene.2023.100417" className="publication-link" target="_blank" rel="noopener noreferrer">View Publication</a>
                    </div>
                  </div>
                  
                  <div className={`publication-item ${searchQuery && !('recognizing flood exposure inequities frequencies').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">Recognizing flood exposure inequities across flood frequencies</h3>
                    <p className="publication-authors">Selsor H., Bledsoe B.P., and Lammers R.W. (2023)</p>
                    <p className="publication-journal">Anthropocene, 42: 100371</p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1016/j.ancene.2023.100371" className="publication-link" target="_blank" rel="noopener noreferrer">View Publication</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 2022 Publications */}
              <div className={`publications-year-section ${activeFilter === 'all' || activeFilter === '2022' || searchQuery ? 'visible' : 'hidden'}`}>
                <h3 className="publications-year">2022</h3>
                <div className="publications-list">
                  <div className={`publication-item ${searchQuery && !('global sensitivity analyses riparian nitrogen models').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">Global sensitivity analyses of key riparian nitrogen models</h3>
                    <p className="publication-authors">Buhr D.X., Lammers R.W., and Bledsoe B.P. (2022)</p>
                    <p className="publication-journal">Environmental Modelling & Software, 158: 105542</p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1016/j.envsoft.2022.105542" className="publication-link" target="_blank" rel="noopener noreferrer">View Publication</a>
                    </div>
                  </div>
                  
                  <div className={`publication-item ${searchQuery && !('effects design climate bioretention effectiveness watershed').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">Effects of design and climate on bioretention effectiveness for watershed-scale hydrologic benefits</h3>
                    <p className="publication-authors">Lammers, R.W., Miller L., and Bledsoe B.P. (2022)</p>
                    <p className="publication-journal">Journal of Sustainable Water in the Built Environment, 8(4): 04022011</p>
                    <div className="publication-links">
                      <a href="https://www.rodlammers.com/uploads/1/3/8/5/138544355/lammers_bioretention_and_climate_2022.pdf" className="publication-link" target="_blank" rel="noopener noreferrer">View PDF</a>
                    </div>
                  </div>
                  
                  <div className={`publication-item ${searchQuery && !('spatial trends drivers bedload suspended sediment fluxes global rivers').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">Spatial trends and drivers of bedload and suspended sediment fluxes in global rivers</h3>
                    <p className="publication-authors">Cohen, S., Syvitski, J., Ashely, T., Lammers, R.W., Fekete, B., Li, H-Y. (2022)</p>
                    <p className="publication-journal">Water Resources Research, 58: e2021WR031583</p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1029/2021WR03158" className="publication-link" target="_blank" rel="noopener noreferrer">View Publication</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 2021-2017 Publications */}
              <div className={`publications-year-section ${activeFilter === 'all' || activeFilter === '2021-2017' || searchQuery ? 'visible' : 'hidden'}`}>
                <h3 className="publications-year">2021-2017</h3>
                <div className="publications-list">
                  <div className={`publication-item ${searchQuery && !('prediction models urban flood evolution satellite remote sensing').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">Prediction models for urban flood evolution for satellite remote sensing</h3>
                    <p className="publication-authors">Lammers, R.W., Li A., Nag S., and Ravindra V. (2021)</p>
                    <p className="publication-journal">Journal of Hydrology, 603: 127175</p>
                    <div className="publication-links">
                      <a href="https://www.rodlammers.com/uploads/1/3/8/5/138544355/lammers_et_al_urban_flood_prediction_models_2021.pdf" className="publication-link" target="_blank" rel="noopener noreferrer">View PDF</a>
                    </div>
                  </div>
                  
                  <div className={`publication-item ${searchQuery && !('role warm dry summers variation snowpack phytoplankton dynamics mountain lakes').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">The role of warm, dry summers and variation in snowpack on phytoplankton dynamics in mountain lakes</h3>
                    <p className="publication-authors">Oleksy, I., Beck, W., Lammers, R.W., Steger, C., Wilson, C., Christianson, K., et al. (2020)</p>
                    <p className="publication-journal">Ecology, 101(1): e03132</p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1002/ecy.3132" className="publication-link" target="_blank" rel="noopener noreferrer">View Publication</a>
                    </div>
                  </div>
                  
                  <div className={`publication-item ${searchQuery && !('integrating stormwater management stream restoration strategies water quality benefits').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">Integrating stormwater management and stream restoration strategies for greater water quality benefits</h3>
                    <p className="publication-authors">Lammers R.W., Dell T.A., and Bledsoe B.P. (2020)</p>
                    <p className="publication-journal">Journal of Environmental Quality, 49(3): 569-581</p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1002/jeq2.20047" className="publication-link" target="_blank" rel="noopener noreferrer">View Publication</a>
                    </div>
                  </div>
                  
                  <div className={`publication-item ${searchQuery && !('quantifying pollutant loading channel sources watershed river erosion model').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">Quantifying pollutant loading from channel sources: Watershed-scale application of the River Erosion Model</h3>
                    <p className="publication-authors">Lammers R.W., Bledsoe B.P. (2019)</p>
                    <p className="publication-journal">Journal of Environmental Management, 234: 104-114</p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1016/j.jenvman.2018.12.074" className="publication-link" target="_blank" rel="noopener noreferrer">View Publication</a>
                    </div>
                  </div>
                  
                  <div className={`publication-item ${searchQuery && !('network scale intermediate complexity model simulating channel evolution').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">A network scale, intermediate complexity model for simulating channel evolution over years to decades</h3>
                    <p className="publication-authors">Lammers R.W., Bledsoe B.P. (2018)</p>
                    <p className="publication-journal">Journal of Hydrology, 566: 886-900</p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1016/j.jhydrol.2018.09.036" className="publication-link" target="_blank" rel="noopener noreferrer">View Publication</a>
                    </div>
                  </div>
                  
                  <div className={`publication-item ${searchQuery && !('what role does stream restoration play nutrient management').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                    <h3 className="publication-title">What role does stream restoration play in nutrient management?</h3>
                    <p className="publication-authors">Lammers R.W., Bledsoe B.P. (2017)</p>
                    <p className="publication-journal">Critical Reviews in Environmental Science & Technology, 47(6): 335-371</p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1080/10643389.2017.1318618" className="publication-link" target="_blank" rel="noopener noreferrer">View Publication</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Selected Reports */}
            <div className={`publications-section ${activeFilter === 'all' || activeFilter === 'reports' || searchQuery ? 'visible' : 'hidden'}`}>
              <h2 className="publications-category-title">Selected Reports</h2>
              <div className="publications-list">
                <div className={`publication-item ${searchQuery && !('evaluation recommendations functional assessment stream restoration water quality urban watersheds').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                  <h3 className="publication-title">Evaluation of and Recommendations for Functional Assessment of Stream Restoration for Water Quality Benefits in Urban Watersheds</h3>
                  <p className="publication-authors">Bledsoe B.P., Yaryan Hall H., and Lammers R. (2019)</p>
                  <p className="publication-journal">Project No. SIWM16R16/4838, The Water Research Foundation, Alexandria, VA</p>
                  <p className="publication-note">36 pages</p>
                  <div className="publication-links">
                    <a href="https://www.waterrf.org/research/projects/evaluation-and-recommendations-functional-assessment-stream-restoration-water" className="publication-link" target="_blank" rel="noopener noreferrer">View Report</a>
                  </div>
                </div>
                
                <div className={`publication-item ${searchQuery && !('urban river restoration bringing nature back cities').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                  <h3 className="publication-title">Urban River Restoration: Bringing Nature Back to Cities</h3>
                  <p className="publication-authors">Lammers R.W. and Day C. (2018)</p>
                  <p className="publication-journal">Institute for the Built Environment, Colorado State University, Fort Collins, CO</p>
                  <p className="publication-note">27 pages</p>
                  <div className="publication-links">
                    <a href="https://ibe.colostate.edu/urban-river-restoration/" className="publication-link" target="_blank" rel="noopener noreferrer">View Report</a>
                  </div>
                </div>
                
                <div className={`publication-item ${searchQuery && !('stream restoration bmp database version summary report').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                  <h3 className="publication-title">Stream Restoration BMP Database: Version 1.0 Summary Report</h3>
                  <p className="publication-authors">Bledsoe, B., Lammers R.W., Jones J., Clary J., Earles A., Strecker E., Leisenring M., Struck S., McGuire A. (2017)</p>
                  <p className="publication-journal">Project No. WERF-U5R14, Water Environment & Reuse Foundation (WE&RF), Alexandria, VA</p>
                  <p className="publication-note">183 pages</p>
                  <div className="publication-links">
                    <a href="https://www.werf.org/a/ka/Search/ResearchProfile.aspx?ReportId=U5R14" className="publication-link" target="_blank" rel="noopener noreferrer">View Report</a>
                  </div>
                </div>
                
                <div className={`publication-item ${searchQuery && !('stream restoration bmp crediting guidance').includes(searchQuery.toLowerCase()) ? 'hidden' : ''}`}>
                  <h3 className="publication-title">Stream Restoration as a BMP: Crediting Guidance</h3>
                  <p className="publication-authors">Bledsoe, B., Lammers R.W., Jones J., Clary J., Earles A., Strecker E., Leisenring M., Struck S., McGuire A. (2016)</p>
                  <p className="publication-journal">Final Report, Project No. WERF-1T13, Water Environment & Reuse Foundation (WE&RF), Alexandria, VA</p>
                  <p className="publication-note">120 pages</p>
                  <div className="publication-links">
                    <a href="https://www.werf.org/a/ka/Search/ResearchProfile.aspx?ReportId=WERF1T13" className="publication-link" target="_blank" rel="noopener noreferrer">View Report</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Google Scholar Link */}
          <div className="publications-footer">
            <p>For a complete list of publications, please visit Dr. Lammers' <a href="https://scholar.google.com/citations?user=QDMBnK0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="scholar-link">Google Scholar profile</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications; 