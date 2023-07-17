import React, { useState, useEffect }from 'react'
import axios from 'axios';
import { updateCurrentPlots } from '../features/user/userSlice'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { toast } from 'react-toastify';

const PointInformationModal = ({geoLocation, removeModal, description, visitingReason, id}) => {
   const [location, setLocation] = useState(undefined)
   const token = useSelector((state) => state.user.apikey.access_token);
   const currentEmail = useSelector((state) => state.user.email);
   const dispatch = useAppDispatch()
   const notify = () => toast("Succesfully removed plot");
   console.log(id)

    useEffect(() => {
        axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${geoLocation.lat},${geoLocation.lng}&key=AIzaSyDRxtsA770aMkxCC0doIfUvkY6pqYTtdP8`,
          )
          .then((response) => {
            const country =response.data.results[5].formatted_address
            const state = response.data.results[4].formatted_address
            const street = response.data.results[3].formatted_address
            setLocation(`${country},${state},${street}`)
          })
          .catch((error) => {
            console.error(error); // Handle any errors
          });
    },[])
    console.log(description, visitingReason)

    const deletePoint = () => {
        const headers = {
            Authorization: `Bearer ${token}`
          };

          console.log(headers)
          axios.delete(
              `http://localhost:8000/delete/map/plots/${id}/${currentEmail}`,
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
    }
    return (
        <div className='setPoint-container'>
            <h1>Delete a point</h1>
            <h5>{location}</h5>
            <h5>{description}</h5>
            <h5>{visitingReason}</h5>
            <button onClick={removeModal} />
            <button onClick ={deletePoint.bind(this)}>Delete plot</button>
        </div>
    )

}

export default PointInformationModal;
