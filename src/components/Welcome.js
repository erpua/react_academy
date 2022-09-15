import React from "react";


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

export default function Home() {
  return(
    <div style={styles.container}>
     <h2>Welcome to page of our service{' '}</h2>
    </div>
  )
}