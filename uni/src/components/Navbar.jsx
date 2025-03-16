import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">WATER RESOURCES LAB @ CMU</Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
        
        {/* Navigation links */}
        <div className={`navbar-menu-container ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-menu">
            <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/" className="navbar-link">HOME</Link>
            </li>
            
            <li className={`navbar-item dropdown ${activeDropdown === 1 || location.pathname === '/research' || location.pathname === '/publications' ? 'active' : ''}`}>
              <Link to="/research" className="navbar-link">RESEARCH</Link>
              <button 
                className="dropdown-toggle" 
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(1);
                }}
                aria-label="Toggle research dropdown"
              >
                <span className="dropdown-arrow">▾</span>
              </button>
              <ul className="dropdown-menu">
                <li className={`dropdown-item ${location.pathname === '/publications' ? 'active' : ''}`}>
                  <Link to="/publications" className="dropdown-link">PUBLICATIONS</Link>
                </li>
              </ul>
            </li>
            
            <li className={`navbar-item ${location.pathname === '/teaching' ? 'active' : ''}`}>
              <Link to="/teaching" className="navbar-link">TEACHING</Link>
            </li>
            
            <li className={`navbar-item ${location.pathname === '/people' ? 'active' : ''}`}>
              <Link to="/people" className="navbar-link">PEOPLE</Link>
            </li>
            
            <li className={`navbar-item ${location.pathname === '/opportunities' ? 'active' : ''}`}>
              <Link to="/opportunities" className="navbar-link">OPPORTUNITIES</Link>
            </li>
            
            <li className={`navbar-item ${location.pathname === '/resources' ? 'active' : ''}`}>
              <Link to="/resources" className="navbar-link">RESOURCES</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 