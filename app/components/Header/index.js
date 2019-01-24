import React from 'react';
import { Image, Text, View } from 'react-native';
import {styles} from './styles';
import Bubble from '../Bubble';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      	<View style={styles.header}>
        	<Text style={styles.headerText}>Hi, Bill</Text>
        	<Text style={styles.bodyText}>Welcome to the Shopping List</Text>
      	</View>
        <Bubble header="$9.50" text="Expiring Soon" bubbleposition={{left:20}} positionStyle={{right:10}}/>
        <Bubble header="$0.00" text="Off per Gallon" bubbleposition={{left:200}} positionStyle={{right:10}}/>
      	<Image 
      		style={styles.img} 
      		source={require('../../assets/img/backgrounds/bg9.jpg')} 
      		resizeMode="cover"
      	/>
      </View>
    )
  }
}
