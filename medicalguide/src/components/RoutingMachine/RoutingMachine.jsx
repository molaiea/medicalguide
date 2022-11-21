import React, { useState, useEffect, useMap } from "react";
import "leaflet-routing-machine"
import { createControlComponent } from "@react-leaflet/core";
import L from 'leaflet'
import './RoutingMachine.css'
import { LocationMarker } from "../LocationMaroker/LocationMarker";
  const createRoutineMachineLayer = (props) => {
    const location = props.props;
    console.log(location)
    const instance = L.Routing.control({
      waypoints: [
        location,
        [34, -6]
      ],
    });
    return instance;
  };
  
 export const RoutingMachine = createControlComponent(createRoutineMachineLayer);
