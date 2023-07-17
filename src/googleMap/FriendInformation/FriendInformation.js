import React from "react"
import '../css/friend-info.css'
import { useAppDispatch } from '../../app/hooks';
import { updateFriendView } from '../../features/user/userSlice'

import { FaUserFriends } from 'react-icons/fa';
import { BiLogOut} from 'react-icons/bi';
import { MdPersonRemove } from 'react-icons/md'
import { BsPersonPlusFill } from 'react-icons/bs'

const FriendInformation = () => {
    const dispatch = useAppDispatch();
    const handleLogOut = () => {
        localStorage.clear()
        window.location.reload()
    }

    const handleUserClick = (action) => {
        dispatch(updateFriendView(action))
    }
    return (
        <React.Fragment>
            <div className ='friend-info'>
                <h3 onClick = {() => handleUserClick('friends')}><FaUserFriends/></h3>
                <h3 onClick = {() => handleUserClick('addFriend')}><BsPersonPlusFill/></h3>
                <h3 onClick = {() => handleUserClick('removeFriend')}><MdPersonRemove/></h3>
                <h3 onClick = {handleLogOut}><BiLogOut/></h3>
            </div>
        </React.Fragment>
    )
}


export default FriendInformation