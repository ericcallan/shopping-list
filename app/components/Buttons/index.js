import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';

export const CircularButton = (props) => {
    return (
      <TouchableOpacity
        onPress={props.onClick}
        style={{
          borderWidth:1,
          borderColor:'#90c958',
          alignItems:'center',
          justifyContent:'center',
          width:35,
          height:35,
          backgroundColor:'#fff',
          borderRadius:100,
        }}
       >
          <Text style={{color:'#90c958', fontWeight:'bold'}}>{props.children}</Text>
        </TouchableOpacity>
    )
}

export const MenuButton = (props) => {
    return (
      <View>
        <Image  
          source={require('../../assets/img/icons/Menu.png')} 
          resizeMode="center"
        />
      </View>
    )
}