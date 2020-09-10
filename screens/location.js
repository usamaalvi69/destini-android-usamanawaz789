import React, { useState, useEffect } from 'react';
import {  Text, View } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


// export default class MyLocation extends React.Component {
//   state= {
//     location:null,
//     geocode:null,
//     errorMessage:""
//   }

const MyLocation = () => {
  const [state, setState] = useState({
    location:null,
    geocode:null,
    errorMessage:""
  });

  useEffect(()=> {
    // console.log('UseEffect here ....') 
    getLocationAsync()
   }, []);

  // componentDidMount(){
  //   this.getLocationAsync()
  // }
   const getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setState({
        ...state, errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.BestForNavigation});
    const { latitude , longitude } = location.coords
    getGeocodeAsync({latitude, longitude})
    setState({ ...state, location: {latitude, longitude}});
    // console.log( latitude , longitude )

  };
  const getGeocodeAsync= async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location)
    setState({ ...state, geocode})
  }
  
    const {location,geocode, errorMessage } = state

    return (
     
      <View style={{flexDirection: "column", marginLeft: 70, marginTop: -31}}>

         <Text style={{fontSize: 12}}>Current Location</Text> 

   
         <Text style={{color: '#009387', fontSize: 20, marginLeft: -10}}>  {geocode ? geocode[0].street :""} </Text>

         </View>
    );
 
  }

 export default MyLocation;