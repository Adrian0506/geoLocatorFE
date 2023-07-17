import React, {useState }from 'react'
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import SetPointModal from './SetPointModal'
import PointInformationModal from './PointInformationModal';
import './css/googlemap.css'
import FriendRequest from './FriendRequest';
import MarkerInformationModal from './MarkerInformation/MarkerInformation';
import FriendInformation from './FriendInformation/FriendInformation';
import RemoveFriend from './RemoveFriend';
import ViewFriends from './ViewFriends';
import PointView from './PointViews/PointView';

const defaultProps = {
  center: {
    lat: 39.067887022382536,
    lng: -102.10448283769962
  },
  zoom: 5
};

const mapStateToProps = (state) => {
  return {
    mapPlots: state.mapPoints
  };
};


const GoogleMap = () => {
  const currentPoints = useSelector((state) => state.user.mapPlots)
  const currentFriendView = useSelector((state) => state.user.friendView)
  const [displayModal, setModal] = useState(false)
  const [informationModal, setInformationModal] = useState(false)
  const [friendRequestModal, setFriendRequestModal] = useState(false)

  const [locationInfo, setLocationInfo] = useState({display: false})

    return(
      <React.Fragment>
        {friendRequestModal ? 
         <FriendRequest/>
         :
         null
        }
        {informationModal.display ? 
        <PointInformationModal 
          geoLocation = {informationModal.coords}
          description = {informationModal.description}
          visitingReason = {informationModal.visitingReason}
          id = {informationModal.id}
          removeModal={() => setInformationModal({display: false})}
        /> : null}
        { displayModal ?
         <SetPointModal
            removeModal={() => setModal(false)}
            lat={locationInfo.lat}
            lng={locationInfo.lng}
        /> : null}
        <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={(e) => {
          setLocationInfo({lat: e.lat, lng: e.lng})
          setModal(true)
        }}
      >
        {console.log(currentPoints)}
        {currentPoints.map((point) => (
          <div
          id ={point.id}
          lat={point.lat}
          lng={point.lng}
          onClick={() => setInformationModal({display: true, coords: {lat: point.lat, lng: point.lng},
            description: point.description,
            visitingReason: point.visitingReason,
            id: point.id
          })}
          className={point.visitingReason === 'wantToVisit' ? 'wantToVisit' :
           point.visitingReason === 'goingToVisit' ? 'goingTo' : 
           point.visitingReason === 'Visited' ? 'marker' : 'marker'}
        >
        </div>
        ))
      }
      </GoogleMapReact>
      <MarkerInformationModal />
      <FriendInformation />
      <PointView/>
      {currentFriendView === 'addFriend' ? <FriendRequest/> 
      : 
      currentFriendView === 'friends' ? <ViewFriends/> : 
      currentFriendView === 'removeFriend' ? <RemoveFriend/> : null
      }
     </React.Fragment> 
    )
}

const connectComponentToRedux = connect(mapStateToProps)(GoogleMap)
export default connectComponentToRedux;

