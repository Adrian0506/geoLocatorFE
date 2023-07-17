import React, {useState }from 'react'
import axios from 'axios';
import { updateCurrentPlots } from '../features/user/userSlice'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { connect } from 'react-redux';
import './css/setPoint.css'
import { toast } from 'react-toastify';


const mapStateToProps = (state) => {
    return {
      mapPlots: state.mapPoints
    };
  };

const SetPointModal = ({lat, lng, removeModal}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useAppDispatch()
    const token = useSelector((state) => state.user.apikey.access_token);
    const currentEmail = useSelector((state) => state.user.email);
    const notify = () => toast("Succesfully added plot");


    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    const plotPointRequest = () => {
        const headers = {
          Authorization: `Bearer ${token}`
        };
        axios.patch(
            'http://localhost:8000/update/map/plots',
            { lat, lng, email: currentEmail, visitingReason: selectedOption, description: description },
            { headers }
          )
          .then((response) => {
            dispatch(updateCurrentPlots(response.data))
            notify()
            removeModal(true)
          })
          .catch((error) => {
            console.error(error); // Handle any errors
          });
      };
    return (
        <div className='setPoint-container'>
            <b>Plot point</b>
            <p>Select whether you have visited, planning to visit or are going to visit! Your friend's can see your plotted locations!</p>
            <h6>Enter a description on what your plans are for this location.</h6>
            <input onChange={handleDescription} type ='text' placeholder='Enter a description on what your plans are for this location.'></input>
            <h6>What are your plans for this location?</h6>
            <select value={selectedOption} defaultValue={'Visited'} onChange={handleOptionChange}>
                <option value="Visited">Visited</option>
                <option value="wantToVisit">Want to visit</option>
                <option value="goingToVisit">Going to visit</option>
            </select>
            <button onClick={plotPointRequest}>Create</button>
            <button  onClick={() => removeModal(true)}>Close</button>
        </div>
    )

}

const connectComponentToRedux = connect(mapStateToProps)(SetPointModal)
export default connectComponentToRedux;
