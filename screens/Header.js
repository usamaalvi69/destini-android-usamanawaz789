import React from 'react';
import { View } from 'react-native';
import MyLocation from './location';
import Icon from 'react-native-vector-icons/Ionicons';



const Header = (props)=>{

const openMenu = ()=>{
  props.navigation.openDrawer()
}
    return(
    <View>
        <Icon
          onPress={openMenu}
          style={[{ color: '#009387', marginLeft: 20, marginTop: 10 }]}
          size={25}
          name={'ios-menu'}
        />
        <MyLocation/>
    </View>)
}
export default Header;