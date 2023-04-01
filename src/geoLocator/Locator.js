import React from "react";
import GoogleMap from './GoogleMap'
import Autocomplete from 'react-autocomplete'

export default function Locator(){
  const [location, setLocation] = ('')

  return (
    <div style = {{height: '50vh'}}>
        <div style={{ height: '100%', width: '100%' }}>
             <GoogleMap />
        </div>
    </div>
  );
}
