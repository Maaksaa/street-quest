import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const NOVI_SAD_COORDS = {
  longitude: 19.8335,
  latitude: 45.2671,
  zoom: 13,
};

export default function MapView() {
  return (
    <Map
      initialViewState={NOVI_SAD_COORDS}
      style={{ width: '100%', height: '100vh' }}
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
    />
  );
}
