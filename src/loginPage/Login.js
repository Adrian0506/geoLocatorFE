import React, { useReducer, useRef, useState } from 'react';
import axios from 'axios'
import { useAppDispatch} from '../app/hooks';
import { auth, updateEmail, updateCurrentPlots } from '../features/user/userSlice'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user.firstname,
    accessToken: state.user.apikey
  };
};

const Login = (props) => {
  const email = useRef('');
  const password = useRef('');
  const dispatch = useAppDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentEmail = email.current.value // we use ref so we dont re render the page
    const currentPassword = password.current.value // stuff like forms can use ref's. ref's will increase performance
    // using usestate will hinder performance
    axios.post('http://localhost:8000/send-user', {
      email: currentEmail,
      password: currentPassword,
    }).then(data => {
      console.log(data)
      console.log(props.setLocator)
      props.setLocator()
      dispatch(auth(data))
      dispatch(updateEmail(currentEmail))
      window.localStorage.login = currentEmail
      window.localStorage.apikey = data.data.access_token
      // store api key here
      // so when user re opens page or refreshes we have data
      // and they dont get sent to the login screen. they get sent to 
      // the navigation screen because they already have a valid key. we just need to send
      // the profile data from the backend
      dispatch(updateCurrentPlots(data.data.mapPoints))
    }).catch(e => console.log(e))
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <div className='signin-container'>
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
      <h7>Forgot password?</h7>
      <button onClick ={
       () => {
       }
      }type="submit">Login</button>
      <span className='member-signup'>
        <h7>Not a member? </h7>
        <a onClick={props.setDisplay}> Sign up!</a>
      </span>
    </form>
  );
};

const connectComponentToRedux = connect(mapStateToProps)(Login)
export default connectComponentToRedux;