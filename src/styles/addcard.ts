
import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  containerHeader:{
      padding:23,
      marginTop:20
  },
  containerHeaderForm:{
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      paddingHorizontal:24
  },
  containerHeaderFormText:{
      fontSize:23,
      fontFamily:'muli-bold',
  },
  containerForm:{
   marginTop:40,
  },
  containerFormInput:{
    backgroundColor:'#E6E6E6',
    width:380,
    height:60,

    fontFamily:'muli-bold',
    fontSize:15,
    paddingHorizontal:20,

    borderTopRightRadius:13,
    borderTopLeftRadius:13
  },
  containerFormRow:{
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      marginTop:10,
      left:10
  },
  containerFormCenter:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
  },
  containerFormInput1:{
    backgroundColor:'#E6E6E6',
    width:170,
    height:60,

    fontFamily:'muli-bold',
    fontSize:14,
    paddingHorizontal:20,

    borderTopRightRadius:13,
    borderTopLeftRadius:13,

    marginHorizontal:10
  },
  containerFormInput2:{
    backgroundColor:'#E6E6E6',
    width:120,
    height:60,

    fontFamily:'muli-bold',
    fontSize:14,
    paddingHorizontal:20,

    borderTopRightRadius:13,
    borderTopLeftRadius:13,

    marginHorizontal:10
  },
  containerFormInputIcon:{
     left:20
  },
  footer:{
    justifyContent:'center',
    alignItems:'center',
    height:300
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
