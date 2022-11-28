import React, { useState, useEffect, useRef } from 'react'
import { useMap } from 'react-leaflet';
import L from 'leaflet'
import { Marker, Popup } from 'react-leaflet';
import { RoutingMachine } from "../RoutingMachine/RoutingMachine";
import { createControlComponent } from "@react-leaflet/core";

export function LocationMarker(props) {
    const [position, setPosition] = useState(null);
    const placeLocation = props.placeLocation;
    const map = useMap();
    
    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
      });
    }, [map]);

    return(
        (position === null || placeLocation === [0,0]) ? null : (
            <RoutingMachine position={position} placeLocation={placeLocation}/>
          )
      
    )
  }
