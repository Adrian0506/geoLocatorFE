import React from "react"
import Information from "./Information"
import Markers from "./Markers"
import '../css/marker-info.css'


const MarkerInformationModal = () => {
    return (
        <React.Fragment>
            <div className ='marker-info'>
                <Markers/>
                <Information/>
            </div>
        </React.Fragment>
    )
}


export default MarkerInformationModal