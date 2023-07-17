import React from 'react'
import '../css/marker-info.css';

const Markers = () => {
    return (
        <React.Fragment>
            <div className = 'marker-container'>
                <div className='red-marker-info' />
                <div className='wantToVisit-info' />
                <div className='goingTo-info'/>
            </div>
        </React.Fragment>
    )
}

export default Markers