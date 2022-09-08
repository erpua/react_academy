import React from 'react';
/* import ReactButton from 'react-button'; */

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

/* var Button = require('react-button'); */

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>

   {/*  <Button>Export</Button> */}

      Welcome page of our service{' '}

      <span role="img" aria-label="Welcome icon">
        💁‍♀️
      </span>
    </h1>
  </div>
);



export default HomeView;
