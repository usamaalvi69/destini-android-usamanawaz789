import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity
} from 'react-native';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';

import * as Animatable from 'react-native-animatable';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 200;

const MyOrderScreen = ({route}) => {
  const itemData = route.params.itemData;
  const navTitleView = useRef(null);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image source={{uri: itemData.imageUri}} style={styles.image} />
        )}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>{itemData.title}</Text>
          </View>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text style={styles.navTitle}>{itemData.title}</Text>
          </Animatable.View>
        )}>
        <TriggeringView
          style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Overview</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <FontAwesome name="star" size={16} color='#009387' />
              <Text style={{marginHorizontal: 2}}>{itemData.rating}</Text>
              <Text>({itemData.reviews})</Text>
            </View>
          </View>
        </TriggeringView>
        <View style={styles.sectionLarge}>
        <View style= {styles.setItemBorder}>
          <TouchableOpacity>
        <Text>Khaalis Doodh 1 kg</Text>
        <Text style={{color: '#B1B2B1'}}>Rs.{' '}{itemData.doodh}</Text>
        </TouchableOpacity>
        </View>
            
        <View style= {styles.setItemBorder}>
        <TouchableOpacity>
        <Text>Khaalis Dahi 1 kg</Text>
        <Text style={{color: '#B1B2B1'}}>Rs.{' '}{itemData.dahi}</Text>
        </TouchableOpacity>
        </View>

        <View style= {styles.setItemBorder}>
        <TouchableOpacity>
        <Text>Khaalis Desi Ghee 1 kg</Text>
        <Text style={{color: '#B1B2B1'}}>Rs.{' '}{itemData.ghee}</Text>
        </TouchableOpacity>
        </View>

        <View style= {styles.setItemBorder}>
        <TouchableOpacity>
        <Text>Khaalis Khoya 1 kg</Text>
        <Text style={{color: '#B1B2B1'}}>Rs.{' '}{itemData.khoya}</Text>
        </TouchableOpacity>
        </View>

        <View style= {styles.setItemBorder}>
        <TouchableOpacity>
        <Text>Khaalis Dahi 1 kg</Text>
        <Text style={{color: '#B1B2B1'}}>Rs.{' '}{itemData.dahi}</Text>
        </TouchableOpacity>
        </View>

        <View style= {styles.setItemBorder}>
        <TouchableOpacity>
        <Text>Khaalis Desi Ghee 1 kg</Text>
        <Text style={{color: '#B1B2B1'}}>Rs.{' '}{itemData.ghee}</Text>
        </TouchableOpacity>
        </View>

        <View style= {styles.setItemBorder}>
        <TouchableOpacity>
        <Text>Khaalis Khoya 1 kg</Text>
        <Text style={{color: '#B1B2B1'}}>Rs.{' '}{itemData.khoya}</Text>
        </TouchableOpacity>
        </View>
        

        </View>

      

      </HeaderImageScrollView>
    </View>
  );
};

export default MyOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5F7F6',
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#F5F7F6',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    backgroundColor: '#F5F7F6',
    minHeight: 300,
  },
  setItemBorder:{
    backgroundColor: '#FFFFFF', 
    marginTop: 15,
    borderWidth: 15, 
    borderColor: '#FFFFFF',

  }
});
