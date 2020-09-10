import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
// import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { getPreciseDistance } from 'geolib';

const GetDis = ()=> {

  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
 
      (async () => {

        let location = await Location.getCurrentPositionAsync({});
            const { latitude , longitude } = location.coords;
            // console.log(location.coords);
               setLat(latitude)
               setLong(longitude)
      })();
    
    _getPreciseDistance();
  });


  _getPreciseDistance = () => {

    var pdis = getPreciseDistance(
      { latitude: lat, longitude: long },
      { latitude: 51.528308, longitude: -0.3817765 }
    );
    setData(pdis / 1000)
    // console.log(pdis/1000)
  };


  return (
    <View>
  <Text>{data}</Text>
    </View>
  );
}

export default GetDis;
