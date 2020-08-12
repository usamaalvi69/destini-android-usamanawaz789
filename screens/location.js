import React from 'react';
import {  Text, View } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';



export default class MyLocation extends React.Component {
  state= {
    location:null,
    geocode:null,
    errorMessage:""
  }
  componentDidMount(){
    this.getLocationAsync()
  }
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.BestForNavigation});
    const { latitude , longitude } = location.coords
    this.getGeocodeAsync({latitude, longitude})
    this.setState({ location: {latitude, longitude}});

  };
  getGeocodeAsync= async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location)
    this.setState({ geocode})
  }
  render(){
    const {location,geocode, errorMessage } = this.state
    return (
      
        
      <View style={{flexDirection: "column", marginLeft: 70, marginTop: -31}}>

         <Text style={{fontSize: 12}}>Current Location</Text> 
        
         <Text style={{color: '#009387', fontSize: 20, marginLeft: -10}}>  {geocode ? geocode[0].street :""} </Text>

         </View>
    );
  }
}
