import React from "react";
//import { MapContainer } from 'react-leaflet'
import "./BaseMap.css"
import $ from 'jquery'
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { MinimapControl } from "../MinimapControl/MinimapControl";
import { RoutingMachine } from "../RoutingMachine/RoutingMachine";
import { LocationMarker } from "../LocationMaroker/LocationMarker";
import PersistentDrawerLeft from './PersistentDrawerLeft'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
}
function BaseMap() {
  // function MyMap(){
    
  //   var map = useMap()
  //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", 
  //         {attribution: "&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
  //   }).addTo(map); 
  // mydata.map((item)=>{
  //   L.geoJSON(item.features, {
      
  //     pointToLayer: function(feature, latlng){
  //       var myIcon = L.icon({
  //         iconUrl: require('../../assets/icons/'.concat(item.name, '.png')),
  //         iconSize:     [15, 15], // size of the icon
  //     });
  //     return L.marker([latlng.lat, latlng.lng], {icon: myIcon})
  //     }
  //   }).addTo(map)
  // })
  // return null
  // }
  
  return(
    <div className="mapcontainer">
      <MapContainer center={[34, -6]} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker/>
      <MinimapControl />
    </MapContainer>
    <PersistentDrawerLeft/>
    </div>
    
  )
}

export default BaseMap