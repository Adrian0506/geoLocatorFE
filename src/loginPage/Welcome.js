/* eslint-disable */

import react, { useState } from 'react'
import SignUp from './signUp'
import WelcomeContainer from './WelcomeContainer'
import LoginForm from './Login'
import Locator from '../geoLocator/Locator'

function Welcome() {
    const [displayValue, setDisplay] = useState('Welcome')

    return (
        <div>
            {displayValue == 'Welcome' ? 
                <WelcomeContainer
                onWelcomeClick={setDisplay}/> : null
            }
            {displayValue == 'signUp' ? 
                <SignUp/> : null
            }
            {displayValue == 'login' ? 
                <LoginForm
                    onLogin={setDisplay}
                /> : null
            }
            {displayValue == 'locator' ? 
                <Locator/> : null
            }
        </div>
    )
}

export default Welcome;