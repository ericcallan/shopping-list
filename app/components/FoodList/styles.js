import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    // padding: 16,
    height: 90,
    flex: 1,
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 1,
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 2
  },
  active: {
    color:'#90c958'
  },
  item: {
    color:'#515357',
    marginLeft:10,
    fontFamily:'AvenirNext-Bold'
  },
  line: {
    height:80,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  cell: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cellLast: {
  },
  cellText: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft:5
  },
  quantity: {
    marginLeft:10, 
    marginRight:10, 
    color:'#702779', 
    width:10,
    fontFamily: 'Avenir-Light', 
    fontWeight: '400'
  },
  activeLine: {
    position:'absolute',
    top:1,
    width:20,
    backgroundColor:'#90c958',
    zIndex:2,
    height:'100%',
    right:0
  }
});



