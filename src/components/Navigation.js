import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <ul>
        <li id="homeLink"><Link to="/">Home</Link></li>
        <li id="portfolioLink"><Link to="/portfolio">Portfolio</Link></li>
        <li id="contactLink"><Link to="/contact">Contact</Link></li>
      </ul>      
    </div>
  );
};

export default Navigation;