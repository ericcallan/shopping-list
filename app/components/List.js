import React from 'react';
import { View } from 'react-native';
import SearchBar from './Search';
import FoodList from './FoodList';

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}> 
        <SearchBar />
        <FoodList 
          foodOrder={this.props.foodOrder}
          food={this.props.food} 
          beacons={this.props.beacons}
          increment={this.props.increment}
          decrement={this.props.decrement}
          setOrder={this.props.setOrder}
          activeItem={this.props.activeItem}
        />
      </View>
    )
  }
}

export class Rewards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}> 
        Rewards
      </View>
    )
  }
}

export class Ads extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}> 
        Ads
      </View>
    )
  }
}

