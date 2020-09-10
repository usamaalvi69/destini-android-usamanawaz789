// APP  /////////////////////////////////////////////////

import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import * as firebase from 'firebase'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {UserContext} from './screens/UserContext';
// import Firebase from './screens/Firebase'
import { DrawerContent } from './screens/DrawerContent';
import HomeStackScreen from './screens/HomeStackScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import MyOrderScreen from './screens/MyOrderScreen';
import RootStackScreen from './screens/RootStackScreen';





// const UserContext = createContext(false);
const Drawer = createDrawerNavigator();

// const App = () => {

export default class App extends React.Component {

 constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false };
    }
    customSignOut(){
      this.setState({isLoggedIn: false})
    }
    
  componentDidMount(){
    // console.log('only once')
    // Firebase.init();
    var that = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        that.setState({isLoggedIn: true})
        // console.log(that.state.isLoggedIn)
      } else {
        // No user is signed in.
      }
    });
}



  render(){
  return (

   <UserContext.Provider value ={ 
    {isLoggedIn: this.state.isLoggedIn,
      customSignOut: this.customSignOut.bind(this)}
    }>
    <NavigationContainer>
      { this.state.isLoggedIn ?(
        
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={HomeStackScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          {/* <Drawer.Screen name="MyOrderScreen" component={MyOrderScreen} /> */}
        </Drawer.Navigator>
      )
    : (
      <RootStackScreen/>
    )
    }
    </NavigationContainer>
     </UserContext.Provider>

   
  );
}
}

