import React from 'react';
import { StatusBar, View } from 'react-native';
import food from '../data/food';
import beacons from '../data/beacons';

import Header from '../components/Header';
import { Menu } from '../components/Menu';
import Tabs from '../components/Tabs'

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      food: food,
      beacons: beacons,
      foodOrder: Object.keys(food),
      activeItem: food[Object.keys(food)[0]].id
    }

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.setOrder = this.setOrder.bind(this);
  }

  decrement(index) {
    let food = Object.assign({}, this.state.food);

    if(food[index].quantity > 0) {
      food[index].quantity -= 1;
    }
    
    this.setState({
      food: food
    });
  }

  increment(index) {
    let food = Object.assign({}, this.state.food);
    food[index].quantity += 1

    this.setState({ food: food });
  }

  setOrder(orderArr) {
    // * set marker to currently active item
    this.setState({
      activeItem: orderArr[0]
    });

    // * Need to ensure that elements that aren't
    // being signaled from beacons are at end of list
    const foodOrder = Object.assign(orderArr);
    const food = Object.assign({}, this.state.food);
    const missing = [];

    Object.keys(food).forEach((key) => {
      if(!orderArr.includes(parseInt(key))) {
        missing.push(parseInt(key))
      }
    });

    const setOrder = foodOrder.concat(missing);
    
    setTimeout(() => {
      this.setState({
        foodOrder: setOrder
      });
    }, 650)
  }

  render() {
    return (
      <View style={{flex:1}}> 
        <StatusBar barStyle="light-content" />
        <Header />
        <Tabs
          foodOrder={this.state.foodOrder}
          food={this.state.food} 
          beacons={this.state.beacons}
          increment={this.increment}
          decrement={this.decrement}
          setOrder={this.setOrder}
          activeItem={this.state.activeItem}
        />
        <Menu />
      </View>
    )
  }
}