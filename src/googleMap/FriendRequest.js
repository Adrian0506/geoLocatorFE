import React, { useState, useEffect }from 'react'
import axios from 'axios';
import { updateCurrentPlots } from '../features/user/userSlice'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { toast } from 'react-toastify';

const FriendRequest = ({}) => {
   const token = useSelector((state) => state.user.apikey.access_token);
   const [emailToFriend, setEmailToFriend] = useState('')
   const currentEmail = useSelector((state) => state.user.email);
   const dispatch = useAppDispatch()
   const notify = () => toast("Friend request sent!");
   const handleError = (msg) => toast(`An error has occured (${msg})`)

   const setFriend = (e) => {
        setEmailToFriend(e.target.value)
   }
    const sendFriendRequest = () => {
        const headers = {
            Authorization: `Bearer ${token}`
          };

          console.log(headers)
          axios.post(
              `http://localhost:8000/add/friend`,
              {email: currentEmail, emailToFriend },
              { headers }
            )
            .then((response) => {
              dispatch(updateCurrentPlots(response.data))
              notify()
            })
            .catch((error) => {
              console.log('here?')
              handleError('User does not exist')
              console.error(error); // Handle any errors
            });
    }
    return (
        <div className='setPoint-container'>
            <h1>Add a friend!</h1>
            <input type ='text' placeholder='Enter a email.' onChange={setFriend}></input>
            <button onClick ={sendFriendRequest.bind(this)}>Send request</button>
        </div>
    )

}

export default FriendRequest;
