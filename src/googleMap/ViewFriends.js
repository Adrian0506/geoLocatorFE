import React, { useState, useEffect }from 'react'
import axios from 'axios';
import { updateCurrentPlots } from '../features/user/userSlice'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { toast } from 'react-toastify';

const ViewFriends = ({}) => {
    return (
        <div className='setPoint-container'>
            <h1>Your Friends</h1>
            <button>Send request</button>
        </div>
    )

}

export default ViewFriends;
