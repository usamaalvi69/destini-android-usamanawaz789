import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import MyOrderScreen from './MyOrderScreen';


import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import { View } from 'react-native-animatable';
import MyLocation from './location';

const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();

// const Tab = createMaterialBottomTabNavigator();

// const MainTabScreen = () => (
//     <Tab.Navigator
//       initialRouteName="Home"
//       // activeColor="#fff"
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeStackScreen}
//         options={{
//           tabBarLabel: 'Homie',
//           tabBarColor: '#009387',
//           tabBarIcon: ({ color }) => (
//             <Icon name="ios-home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={DetailsStackScreen}
//         options={{
//           tabBarLabel: 'Updates',
//           // tabBarColor: '#1f65ff',
//           tabBarIcon: ({ color }) => (
//             <Icon name="ios-notifications" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarColor: '#694fad',
//           tabBarIcon: ({ color }) => (
//             <Icon name="ios-person" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Explore"
//         component={ExploreScreen}
//         options={{
//           tabBarLabel: 'Explore',
//           tabBarColor: '#d02860',
//           tabBarIcon: ({ color }) => (
//             <Icon name="ios-aperture" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
// );

// export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: 'white',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'',
        
        headerLeft: () => (
          <View>
            <Icon
              onPress={() => navigation.openDrawer()}
              style={[{ color: '#009387', marginLeft: 20, marginTop: 10 }]}
              size={25}
              name={'ios-menu'}
            />
            {/* <Icon.Button name="ios-menu" size={25} backgroundColor= 'white' color= '#009387' style={{marginLeft: 10 }} onPress={() => navigation.openDrawer()}></Icon.Button> */}
            <MyLocation/>
            </View>
        )
        }} />
        <HomeStack.Screen 
        name="MyOrderScreen"
        component={MyOrderScreen}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff'
        })}
      />
</HomeStack.Navigator>
);
export default HomeStackScreen;

// const DetailsStackScreen = ({navigation}) => (
// <DetailsStack.Navigator screenOptions={{
//         headerStyle: {
//         backgroundColor: '#1f65ff',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//         fontWeight: 'bold'
//         }
//     }}>
//         <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
//         headerLeft: () => (
//             <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//         }} />
// </DetailsStack.Navigator>
// );
  