import React from 'react';
import Beacons from 'react-native-beacons-manager';
import Row from './row';
import SortableList from 'react-native-sortable-list';

export default class FoodList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identifier: 'Shopping',
      uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
      beaconOrder: [],
      islive: false
    };
  }

  componentWillMount() {
    if(this.state.islive) {
      Beacons.requestWhenInUseAuthorization();

      const region = {
          identifier: this.state.identifier,
          uuid: this.state.uuid
      };

      Beacons.startRangingBeaconsInRegion(region);
      Beacons.startUpdatingLocation();
    }
  }

  componentDidMount() {
    if(this.state.islive) {
      this.beaconsDidRange = Beacons.BeaconsEventEmitter.addListener(
        'beaconsDidRange',
        (data) => {
          if(data && data.beacons.length > 0) {
            if(data.beacons[0].accuracy >= 0) {
              const beaconOrder = data.beacons.map(a => a.major);
              this.props.setOrder(beaconOrder);
            }
          }
        }
      );
    }
  } 

  componentWillUnMount(){
    if(this.state.islive) {
      this.beaconsDidRange = null;
    }
  }

  render() {
    return (
      <SortableList
        data={ this.props.food }
        sortingEnabled={false}
        renderRow={
          (data) => (
            <Row increment={this.props.increment} 
              decrement={this.props.decrement} 
              activeItem={this.props.activeItem} 
              {...data} 
            />
          )
        }
        order={this.props.foodOrder}
        increment={this.props.increment}
        decrement={this.props.decement}
        keyExtractor={(item,index) => item.name}
        extraData={this.props}
        scrollEnabled={false}

      />
    )
  }
}
