
import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'#fff'
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
   justifyContent:'center',
   flexDirection:'column',
   alignItems:'center',
   marginTop:80
  },
  containerFormTitle:{
    fontSize:20,
    fontFamily:'muli-bold',
    color:'#000000',
    marginBottom:20
  },
  containerFormText:{
    fontSize:15,
    fontFamily:'muli-regular',
    color:'#000000',
    maxWidth:300,
    textAlign:'center'
  },
  containerFormBottoms:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        marginTop:40
  },
  containerFormBottomsForms:{
      width:323,
      height:60,
      backgroundColor:'#191921',

      borderRadius:73,
      justifyContent:'center',
      alignItems:'center',

      marginBottom:20,
  },
  containerFormBottomsFormsTitle:{
    fontSize:15,
    fontFamily:'Roboto-Bold',
    color:'#fff',
    maxWidth:300,
    textAlign:'center'
  },
  containerFormBottomsForms1:{
      width:323,
      height:60,
      borderColor:'#191921',
      borderWidth:1,

      borderRadius:73,
      justifyContent:'center',
      alignItems:'center'
  },

  containerFormBottomsFormsTitle1:{
    fontSize:15,
    fontFamily:'Roboto-Bold',
    color:'#191921',
    maxWidth:300,
    textAlign:'center'
},
footer:{
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'row',
  height:40,
  backgroundColor:'#fff'
},
footerText:{
  fontSize:14,
  fontFamily:'Roboto-Bold',
  color:'#000000',
  maxWidth:300,
  textAlign:'center'
},
containerImagesuporte:{
  width:260,
  height:100,
  marginTop:120
}
});

export default styles;
