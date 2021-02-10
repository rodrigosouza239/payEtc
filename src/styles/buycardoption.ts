
import { StyleSheet } from 'react-native';
 
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
   fontSize:16,
   color:'#4D4D4D',
   maxWidth:300,
   marginTop:10,

   marginLeft:-60
  },
  containerFormInput1:{
    backgroundColor:'#191921',
    width:380,
    height:60,

    paddingHorizontal:20,

    borderRadius:72,

    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row'
  },
  containerFormInput1Title:{
    fontFamily:'Roboto-Medium',
    fontSize:16,
    color:'#fff',
    marginLeft:80
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
      height:165,
      backgroundColor:'#ffff'
  },
  footerBottom:{
    
    backgroundColor:'#191921',
    width:380,
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
