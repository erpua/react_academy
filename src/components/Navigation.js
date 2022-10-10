// For AppBar of todos
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink
        to="/"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Home
      </NavLink>

    {/*   {isLoggedIn && (
        <NavLink
          to="/todos"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Todos
        </NavLink>
      )} */}

      <NavLink
        to="/todos"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Todos
      </NavLink>

    </nav>
  );
}
//For AppBar of all Components

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const styles = {
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 500,
//     color: '#2A363B',
//     fontSize: 18,
//   },
//   activeLink: {
//     color: '#F21D41',
//   },
// };

// const Navigation = () => (
//   <nav>

//     <NavLink 
//       to="/home" 
//       style={styles.link} 
//       activeStyle={styles.activeLink}>
//       Home
//     </NavLink>
    
//     <NavLink 
//       to="/counter" 
//       style={styles.link} 
//       activeStyle={styles.activeLink}>
//       Counter
//     </NavLink>

//     <NavLink 
//       to="/signup" 
//       style={styles.link} 
//       activeStyle={styles.activeLink}>
//       Form
//     </NavLink>

//     <NavLink
//       to="/colorpicker"
//       style={styles.link}
//       activeStyle={styles.activeLink}
//     >
//       Color Picker
//     </NavLink>

//     <NavLink
//       to="/clock"
//       style={styles.link}
//       activeStyle={styles.activeLink}
//     >
//       Clock
//     </NavLink>

//     <NavLink
//       to="/news"
//       style={styles.link}
//       activeStyle={styles.activeLink}
//     >
//       News
//     </NavLink>

//     <NavLink
//       to="/context"
//       style={styles.link}
//       activeStyle={styles.activeLink}
//     >
//       Context
//     </NavLink>

//   </nav>
// );

// export default Navigation;
