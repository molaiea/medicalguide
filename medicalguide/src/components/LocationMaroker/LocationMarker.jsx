import React, { useState, useEffect, useRef } from 'react'
import { useMap } from 'react-leaflet';
import L from 'leaflet'
import { Marker, Popup } from 'react-leaflet';
import { RoutingMachine } from "../RoutingMachine/RoutingMachine";
import { createControlComponent } from "@react-leaflet/core";

export function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        // map.flyTo(e.latlng, map.getZoom());
        // const radius = e.accuracy;
        // const circle = L.circle(e.latlng, radius);
        // circle.addTo(map);
        // setBbox(e.bounds.toBBoxString().split(","));
      });
    }, [map]);

    return(
        position === null ? null : (
            <RoutingMachine props={position}/>
          )
      
    )
  }
