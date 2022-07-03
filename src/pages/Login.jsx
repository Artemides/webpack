import React, { useRef } from "react";
import "@styles/login.scss";
import logo from "@logos/logo_yard_sale.svg";
import email from "@icons/email.svg";
export const Login = () => {
  const form = useRef(null);
  const handleSubmit=(event)=>{
    event.preventDefault();
    const formData= new FormData(form.current);
    const data={
       email:formData.get('email'),
       password:formData.get('password')
    }
    console.log(data);
  }
  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            className="input input-email"
            placeholder="platzi@example.com"
          />
          <label htmlFor="passwotd" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id=""
            className="input input-passwotd"
          />
          <button
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button 
          className="secondary-button signup-button" 

        >Sign up</button>
      </div>
    </div>
  );
};
