import React from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from 'react-leaflet';
const MCP_local = [
  [10.775911446842391, 106.66257956965325],
  [10.807082147705916, 106.71306272574583],
  [10.790611, 106.715501],
];
const Routing = () => {
  const map = useMap();
  L.Routing.control({
    waypoints: [L.latLng(10.880758675454759, 106.80538629714444), L.latLng(MCP_local[0][0], MCP_local[0][1])],
    router: L.Routing.mapbox(
      'pk.eyJ1IjoidGhhbmh0dWFuY3NrMjAiLCJhIjoiY2xnZm5rbnJ2MDJvbjNvbGJjdWhkOWNlNyJ9.m3OiisbsTj-e43EomRdqfA',
    ),
  }).addTo(map);

  return null;
};

export default Routing;
