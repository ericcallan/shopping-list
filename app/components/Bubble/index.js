import React from 'react';
import { Image, StyleSheet, Text, View, ListView, FlatList } from 'react-native';
import {styles} from './styles';

export default class Bubble extends React.Component {
  constructor(props) {
    super(props);

    this.direction = props.left;
  }

  render() {
    return (
      <View style={[styles.callout, this.props.bubbleposition]}>
        <Text style={styles.headerText}>{this.props.header}</Text>
        <Text>{this.props.text}</Text>
        <Image  
          style={[styles.triangle, this.props.positionStyle]}
          source={require('../../assets/img/icons/triangle-opacity75.png')} 
        />
      </View>
    )
  }
}