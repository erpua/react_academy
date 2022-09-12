import React, { Component } from 'react';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};


//TODO: // convert into react hooks
export default class SignupForm extends Component {
     state = {
       email: '',
       password: '',
     };

   handleChange = event => {
     const { name, value } = event.target;
     this.setState({ [name]: value });
   };
  
     render() {
       return (
         <form style={styles.form} autoComplete="off">
         <label style={styles.label} >
           <span>Email</span>
           <input
             type="email"
             name="email"
             onChange={this.handleChange}
              value={this.state.email}
           />
          </label>
  
           <label style={styles.label}>
             <span>Password</span>
             <input
               type="password"
               name="password"
               onChange={this.handleChange}
               value={this.state.password}
             />
           </label>
  
         <button type="submit">Sign Up</button>
       </form>
     );
   }
  }