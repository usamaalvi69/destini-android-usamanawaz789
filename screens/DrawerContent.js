import React, {useState, useEffect, useContext}  from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Drawer
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as firebase from 'firebase'
import {UserContext} from './UserContext'


export function DrawerContent(props) {
    const [email, setEmail] = useState('');
    const [anError, setAnError] = useState('');
    const loginState = useContext(UserContext);
    // console.log('__________')
    // console.log(loginState)


    useEffect(()=>{
        // console.log('__________')
      var user = firebase.auth().currentUser;

     setEmail(user.email)

    }, [])
   

    const paperTheme = useTheme();
    signMeOut = () => {
        firebase.auth().signOut().then(function() {
         loginState.customSignOut()
          }).catch(function(error) {
            setAnError(error)
            // console.log(error)
          });
             
        }


    // const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <Drawer.Section style={{paddingVertical: 10}}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Usama Nawaz</Title>
                            <Caption style={styles.caption}>{email}</Caption>
                            </View>
                        </View>

                    </View>
                    </Drawer.Section>

                    <Drawer.Section style={styles.drawerSection}>

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="cart-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="My Orders"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="heart-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Favourites"
                            // onPress={() => {props.navigation.navigate('FavouritesScreen')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="chat-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Contact Us"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                    <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-plus-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Refer a friend"
                            // onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={signMeOut}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      justifyContent: "center",
      paddingLeft: 20,
      paddingVertical: 12,
     // paddingHorizontal: 30,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    drawerSection: {
      //marginTop: 10,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
