import React, {useEffect, useState} from "react";
import GoogleMap from './GoogleMap';
import './css/googlemap.css';

export default function Locator() {
  return (
    <div className="google-container">
             <GoogleMap />
     </div>
  );
}
