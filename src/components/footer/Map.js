import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";

export default function Map() {
  const position = [40.927155, -73.96676];
  return (
    <div className="map-container">
      <MapContainer
        className="map"
        center={[40.927155, -73.96676]}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker center={position} radius={100}>
          <Popup>
            I am currently located <br /> within this area.
          </Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  );
}
