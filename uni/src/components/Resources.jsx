import React, { useState } from 'react';
import resourcesImage from '../assets/13.jpg';
import pingPongImage from '../assets/14.png';
import floodFrequencyImage from '../assets/15.png';
import precipitationImage from '../assets/16.png';
import gageFinderImage from '../assets/17.png';
import remImage from '../assets/18.png';
import countyFloodsImage from '../assets/19.gif';
import '../styles/Resources.css';

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const resources = [
    {
      id: 1,
      title: 'Ping Pong Unit Hydrograph App',
      description: 'Unit hydrographs are an important concept in hydrology. This app simulates the \'Ping Pong Ball Unit Hydrograph\' exercise outlined in <a href="https://hess.copernicus.org/articles/22/2607/2018/hess-22-2607-2018.html" target="_blank" rel="noopener noreferrer">Shulz et al. (2018)</a> and can be a useful teaching tool.',
      image: pingPongImage,
      link: 'https://rodlammers.shinyapps.io/PingPongUH/',
      linkText: 'Access the App',
      category: 'tools'
    },
    {
      id: 2,
      title: 'Flood Frequency App',
      description: 'This app helps visualize the probabilities associated with flood events of different recurrence intervals. There are common misperceptions on the likelihood of different size floods occurring (e.g., the "100-year flood" has a 1% chance of happening in any year). This app can help students understand these important concepts.',
      image: floodFrequencyImage,
      link: 'https://rodlammers.shinyapps.io/Flood_Frequency/',
      linkText: 'Access the App',
      category: 'tools'
    },
    {
      id: 3,
      title: 'U.S. Precipitation Region App',
      description: 'This app summarizes data from our recent <a href="https://ascelibrary.org/doi/full/10.1061/JSWBAY.0000993" target="_blank" rel="noopener noreferrer">publication</a>, which used PRISM rainfall data to divide the conterminous U.S. into regions based on similarities in precipitation metrics. This can be useful for stormwater design and regulations. The app allows to view the rainfall regions and the precipitation metrics themselves.',
      image: precipitationImage,
      link: 'https://rodlammers.shinyapps.io/US_Rainfall_Regions/',
      linkText: 'Access the App',
      category: 'tools'
    },
    {
      id: 4,
      title: 'USGS Gage Finder/Stream Flashiness App',
      description: 'This app serves two purposes. First, it can be used to find USGS stream gages that meet certain criteria (e.g., location, drainage area, years with data). Second, the app displays the "flashiness" of different streams with gage data (computed using the <a href="https://onlinelibrary.wiley.com/doi/10.1111/j.1752-1688.2004.tb01046.x" target="_blank" rel="noopener noreferrer">Richards-Baker Flashiness Index</a> - or RBI). Flashy streams are those where flows change quickly - for example, in urban areas with lots of impervious area.',
      image: gageFinderImage,
      link: 'https://rodlammers.shinyapps.io/USGS_RBI/',
      linkText: 'Access the App',
      category: 'tools'
    },
    {
      id: 5,
      title: 'River Erosion Model (REM)',
      description: 'REM is a custom hydro-geomorphic model that can simulate stream channel erosion throughout a river network. Primary inputs include stream channel geometry, bed and bank properties (e.g., grain size and soil cohesion), and a time series of discharge. The model has been used to simulate trajectories of channel change, sediment and phosphorus loading associated with channel erosion, and the relative effects of stormwater management and stream restoration for reducing channel erosion. See the model <a href="https://htmlpreview.github.io/?https://github.com/rodlammers/REM/blob/master/REM_User_Guide.html" target="_blank" rel="noopener noreferrer">User Guide</a> for more details.',
      image: remImage,
      link: 'https://github.com/rodlammers/REM',
      linkText: 'Access on GitHub',
      category: 'software'
    },
    {
      id: 6,
      title: 'countyfloods R Package',
      description: 'The countyfloods R package can be used to analyze flood severity using USGS gage data. The package facilitates access to and processing of these gage data in the R statistical computing environment to make it easier to analyze and plot data. For example, the animation to the left shows flooding associated with Hurricane Irma in September 2017.',
      image: countyFloodsImage,
      link: 'https://cran.r-project.org/web/packages/countyfloods/index.html',
      linkText: 'Access on CRAN',
      category: 'software'
    }
  ];
  
  const filteredResources = activeFilter === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeFilter);
  
  return (
    <div className="resources">
      {/* Hero Section */}
      <div className="resources-hero">
        <img src={resourcesImage} alt="Resources at Water Resources Lab" className="resources-hero-image" />
        <div className="resources-hero-overlay">
          <div className="resources-hero-content">
            <h1 className="resources-hero-title">RESOURCES</h1>
            <p className="resources-hero-subtitle">Tools and Software for Water Resources Research</p>
          </div>
        </div>
      </div>
      
      <div className="resources-content">
        <div className="container">
          <div className="resources-intro">
            <h2 className="section-title">Research & Educational Tools</h2>
            <p>
              Our lab develops and maintains a variety of tools and resources for research, education, and practical applications 
              in water resources engineering. These resources are freely available for use by researchers, students, and practitioners.
            </p>
          </div>
          
          {/* Resource Filters */}
          <div className="resources-filters">
            <button 
              className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Resources
            </button>
            <button 
              className={`filter-button ${activeFilter === 'tools' ? 'active' : ''}`}
              onClick={() => setActiveFilter('tools')}
            >
              Interactive Tools
            </button>
            <button 
              className={`filter-button ${activeFilter === 'software' ? 'active' : ''}`}
              onClick={() => setActiveFilter('software')}
            >
              Software & Packages
            </button>
          </div>
          
          {/* Resources List */}
          <div className="resources-list">
            {filteredResources.map(resource => (
              <div className="resource-item" key={resource.id}>
                <div className="resource-image-container">
                  <img src={resource.image} alt={resource.title} className="resource-image" />
                </div>
                <div className="resource-details">
                  <h3 className="resource-title">{resource.title}</h3>
                  <div 
                    className="resource-description"
                    dangerouslySetInnerHTML={{ __html: resource.description }}
                  />
                  <a href={resource.link} className="resource-link" target="_blank" rel="noopener noreferrer">
                    {resource.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="no-resources">
              <p>No resources found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources; 