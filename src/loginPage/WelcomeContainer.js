import React, { useEffect, useState } from 'react'
import LoginButtons from './LoginButtons'
import axios from 'axios'
import './css/welcomeScreen.css'
import '../global.css'
import Login from './Login';
import SignUp from './SignUp'
import { useAppDispatch } from '../app/hooks'
import { auth } from '../features/user/userSlice'
import { updateEmail, updateCurrentPlots } from '../features/user/userSlice'


function WelcomeContainer(props) {
    const [field, setDisplay] = useState(true)
    const dispatch = useAppDispatch()

    const setForum = () => {
        setDisplay(!field)
    }
    const setLocator = () => {
        props.onWelcomeClick('locator')
    }

    useEffect(() => {
        const token = window.localStorage.apikey
        const headers = {
            Authorization: `Bearer ${token}`
          };

        const retrieveUser = async () => {
        axios.get(
            `http://localhost:8000/refresh/login/${window.localStorage.login}`,
            { headers }
          )
          .then((response) => {
            dispatch(auth(response))
            dispatch(updateEmail(window.localStorage.login))

            console.log(response, 'FOMR HERE')
            dispatch(updateCurrentPlots(response.data.mapPoints))
            console.log(response, 'res')
            setLocator()
          })
          .catch((error) => {
            console.error(error); // Handle any errors
          });
        }
        retrieveUser()
    },[])
    return (
        <div className='welcome-container'>
            { field ?
            <React.Fragment>
                <h1>Login</h1>
                <Login setDisplay={setForum} setLocator={setLocator}/>
            </React.Fragment> : 
            <React.Fragment>
                <h1>Sign Up</h1>
                <SignUp setDisplay={setForum}/>
             </React.Fragment> 
             }
        </div>
    )
}


export default WelcomeContainer;
