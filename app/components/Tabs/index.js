import React from 'react';
import { 
  TouchableHighlight, 
  Text, 
  View, 
} from 'react-native';

import SearchBar from '../Search';
import FoodList from '../FoodList';

import {styles} from './styles';
 

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phase: 'rewards'
    }
  }


  render() {
    return (
      <View style={{flex:1,backgroundColor:'#fff'}}> 
        <View style={styles.tabs}>
          <TouchableHighlight style={[styles.tab, styles.activeTab]}>
            <View style={styles.activeTabContainer}>
              <Text style={styles.tabText}>My List</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.tab, styles.inactiveTab]}>
            <Text style={styles.tabText}>Weekly Ads</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.tab, styles.inactiveTab, styles.lastTab]}>
            <Text style={styles.tabText}>Rewards</Text>
          </TouchableHighlight>
        </View>
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
      </View>
    )
  }
}