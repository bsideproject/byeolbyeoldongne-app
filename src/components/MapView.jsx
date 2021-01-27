import React, {useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const GoogleMap = (props) => {
  useEffect(() => {
    Geolocation.getCurrentPosition((position) => console.log(position));
  }, []);

  return (
    <MapView
      {...props}
      style={{width: '100%', height: '100%'}}
      mapType="standard"
      provider={PROVIDER_GOOGLE}
    />
  );
};

export default GoogleMap;
