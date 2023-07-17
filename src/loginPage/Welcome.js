/* eslint-disable */

import React, { useState } from 'react'
import WelcomeContainer from './WelcomeContainer'
import LoginForm from './Login'
import Locator from '../googleMap/Locator'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/welcomeScreen.css'

function Welcome() {
    const [displayValue, setDisplay] = useState('Welcome')
    console.log(displayValue)
    return (
        <div className='welcome-container-position'>
            {displayValue === 'Welcome' ? 
                <WelcomeContainer
                onWelcomeClick={setDisplay}/> : null
            }
            {displayValue === 'locator' ? 
                <React.Fragment>
                  <Locator/>
                </React.Fragment>
                 : null
            }
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Welcome;