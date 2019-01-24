import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
	callout: {
		backgroundColor:'rgba(255,255,255,.75)',
    borderRadius:5,
    position:'absolute',
    bottom:'15f%',
    zIndex: 2,
    height:60,
    padding:10,
    alignItems:'center',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:140
	},
  headerText: {
    fontFamily: 'AvenirNextCondensed-Bold',
    fontSize:18
  },
  triangle: {
    position:'absolute',
    bottom:-19.5,
    height:20,
    width:20
  }
})

