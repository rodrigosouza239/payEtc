
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
 
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
  containerBodyText:{
     fontSize:20,
     color:'#fff',
     fontFamily:'muli-extrabold',
     maxWidth:240, 
     marginLeft:-70, 
     marginBottom:30
  },
  containerFooter:{
     justifyContent:'center', alignItems:'center',
     height:hp('120%'),
  },
  containerFooterBottomBorder:{
    width:333,
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
    width:333,
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
  },
  containerFooterResponsi:{
  }
});

export default styles;
