import React, { useRef } from 'react';
import '../Styles/LoginForm.css'; // Import the same CSS file

const UncontrolledLoginForm = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);


// const current = new Current();


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Access the current value of the input fields using refs
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    console.log('Form submitted with:', { username, password });

    
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} >
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            ref={usernameRef}
            minLength={4}
            maxLength={10}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default UncontrolledLoginForm;