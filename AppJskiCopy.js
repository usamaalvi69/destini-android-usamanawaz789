import React, { useEffect } from 'react';
import { View, ActivityIndicator} from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import * as firebase from 'firebase'
import { createDrawerNavigator } from '@react-navigation/drawer';


import { DrawerContent } from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import FavouritesScreen from './screens/FavouritesScreen';


import RootStackScreen from './screens/RootStackScreen';

var firebaseConfig = {
  apiKey: "AIzaSyCnAkeV3PYGZjVc45L5EMyukzoRhbDl4h0",
  authDomain: "themilkapp-2838d.firebaseapp.com",
  databaseURL: "https://themilkapp-2838d.firebaseio.com",
  projectId: "themilkapp-2838d",
  storageBucket: "themilkapp-2838d.appspot.com",
  messagingSenderId: "670131337439",
  appId: "1:670131337439:web:4d72d0bb5efd4b5544516a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null); 

  

  useEffect(() => {

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      setUserToken(user)
    } else {
      // No user is signed in.
    }
  });

  });

  // if(!isLoading) {
  //   return(
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //       <ActivityIndicator size="large"/>
  //     </View>
  //   );
  // }
  return (


    <NavigationContainer>
      { userToken ?(
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="FavouritesScreen" component={FavouritesScreen} />
        </Drawer.Navigator>
      )
    :
      <RootStackScreen/>
    }
    </NavigationContainer>

   
  );
}
export default App;
