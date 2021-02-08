
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
 
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  containerHeader:{
      justifyContent:'flex-start',
      padding:23,
      paddingTop:44
  },
  containerHeaderLogo:{
       width:80,
       height:26
  },
  containerBody:{
     position:'absolute',
     marginTop:460,
     paddingLeft:23,
     maxWidth:340,
  },
  containerBodyText:{
     fontSize:25,
     color:'#fff',
     fontFamily:'muli-extrabold',
  },
  containerFooter:{
    position:'absolute',
    marginTop:640,
    paddingLeft:23,

    justifyContent:'center',
    alignItems:'center'
  },
  containerFooterBottomBorder:{
    width:343,
    height:60,
    borderRadius:73,
    borderWidth:1,
    borderColor:'#fff',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:20,
    marginBottom:10
  },
  containerFooterBottom:{
    width:343,
    height:60,
    backgroundColor:'#fff',
    borderRadius:73,

    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:20,
    marginBottom:10
  },
  containerFooterBottomText:{
    fontSize:16,
    color:'#000',
    fontFamily:'Roboto-Bold',
  },
  containerFooterBottomTextBorder:{
    fontSize:16,
    color:'#fff',
    fontFamily:'Roboto-Bold',
  },
  containerFooterBottomIcon:{
      width:26,
      height:30
  },
  containerFooterBottomIconArrow:{
    width:30,
    height:20
  }
});

export default styles;
