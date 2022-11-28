import React, {useEffect, useState} from "react";
import InfoSideComponent from "../InfoSideComponent/InfoSideComponent";
import {
  BrowserRouter as Router
} from "react-router-dom";
import "./BaseMap.css"
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { MinimapControl } from "../MinimapControl/MinimapControl";
import { LocationMarker } from "../LocationMaroker/LocationMarker";
import Navigation from "../Navigation/Navigation";

function BaseMap() {
  const [showInfo, setShowInfo] = useState(false)
  const [gotoLoc, setGotoLoc] = useState([0,0])
  const updateLocation = (coords)=>{
    setGotoLoc(coords)
  }
  
  return(
    <Router>
    {showInfo ? <div className="my_container">
      
      <div className="map_layer">
      <Navigation/>
    <MapContainer center={[34, -6]} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker placeLocation={gotoLoc}/>
      <MinimapControl updateLocation={updateLocation}/>
      
    </MapContainer>
      </div>
      <InfoSideComponent/>
    </div> : <div className="container_2">
    <Navigation/>
    <MapContainer center={[34, -6]} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker placeLocation={gotoLoc}/>
      
      <MinimapControl updateLocation={updateLocation}/>
      
    </MapContainer>
      </div>}
    
    </Router>
    
      
      
    
  )
}

export default BaseMap