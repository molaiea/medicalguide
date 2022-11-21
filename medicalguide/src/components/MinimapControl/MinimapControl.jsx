import React from "react";
import { MapContainer, TileLayer, Rectangle } from 'react-leaflet'
import { useMap, useMapEvent } from 'react-leaflet/hooks'
import { useEventHandlers } from '@react-leaflet/core'
import { useState, useMemo, useCallback } from "react";
import L from 'leaflet'
import clinics from '../../data/clinics.json'
import pharmas from '../../data/pharmas.json'
import dentists from '../../data/dentists.json'
import opticiens from '../../data/opticiens.json'
import transfusion from '../../data/transfusion.json'
import laboratoires from '../../data/laboratoires.json'
import "leaflet-routing-machine"
import { createControlComponent } from "@react-leaflet/core";

const POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
  }
  const mydata = [clinics, pharmas, dentists, opticiens, transfusion, laboratoires];
  const BOUNDS_STYLE = { weight: 1 }
  
  function MinimapBounds({ parentMap, zoom }) {
    const minimap = useMap()
    
    // Clicking a point on the minimap sets the parent's map center
    const onClick = useCallback(
      (e) => {
        parentMap.setView(e.latlng, parentMap.getZoom())
      },
      [parentMap],
    )
    useMapEvent('click', onClick)
  
    // Keep track of bounds in state to trigger renders
    const [bounds, setBounds] = useState(parentMap.getBounds())
    const onChange = useCallback(() => {
      setBounds(parentMap.getBounds())
      // Update the minimap's view to match the parent map's center and zoom
      minimap.setView(parentMap.getCenter(), zoom)
    }, [minimap, parentMap, zoom])
  
    // Listen to events on the parent map
    const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [])
    useEventHandlers({ instance: parentMap }, handlers)
  
    return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />
  }
  
 export function MinimapControl({ position, zoom}) {
    var parentMap = useMap()
    
  mydata.map((item)=>{
    L.geoJSON(item.features, {
      
      pointToLayer: function(feature, latlng){
        var myIcon = L.icon({
          iconUrl: require('../../assets/icons/'.concat(item.name, '.png')),
          iconSize:     [15, 15], // size of the icon
      });
      return L.marker([latlng.lat, latlng.lng], {icon: myIcon})
      }
    }).addTo(parentMap)})

    const mapZoom = zoom || 0
    
    // Memoize the minimap so it's not affected by position changes
    const minimap = useMemo(
      () => (
        <MapContainer
          style={{ height: 80, width: 80 }}
          center={[34, -6]}
          zoom={mapZoom}
          dragging={false}
          doubleClickZoom={false}
          scrollWheelZoom={true}
          attributionControl={false}
          zoomControl={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
        </MapContainer>
      ),
      [],
    )
  
    const positionClass =
      (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright
    return (
      <div className={positionClass}>
        <div className="leaflet-control leaflet-bar">{minimap}</div>
      </div>
    )
  }
  
