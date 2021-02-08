
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
  containerFormBodyText:{
    fontFamily:'muli-regular',
    fontSize:14,
    color:'#000000'
  },
  containerFormBody:{
    padding:23,
  }
});

export default styles;
