import React from "react";

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  tag: {
    fontSize: 24,
    margin: `0 20px 0 0`,
  },
};

export default function UserMenu() {

  return (
    <div style={styles.container}>
      <button 
        type="button" 
        onClick={() => console.log('Entered')}>
        Enter
      </button>

      <button 
        type="button" 
        onClick={() => console.log('logged out')}>
        Logout
      </button>
  
    </div>
  );
}