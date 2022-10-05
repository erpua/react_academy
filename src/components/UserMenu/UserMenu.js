/* import React from 'react';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

export default UserMenu;
 */

/* import React from 'react'; */
/* import { connect } from 'react-redux'; */
/* import { authSelectors, authOperations } from '../../redux/auth'; */
/* import defaultAvatar from './default-avatar.png'; */

// const styles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   avatar: {
//     marginRight: 4,
//   },
//   name: {
//     fontWeight: 700,
//     marginRight: 12,
//   },
// };

// const UserMenu = ({ avatar, name, onLogout }) => (
//   <div style={styles.container}>
//     <img src={avatar} alt="" width="32" style={styles.avatar} />
//     <span style={styles.name}>Welcome, {name}</span>
//     <button type="button" onClick={onLogout}>
//       Logout
//     </button>
//   </div>
// );

// /* const mapStateToProps = state => ({
//   name: authSelectors.getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };
//  */
// export default UserMenu;

import React from "react";
import { useSelector, useDispatch, useCallback } from "react-redux";
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};
  
export default function UserMenu( ) {
  const name = useSelector(authSelectors.getUsername);

  //useDispatch !all the time returns reference for that same function. never changes
  const dispatch = useDispatch();

  //wrong => every change of state will rerender the button and referrence will be different each time
  //must use "hook for callbacks memoization"
  //const onLogout = () => dispatch(authOperations.logOut());
/* 
  const memoizedCallback = useCallback(
    () => {
      doSomething(a, b);
    },
    [a, b],
  ); */

  const onLogout = useCallback(
    () => { 
      dispatch(authOperations.logOut())
    }, 
    [dispatch]);


  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
     {/*  <button type="button" onClick={()=> authOperations.logOut()}>
        Logout
      </button> */}
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};