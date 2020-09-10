import React, { useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-elements';

import database from './Firestore';
import * as Location from 'expo-location';
import { getPreciseDistance } from 'geolib';

import MyOrderScreen from './MyOrderScreen';
import Swiper from 'react-native-swiper';

const HomeScreen = ({navigation}) => {

  const [mydata, setMydata] = useState([]);
  // const [dis, setDis] = useState('');

  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
 


  useEffect(()=>{

    (async () => {

      let location = await Location.getCurrentPositionAsync({});
          const { latitude , longitude } = location.coords;
          // console.log(location.coords);
             setLat(latitude)
             setLong(longitude)
    })();

    const unsubscribe = database
    .collection('Uri')
    .onSnapshot((snapshot) => 
    setMydata(snapshot.docs.map(doc => doc.data()))
    );

    return () => {
      // this is the cleanUp....
      unsubscribe();
    }
    // _getPreciseDistance();
  
      }, [])




// _getPreciseDistance = () => {

//   var pdis = getPreciseDistance(
//     { latitude: lat, longitude: long },
//     { latitude: mydata.loc.latitude, longitude: mydata.loc.longitude }
//   );
//   setDis(pdis / 1000)
//   // console.log(pdis/1000)
// };


// const distance = mydata.map((item) => {
//      _getPreciseDistance = () => {

//   var pdis = getPreciseDistance(
//     { latitude: lat, longitude: long },
//     { latitude: item.loc.latitude, longitude: item.loc.longitude }
//   );
//   // setData(pdis / 1000)
//   // console.log(pdis/1000)
// };
//      return pdis
//    })

const renderItem = ({ item }) => {

  return (

  <View style= {styles.setBorder}>

<TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('MyOrderScreen', {itemData: item} )}>
<ImageBackground style={{width: '99%',  height: 200}}
                     source = {{uri: item.imageUri}}>

                <View style= {styles.setBox}>
                <Text style= {{marginLeft: 15, 
                marginTop: 2, 
                color: '#FFFFFF'}}>
                {item.delivery}</Text>
                </View>

  </ImageBackground>
  </TouchableOpacity>
   

 
  
    
      <Text style= {styles.setText}>{item.title} </Text> 
      <View style={{marginTop: -15}}>
      <Text style={{marginLeft: 295, color: '#B1B2B1'}}>({item.rating})</Text> 
      <Icon name= "star" style={{marginLeft: 280, marginTop: -15, color: '#009387'}}/>
      </View>
      
      
  </View>
   )
} 

          
  
  return (

    <ScrollView style={styles.container}>

    <View style={styles.sliderContainer}>
      <Swiper
        autoplay
        horizontal={false}
        height={200}
        activeDotColor='#009387'>
        <View style={styles.slide}>
          <Image
            source={require('../assets/banners/food-banner1.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/banners/food-banner2.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/banners/food-banner3.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
      </Swiper>
    </View>
      <Text style= {styles.setTitleText}>ALL SHOPS</Text>
   <FlatList 
      data={mydata}
      renderItem={renderItem} />
    
    {/* <Card style={styles.cardViewStyle}>
   
   </Card> */}

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
container: {
  flex: 1, 
  // alignItems: 'center', 
  backgroundColor: '#F5F7F6',
  // backgroundColor: '#FFFFFF'
  // justifyContent: 'center'
},
sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
setBorder: {
backgroundColor: '#FFFFFF', 
marginTop: 20,
borderWidth: 15, 
borderColor: '#FFFFFF',
},
setTitleText: {
  marginLeft: 20,
  marginTop: 20,
  fontSize: 20,
  fontWeight: "bold"
},
setText: {
  marginTop: 5,
  fontSize: 15,
  fontWeight: "bold"
},
setBox: {
  marginTop: 18,
  height: 23,
  width: 120,
  backgroundColor: '#009387'
},
// cardViewStyle:{
 
//   width: 250, 
//   height: 150,
 

// },


});

// card:{
//   width: 320,
//   height: 470,
//   backgroundColor: '#FE474C',
//   borderRadius: 5,
//   shadowColor: 'rgba(0,0,0,0.5)',
//   shadowOffset: {
//     width: 0,
//     height: 1
//   },
//   shadowOpacity:0.5,
// },