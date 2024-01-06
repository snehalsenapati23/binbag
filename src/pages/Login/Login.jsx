// Login.js

import  { useState } from 'react';
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import './Login.css'


const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false); // New state for conditional rendering

  const [formData, setFormData] = useState({
 
    email: '',
    password: '',
   
  })
  const details={
    name:"John",
    email:"JohnDoe@gmail.com",
    password:"binbag"
  }

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    

    if(!formData.email.trim()) {
        validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email is not valid"
    }

    if(!formData.password.trim()) {
        validationErrors.password = "password is required"
    } else if(formData.password.length < 6){
        validationErrors.password = "password should be at least 6 char"
    }

    

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      // Successful form submission
      if (formData.email === details.email && formData.password === details.password) {
        setLoggedIn(true); // Set loggedIn state to true
      } else {
        setLoggedIn(false); // Set loggedIn state to false if credentials don't match
      }
    }

  }
  if (loggedIn) {
    return (
      <>
        <h1 style={{'marginLeft':'40%', color:"green", fontSize:"100px"}}>Hi {details.name}</h1>
        <button style={{'marginLeft':'46%'}} onClick={()=>setLoggedIn(false)}>Logout</button>
      </>
    );
  }

  return (
    <>
    <div className="all">
    <div className="img">
      
       </div>
    <div className="login">
    <div className="background">
        <div className="shape img"><img src={logo} />   </div>
        <div className="shape img"><img src={logo} />   </div>
    </div>
      <form className='form' onSubmit={handleSubmit}>
      
      <div>
      <h3>Login Here</h3>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder='Email'
          autoComplete='off'
          onChange={handleChange} 
        />
          {errors.email && <span>{errors.email}</span>}  
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder='Password'
          onChange={handleChange} 
        />
          {errors.password && <span>{errors.password}</span>}  
      </div>
      
      <button type="submit" className='btn-lgn'>Log in</button>
      <Link to="/reimbursement" ><button className='rein'>Reimbursements Form</button></Link>

    </form>
    </div>

 
    </div>
    
    </>
    
  );
};

export default Login;

import React from 'react'

