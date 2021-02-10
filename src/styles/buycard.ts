
import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container:{
    flex:1
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
   color:'#4D4D4D'
  },
  containerFormInput1:{
    backgroundColor:'#E6E6E6',
    width:380,
    height:60,

    fontFamily:'muli-bold',
    fontSize:14,
    paddingHorizontal:20,

    borderTopRightRadius:13,
    borderTopLeftRadius:13,

    marginHorizontal:10
  },
  footerBottom:{
    
    width:380,
    height:60,
    borderColor:'#191921',
    borderWidth:1,
    borderRadius:73,
  
    justifyContent:'center',
    alignItems:'center'
  },
  footerBottomText:{
    color:'#191921',
    fontSize:16,
    fontFamily:'Roboto-Regular'
  },

});

export default styles;
