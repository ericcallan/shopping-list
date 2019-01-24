import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  headerText: {
    color:'#fff', 
    fontSize:26, 
    fontFamily: 'AvenirNext-Bold', 
    fontWeight: '600'
  },
  bodyText: {
    color:'#fff', 
    fontSize:16,
    fontFamily: 'Avenir-Light', 
    fontWeight: '400'
  },
  header: {
  	position:'absolute',
  	top:'20%',
  	zIndex: 2,
    left:20
  },
  img: {
  	alignSelf: 'center',
    width: 400,
    height:275
  },
  container: {
    height:'30%'
  }
})