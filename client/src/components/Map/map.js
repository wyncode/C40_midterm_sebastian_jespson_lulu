//get the CSS for Directions
import 'react-map-gl-directions/dist/mapbox-gl-directions.css';
import 'mapbox-gl/dist/mapbox-gl.css';
//this get's the search bar
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { useState, useRef, useCallback, useContext } from 'react';
import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl';
import { FiFlag } from 'react-icons/fi';
import Geocoder from 'react-map-gl-geocoder';
import Directions from 'react-map-gl-directions';
import { AppContext } from '../../context/AppContext';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiamVzcDk2IiwiYSI6ImNraHJ2b3R1NzA3MGkyd210NHQ0MTljaW0ifQ.qq4toWUDIFOZsw9xSf-6-g';
const exampleArray = [
  {
    latitude: 25.7617,
    longitude: -80.1918
  }
];

const Map = () => {
  const { charities } = useContext(AppContext);
  //set the state and the viewport to change
  const [viewport, setViewport] = useState({
    latitude: 25.7617,
    longitude: -80.1918,
    zoom: 8
  });

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  async function fetchCharityCoordinates() {
    // await response of fetch call
    let response = await charities.map((charity) => {
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${charity.fullAddress}.json?access_token=pk.eyJ1IjoiamVzcDk2IiwiYSI6ImNraHJ2b3R1NzA3MGkyd210NHQ0MTljaW0ifQ.qq4toWUDIFOZsw9xSf-6-g`
      );
    });
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    console.log(data);
  }

  //
  const fetchCharityCoordinateAPI = () => {
    fetch(`https://data.cityofnewyork.us/resource/yjub-udmw.json`)
      .then((res) => res.json())
      .then() //map throgh it to get coordinate and pass thru geolocation
      .then((hotspots) => {
        this.setState({
          wifiHotspots: hotspots
        });
      });
  };

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },

    [handleViewportChange]
  );

  return (
    <div style={{ height: '100vh' }}>
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        width="50%"
        height="75%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        <Directions
          mapRef={mapRef}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          placeholderOrigin="Your current Location"
          placeholderDestination="Your Destination"
          position="top-left"
        />
        {exampleArray.map((location) => (
          <Marker latitude={location.latitude} longitude={location.longitude}>
            <FiFlag style={{ color: 'red' }} />
            {/* <img src="https://amigosforkids.org/wp-content/themes/amigos2018/img/general/logo-color.png" alt="marker" /> */}
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
