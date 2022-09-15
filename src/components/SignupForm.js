import React, { useState } from 'react';

const styles = {
 /*  form: {
    width: 320,
    margin: '30px 0 0 30px',
    border: '1px solid teal',
    padding: 20,
    'border-radius': '4px',
  }, */
  form: {
    width: 320,
    margin: '30px 0 0 30px',
    border: '1px solid teal',
    padding: 20,
    borderRadius: 4,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const {name, value} = event.target;

    switch (name) { 
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

        default:
          /*   throw new Error(); */
         /*  console.warn(`This field type "${name}" - is not being processed!`); */
         console.error(`This field type "${name}" - is not being processed!`);
      
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log('email =>', email);
    console.log('password =>', password);
  }; 

  return (
    <form 
      style={styles.form} 
      autoComplete="off" 
      onSubmit={handleSubmit}>
         <label style={styles.label} >
           <span>Email</span>
           {/* <input
             type="email"
             name="email123456"
             onChange={handleChange}
              value={email}
           /> */}
          {/*  
          
          //
          
          For Error
            <input
             type="email"
             name="email123"
             onChange={handleChange}
              value={email}
            /> */}
            <input
             type="email"
             name="email"
             onChange={handleChange}
              value={email}
           />
          </label>
  
           <label style={styles.label}>
             <span>Password</span>
             <input
               type="password"
               name="password"
               onChange={handleChange}
               value={password}
             />
           </label>
  
         <button type="submit">Sign Up</button>
    </form>
  )
}

/* export default function SignupForm() {
  const [email, setEmail] = useState();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

 const handleSubmit = event => {
    event.preventDefault();

    console.log('email =>', email);
    console.log('password =>', password);
  }; 

  const handleChange = event => {
    const {name, value} = event.taget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`This type of filed ${name} DOES NOT process!`);
    }
  };

  return (
    <form 
      style={styles.form} 
      autoComplete="off" 
      onSubmit={handleSubmit}>
         <label style={styles.label} >
           <span>Email</span>
           <input
             type="email"
             name="email"
             onChange={handleChange}
              value={email}
           />
          </label>
  
           <label style={styles.label}>
             <span>Password</span>
             <input
               type="password"
               name="password"
               onChange={handleChange}
               value={password}
             />
           </label>
  
         <button type="submit">Sign Up</button>
    </form>
  )
} */

/* export default class SignupForm extends Component {
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
  } */