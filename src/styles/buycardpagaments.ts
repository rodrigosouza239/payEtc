
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
   marginTop:15,
   alignItems:'center'
  },
  containerFormRow:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:-30,
    width:410,
    height:240
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

   marginLeft:20
  },
  containerFormInput1:{
    backgroundColor:'#FFF',
    width:360,
    height:43,
    paddingHorizontal:20,
    marginBottom:10,
    borderRadius:72,
    
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row'
  },
  containerFormInput1Title:{
    fontFamily:'Roboto-Black',
    fontSize:16,
    color:'#020202',
    marginLeft:70
  },
  containerFormInputIconText:{
    fontFamily:'muli-bold',
    fontSize:15,
    color:'#4D4D4D',
  },
  containerFormInputIcon:{
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
  containerFormInputCotation:{
    flexDirection:'row', marginLeft:-120,
  },
  containerFormInputCotationTITLE:{
    color:'#FFFFFF',
    fontSize:14,
    fontFamily:'Roboto-Regular'
  },
  containerFormInputCotationTITLELeft:{
    color:'#FFFFFF',
    fontSize:14,
    fontFamily:'Roboto-Regular',
    marginLeft:10
  },
  containerFormInputCotationTITLEBold:{
    color:'#FFFFFF',
    fontSize:14,
    fontFamily:'Roboto-Bold'
  },
  containerFormAdd:{
    justifyContent:'center',alignItems:'center', marginTop:10
  },
  containerFormAddBottom:{
    backgroundColor:'#E6E6E6',
    width:370,
    height:55,
    borderRadius:21,

    flexDirection:'row',
    alignItems:'center', 
    justifyContent:'flex-start', 
    paddingHorizontal:10
  },
  containerFormAddTitle:{
    marginHorizontal:30,
    fontSize:15,
    fontFamily:'Roboto-Bold',
    color:'#191921'
  },

});

export default styles;
