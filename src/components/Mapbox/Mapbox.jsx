import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Routing from "./FindRoute";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet/dist/leaflet.css";
import './style.scss'
const VITE_USERNAME =  'thanhtuancsk20'
const VITE_STYLE_ID = 'clgfhviyf001v01qtabbzghph'
const VITE_ACCESS_TOKEN = 'pk.eyJ1IjoidGhhbmh0dWFuY3NrMjAiLCJhIjoiY2xnZm5rbnJ2MDJvbjNvbGJjdWhkOWNlNyJ9.m3OiisbsTj-e43EomRdqfA'
const Mapbox = () => {
  const position = [10.880758675454759, 106.80538629714444];
  return (
    <div className="Mapbox">
      <div className="header">
        <a href="">
          <FontAwesomeIcon className="icon-first" icon={faArrowLeft} />
        </a>
        <a className="go-back" href="/">
          Quay lại
        </a>
      </div>
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ minHeight: "75vh", minWidth: "75vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url={`https://api.mapbox.com/styles/v1/${VITE_USERNAME}/${VITE_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${VITE_ACCESS_TOKEN}`}
      />
      <Routing />
    </MapContainer>
    </div>
  );
};

export default Mapbox;