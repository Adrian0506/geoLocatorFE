import React, { useReducer, useRef, useState } from 'react';
import axios from 'axios'
import { useAppDispatch} from '../app/hooks';
import { auth } from '../features/user/userSlice'
import './css/animations.css'

const SignUp = (props) => {
  const email = useRef('');
  const password = useRef('');
  const firstName = useRef('');
  const lastName = useRef('');
  const dispatch = useAppDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentEmail = email.current.value // we use ref so we dont re render the page
    const currentPassword = password.current.value // stuff like forms can use ref's. ref's will increase performance
    const currentFirstName = firstName.current.value
    const currentLastName = lastName.current.value
    // using usestate will hinder performance
    console.log(currentEmail, currentPassword, 'ref calues')
    axios.post('http://localhost:8000/create-user', {
      email: currentEmail,
      password: currentPassword,
      firstName: currentFirstName,
      lastName: currentLastName
    }).then(data => {
      dispatch(auth(data))
    }).catch(e => console.log(e))
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className='signin-container'>
           <input
              placeholder='First name'
              ref={firstName}
              type="firstName"
              name='firstName'
              className='input-login'
            />
            <input
              placeholder='Last name'
              ref={lastName}
              type="lastName"
              name='lastName'
              className='input-login'

            />
            <input
              ref={email}
              type="email"
              name='email'
              placeholder='Email'
              className='input-login'
            />
            <input
              placeholder='Password'
              ref={password}
              type="password"
              name='password'
              className='input-login'
            />
      </div>
      <button type="submit">Sign Up!</button>
      <span className='member-signup'>
        <h7>Already a member? </h7>
        <a onClick={props.setDisplay}> Log in!</a>
      </span>
    </form>
  );
};

export default SignUp;