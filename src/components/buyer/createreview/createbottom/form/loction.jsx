import React, { useState, Fragment  } from "react";
import { useLoadScript, GoogleMap } from "@react-google-maps/api";


function Loction(props) {
  const {clickedLatLng, setClickedLatLng}=props;
  const [mapRef, setMapRef] = useState(null);
  const [center, setCenter] = useState({ lat: 23.392899070336068 , lng: 42.86244913615009 });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: ""
  });

  const onClick=(e)=>{
    const value = e.latLng.toJSON();
    setClickedLatLng(value);
  }


  const renderMap = () => {
    return (
      <div
      className={"mab"}>
        <GoogleMap
          // Store a reference to the google map instance in state
          //onLoad={map => setMapRef(map)}
          // Save the current center position in state
         // onCenterChanged={() => mapRef && setCenter(mapRef.getCenter().toJSON())}
          // Save the user's map click position
          onClick={e => onClick(e)}
          center={center}
          zoom={5}
          mapContainerStyle={{
            height: "100%",
            width: "100%"
          }}
        />

        </div>
    );
  };

  return isLoaded ? renderMap() : null;
}

export default Loction;

