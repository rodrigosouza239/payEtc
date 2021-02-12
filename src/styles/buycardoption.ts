
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffff'
  },
  containerHeader:{
      padding:23,
      marginTop:20
  },
  containerHeaderLogo:{
    width:80,
    height:26,
    marginBottom:30
  },
  containerHeaderForm:{
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      paddingHorizontal:24
  },
  containerHeaderFormText:{
      fontSize:23,
      fontFamily:'muli-extrabold',
      color:'#000'
  },
  containerForm:{
   marginTop:40,
   height:40,
   width:wp('98%')
  },
  containerFormRow:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
  },
  containerFormCenter:{
    alignItems:'flex-start',
    marginTop:10,
    padding:23,
  },
  containerFormCenterTitle:{
   fontFamily:'muli-regular',
   fontSize:15,
   color:'#4D4D4D',
   maxWidth:300,
   marginTop:10,

   marginLeft:-23
  },
  containerFormInput1:{
    backgroundColor:'#191921',
    width:wp('90%'),
    height:60,

    paddingHorizontal:20,
    borderRadius:72,

    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row'
  },
  containerFormInput1Title:{
    fontFamily:'Roboto-Medium',
    fontSize:14,
    color:'#fff',
    marginLeft:60
  },
  containerFormInputIconText:{
    fontFamily:'muli-bold',
    fontSize:15,
    color:'#4D4D4D',
  },
  containerFormInputIcon:{
      backgroundColor:'#fff',
      borderRadius:55,
      width:70,
      height:50,
      marginLeft:-15,

      justifyContent:'center',
      alignItems:'center',
  },
  footer:{
      justifyContent:'center',
      alignItems:'center',
      height:hp('110%'),
  },
  footerBottom:{
    
    backgroundColor:'#191921',
    width:wp('90%'),
    height:60,
    borderRadius:73,
  
    justifyContent:'center',
    alignItems:'center'
  },
  footerBottomText:{
    color:'#FFFFFF',
    fontSize:16,
    fontFamily:'Roboto-Bold'
  },

});

export default styles;
