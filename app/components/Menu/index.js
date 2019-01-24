import React from 'react';
import { Image, View } from 'react-native';
import {styles} from './styles';

export const Menu = (props) => {
    return (
      <View style={styles.menu}>
        <Image  
        	style={styles.image}
          source={require('../../assets/img/icons/Menu.png')} 
          resizeMode="contain"
        />
      </View>
    )
}