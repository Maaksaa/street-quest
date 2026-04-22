import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { locations, type Location } from '../data/locations';

const NOVI_SAD_COORDS = {
  longitude: 19.8335,
  latitude: 45.2671,
  zoom: 13,
};

export default function MapView() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [visitedIds, setVisitedIds] = useState<number[]>([]);

  const handleVisit = (id: number) => {
    setVisitedIds((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };

  return (
    <Map
      initialViewState={NOVI_SAD_COORDS}
      style={{ width: '100%', height: '100vh' }}
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
    >
      {locations.map((location) => (
        <Marker
          key={location.id}
          longitude={location.longitude}
          latitude={location.latitude}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedLocation(location);
            }}
            className="cursor-pointer text-3xl leading-none"
          >
            {visitedIds.includes(location.id) ? '✅' : '📍'}
          </button>
        </Marker>
      ))}

      {selectedLocation && (
        <Popup
          longitude={selectedLocation.longitude}
          latitude={selectedLocation.latitude}
          onClose={() => setSelectedLocation(null)}
        >
          <h3>{selectedLocation.name}</h3>
          <p>{selectedLocation.description}</p>
          <button onClick={() => handleVisit(selectedLocation.id)}>
            {visitedIds.includes(selectedLocation.id)
              ? '✅ Посещено'
              : 'Отметить посещённым'}
          </button>
        </Popup>
      )}
    </Map>
  );
}
