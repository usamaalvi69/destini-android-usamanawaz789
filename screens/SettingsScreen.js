import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as firebase from 'firebase'

const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button
          title="Click Here"
          onPress={() => {firebase.auth().signOut()}}
        />
      </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
