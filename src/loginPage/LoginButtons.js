import React from "react";
import './css/welcomeScreen.css'

const LoginButton = (navigators) => {
    return (
        <div className='button-container'>
            <button onClick={() => {
                navigators.props.onWelcomeClick('signUp')
                }}>New User</button>
            <button onClick={() => {
                navigators.props.onWelcomeClick('login')
            }}>Existing User</button>
        </div>
    )
}

export default LoginButton