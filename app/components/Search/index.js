import React from 'react';
import { View, TextInput, Image} from 'react-native';
import {styles} from './styles';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.textChanged = this.textChanged.bind(this);
    this.doSearch = this.doSearch.bind(this);
    this.cancelSearch = this.cancelSearch.bind(this);
  }

  textChanged(data) {
    console.log(data);
  }

  doSearch(data) {
    console.log(data);
  }

  cancelSearch(data) {
    console.log(data);
  }

  render() {
    return (
      <View style={styles.view} > 
        <Image  
          style={styles.image}
          source={require('../../assets/img/icons/plus.png')} 
          resizeMode="contain"
        />
        <TextInput
          style={styles.searchBar}
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    )
  }
}