import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgba(0,0,0,0)'
  },
  tabs: {
    flexDirection: 'row',
    height:60,
    backgroundColor:'rgba(0,0,0,0)'
  },
  tab: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#EDEDED',
  },
  tabText: {
    fontFamily: 'AvenirNext-Bold'
  },
  activeTabContainer: {
    borderBottomWidth:4, 
    borderColor:'#90c958',
    paddingBottom:5
  },
  activeTab: {
    borderRightColor:'#ccc',
    backgroundColor: '#fff',
    borderRightWidth:1,
    height:70,
    top:-10,
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
  },
  lastTab: {
    borderTopRightRadius:15,
  },
  inactiveTab: {
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
  }
});



