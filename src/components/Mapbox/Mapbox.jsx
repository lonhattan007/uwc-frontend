import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet/dist/leaflet.css';
import Routing from './FindRoute';

// import '@utils/dotenv';

import './Mapbox.scss';

const VITE_USERNAME = import.meta.env.VITE_USERNAME;
const VITE_STYLE_ID = import.meta.env.VITE_STYLE_ID;
const VITE_ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

const Mapbox = () => {
  const position = [10.880758675454759, 106.80538629714444];

  return (
    <div className="Mapbox">
      <div className="header">
        {/* <a href="">
          <FontAwesomeIcon className="icon-first" icon={faArrowLeft} />
        </a>
        <a className="go-back" href="/">
          Quay lại
        </a> */}
      </div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ minHeight: '75vh', minWidth: '75vw' }}>
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
