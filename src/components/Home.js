import React from "react";


const styles = {
  title: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 500,
    color: '#2A363B',
    fontSize: 18,
  },
};

export default function Home() {
  return(
    <>
     <h2 style={styles.title}>Welcome to Home Page</h2>
    </>
  )
}