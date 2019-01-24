import React from 'react';
import { Image, StyleSheet} from 'react-native';
import CheckBox from 'react-native-check-box'

export default class Check extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      checked: false
    };
  }

  onClick(data) {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    const checkedImg = require('../assets/img/icons/checked.png');
    const uncheckedImg = require('../assets/img/icons/unchecked.png');

    return (
    	<CheckBox
  			style={styles.checkbox}
  			onClick={this.onClick}
  			isChecked={this.state.checked}
        checkedImage={<Image source={checkedImg} style={styles.icon}/>}
        unCheckedImage={<Image source={uncheckedImg} style={styles.icon}/>}
	    />
    )
  }
}

const styles = StyleSheet.create({
	checkbox: {
		borderColor:"red",
		borderRadius:100
	},
  icon: {
    height:35,
    width:35
  }
})
