import React, { useState, useEffect, useMap } from "react";
import "leaflet-routing-machine"
import { createControlComponent } from "@react-leaflet/core";
import L from 'leaflet'
import './RoutingMachine.css'
  const createRoutineMachineLayer = ({position, placeLocation}) => {
    const instance = L.Routing.control({
      waypoints: [
        position,
        placeLocation
      ],
    });
    return instance;
  };

 export const RoutingMachine = createControlComponent(createRoutineMachineLayer);
