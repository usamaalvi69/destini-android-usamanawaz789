import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import * as firebase from 'firebase'


export default class LoadingScreen extends React.Component {
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }


render() {
    return(
        <View style={styles.container}>
            <Text>Loading...</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
/////////////////////////////////////////////////////////////////////////
// class AuthLoadingScreen extends React.Component {
//     constructor() {
//       super();
//       this._bootstrapAsync();
//     }
  
//     // Fetch the token from storage then navigate to our appropriate place
//     _bootstrapAsync = async () => {
//       const userToken = await AsyncStorage.getItem('userToken');
  
//       // This will switch to the App screen or Auth screen and this loading
//       // screen will be unmounted and thrown away.
//       this.props.navigation.navigate(userToken ? 'App' : 'Auth');
//     };
  
//     // Render any loading content that you like here
//     render() {
//       return (
//         <View style={styles.container}>
//           <ActivityIndicator />
//           <StatusBar barStyle="default" />
//         </View>
//       );
//     }
//   }