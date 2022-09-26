import React, { useContext } from "react";
import ctx from '../context/authContext';

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

/* export default function UserMenu() {
  const authContext = useContext(ctx);

  console.log('authContext from UserMenu / value from Provider from index.js => ', authContext);

  return (
    <div style={styles.container}>
      <button 
        type="button" 
        onClick={() => console.log('Entered')}>
        Enter
      </button>
      <p style={styles.tag}>User</p>
      <button 
        type="button" 
        onClick={() => console.log('Logging out')}>
        Logout
      </button>
  
    </div>
  );
}; */

export default function UserMenu() {
  /*   const authContext = useContext(ctx); */
/*   const { name } = useContext(ctx); */

 /*  const authContext = useContext(ctx);
  console.log('authContext.user FROM User MENU ===> ', authContext.user); */
  const { user, logIn, logOut } = useContext(ctx);

  return (
    <div style={styles.container}>
      

      { user 
      ? (
          <>
            <p style={styles.tag}>
              {user}
            </p>
            <button 
              type="button" 
              onClick={logOut}>
              Logout
            </button> 
          </>
        ) 
      :
        <button 
          type="button" 
          onClick={logIn}>
          Enter
        </button>
      }
  
    </div>
  );
};