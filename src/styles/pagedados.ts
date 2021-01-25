
import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  containerHeader:{
      justifyContent:'flex-start',
      padding:23,
      paddingTop:44
  },
  containerHeaderLogo:{
       width:18,
       height:25
  },
  containerBody:{
   justifyContent:'flex-start',
   flexDirection:'row',
   alignItems:'center',
   paddingLeft:23,
   marginBottom:30
  },
  containerBodyIcon:{
    width:25,
    height:25
  },
  containerBodyTitle:{
    fontSize:25,
    color:'#000',
    fontFamily:'muli-extrabold',
    left:10
  },
  containerForm:{
   
    justifyContent:'center',
    alignItems:'center'
  },
  containerFormBodyBottomText:{
    fontSize:14,
    color:'#191921',
    fontFamily:'Roboto-Bold',
  },
  containerFormBottom:{
    width:343,
    height:60,
    backgroundColor:'#fff',
    borderRadius:73,
    borderWidth:1,
    borderColor:'#191921',
 
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,

    marginTop:10,
  },
  containerFormInput:{
    width:343,
    height:60,

    backgroundColor:"#E6E6E6",
    borderTopLeftRadius:13,
    borderTopRightRadius:13,
    marginBottom:20,

    paddingHorizontal:10,
    fontFamily:'muli-regular',
    fontSize:15,
  },
});

export default styles;
