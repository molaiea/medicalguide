import React from "react";
//import { MapContainer, TileLayer } from 'react-leaflet';
import { MapContainer } from 'react-leaflet'
import { useMap } from 'react-leaflet/hooks'
import L from 'leaflet'
import clinics from '../../data/clinics.json'
import pharmas from '../../data/pharmas.json'
import dentists from '../../data/dentists.json'
import opticiens from '../../data/opticiens.json'
import transfusion from '../../data/transfusion.json'
import laboratoires from '../../data/laboratoires.json'
import "./BaseMap.css"
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function BaseMap() {
  
  const mydata = [clinics, pharmas, dentists, opticiens, transfusion, laboratoires];
  
  function MyMap(){
    
    var map = useMap()
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", 
          {attribution: "&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
    }).addTo(map); 
  mydata.map((item)=>{
    L.geoJSON(item.features, {
      
      pointToLayer: function(feature, latlng){
        var myIcon = L.icon({
          iconUrl: require('../../assets/icons/'.concat(item.name, '.png')),
          iconSize:     [15, 15], // size of the icon
      });
      return L.marker([latlng.lat, latlng.lng], {icon: myIcon})
      }
    }).addTo(map)
  })
  return null
  }
  return(
    <div className="mainContainer">
      <div className="checkContainer">
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
      </div>
      <MapContainer className="mymap" center={[34, -6]} zoom={8}>
      <MyMap />
    </MapContainer>
      
    </div>

  )
}

export default BaseMap