import React from 'react';
import { compose,withProps } from "recompose";
import { withScriptjs,withGoogleMap,GoogleMap,Marker } from "react-google-maps";
// import Header from "./header";
// import React, { useCallback, useState } from 'react';
// import { GoogleMap,useJsApiLoader,Marker } from "@react-google-maps/api";

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCFD7TmlBXdrrmHG8g51OqydvuPrYsXUUg",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 31.397678, lng: 73.109057 }}>
    {props.isMarkerShown && (
      <>
      <Marker position={{ lat: 31.388018, lng: 73.119792 }} />
      <Marker position={{ lat: 31.397678, lng: 73.109057 }} />
      <Marker position={{ lat: 31.543431, lng: 73.181918}} />
      </>
    )}
  </GoogleMap>
));
// const containerStyle = {
//     width: '400px',
//     height: '400px'
//   };
  
//   const center = {
//     lat: 59.95,
//     lng: 30.33
//   };
const Map = () => {
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: "AIzaSyCFD7TmlBXdrrmHG8g51OqydvuPrYsXUUg"
    //   })
    //   const [map,setMap]=useState(null)
    //   console.log(map)
    //   const onLoad=useCallback(
    //     function callback(map) {
    //         const bounds = new window.google.maps.LatLngBounds();
    //         map.fitBounds(bounds);
    //         setMap(map)
    //       },[])
    //     const onUnmount=useCallback(function callback(map) {
    //         setMap(null)
    //       }, [])
    return (
      <>
        {/* <Header /> */}
        <div className="mpp">
        <MyMapComponent isMarkerShown />
        </div>
      </>
        // <>{isLoaded?(<><GoogleMap
        //     mapContainerStyle={containerStyle}
        //     defaultCenter={center}
        //     defaultZoom={5}
        //     onLoad={onLoad}
        //     onUnmount={onUnmount}
        //   ><Marker position={center} /></GoogleMap></>):(<></>)}</>
    );
};

export default Map;