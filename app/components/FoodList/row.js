import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Check from '../check';
import { CircularButton } from '../Buttons';
import {styles} from './styles';

export default class Row extends Component {

  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    const { item, index, data, activeItem } = this.props;

    let isPrimary = false; 
    if(data.id === activeItem) {
      isPrimary = true;
    }

    let isPrimaryClass = ''; 
    if(data.id === activeItem) {
      isPrimaryClass = styles.active;
    }

    return (
      <View style={styles.row}>
        <View style={styles.cellText}>
          <Text style={[styles.item, isPrimaryClass]}>{data.name}</Text>
        </View>

        <View style={[styles.cell]}>
          <CircularButton onClick={() => this.props.decrement(data.id)}> - </CircularButton>
          <Text style={styles.quantity}>{data.quantity}</Text>
          <CircularButton onClick={() => this.props.increment(data.id)}> + </CircularButton>
        </View>

        <View style={[styles.cell, styles.cellLast]}>
          <Check />
        </View>

        <ActiveBar isPrimary={isPrimary}/>
      </View>
    );
  }
}

const ActiveBar = ({isPrimary}) => {
  if(!isPrimary) {
    return <View></View>
  }

  return <View style={styles.activeLine}></View>
};
