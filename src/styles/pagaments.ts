
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
   justifyContent:'center',
   alignItems:'center',
   width:wp('98%')
  },
footer:{
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'row',
  height:40,
},
footerText:{
  fontSize:14,
  fontFamily:'Roboto-Bold',
  color:'#000000',
  maxWidth:300,
  textAlign:'center'
},
containerFormHeader:{
backgroundColor:'#E6E6E6',
borderRadius:21,
width:wp('90%'),
height:80,
marginTop:10,

alignItems:'center',
flexDirection:'row',
justifyContent:'flex-start',
paddingHorizontal:23,
},
containerFormHeaderTitle:{
     fontFamily:'Roboto-Bold',
     color:'#191921',
     fontSize:17,
     marginHorizontal:10

},
containerFormHeaderTitle1:{
  fontFamily:'muli-bold',
  color:'#666666',
  fontSize:14,
  marginHorizontal:10

},
containerFormTitle:{
  fontFamily:'muli-regular',
  color:'#191921',
  fontSize:15,
},
containerFormLeft:{
  marginLeft:-160
},
containerFormHeaderIcon:{
  width:33,
  height:20
}
});

export default styles;
