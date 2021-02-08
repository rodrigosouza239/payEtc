
import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  containerHeader:{
    justifyContent:'flex-start',
    padding:20,
    paddingTop:44
},
containerBody:{
  justifyContent:'flex-start',
  flexDirection:'row',
  alignItems:'center',
  paddingLeft:23,
  marginBottom:30
 },
 containerBodyTitle:{
   fontSize:25,
   color:'#000',
   fontFamily:'muli-extrabold',
   left:10
 },
 containerBodyText:{
  fontSize:17,
  color:'#4D4D4D',
  fontFamily:'muli-regular',
  marginBottom:10,
  maxWidth:360,
  left:20
},
containerFormCenter:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},
containerFormInput:{
  width:335,
  height:60,

  backgroundColor:"#E6E6E6",
  borderTopLeftRadius:13,
  borderTopRightRadius:13,
  marginBottom:10,

  borderColor:'#4D4D4D',
  borderBottomWidth:1,

  paddingHorizontal:10,
  fontFamily:'muli-regular',
  fontSize:15,
},
containerFormBottom:{
  width:343,
  height:60,
  
  borderRadius:73,

  borderColor:'#191921',
  borderWidth:1,


  justifyContent:'center',
  alignItems:'center',
  marginBottom:10,

  marginTop:10,
},
containerFormBottomText:{
  fontSize:16,
  color:'#191921',
  fontFamily:'Roboto-Bold',
}
});

export default styles;
