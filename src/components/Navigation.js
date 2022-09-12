import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 500,
    color: '#2A363B',
    fontSize: 18,
  },
  activeLink: {
    color: '#F21D41',
  },
};

const Navigation = () => (
  <nav>
    <NavLink 
      to="/counter" 
      style={styles.link} 
      activeStyle={styles.activeLink}>
      Counter
    </NavLink>

    <NavLink 
      to="/signup" 
      style={styles.link} 
      activeStyle={styles.activeLink}>
      Form
    </NavLink>
  </nav>
);

export default Navigation;
