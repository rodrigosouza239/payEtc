
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
 
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  containerHeader:{
      justifyContent:'flex-start',
      padding:20,
      paddingTop:44
  },
  containerHeaderLogo:{
       width:18,
       height:25
  },
  containerBody:{
    justifyContent:'flex-start',
    marginLeft:23, marginBottom:30
  },
  containerBodyTitle:{
    fontSize:29,
    color:'#000',
    fontFamily:'muli-extrabold',
    marginBottom:20
  },
  containerBodyLabel:{
    fontSize:15,
    color:'#4D4D4D',
    fontFamily:'muli-regular',
    marginBottom:10,
  },
  containerBodyLabelBold:{
    fontSize:15,
    color:'#4D4D4D',
    fontFamily:'muli-regular',
    marginBottom:10,
    paddingLeft:10,
    fontWeight:'700'
  },
  containerBodyText:{
    fontSize:15,
    color:'#4D4D4D',
    fontFamily:'muli-regular',
    marginBottom:10,
    maxWidth:330
  },
  containerBodyForm:{
    flexDirection:'row'
  },
  containerForm:{
    marginLeft:-23,
    height:hp('130%'),
    width:wp('87%'),
    marginTop:120
  },
  containerFormBottom:{
     justifyContent:'flex-start',
     alignItems:'center',
     flexDirection:'row',

     marginBottom:30
  },
  containerFormTitle:{
    fontSize:14,
    color:'#000',
    fontFamily:'muli-regular',
   
     textAlign:'left',
     marginLeft:20
  },
  containerFooterFormBottom:{
    justifyContent:'center',
    alignItems:'center',
    height:hp('20%'),
  },
  containerFooterBottom:{
    width:343,
    height:60,
    backgroundColor:'#191921',
    borderRadius:73,
    
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:30,
  },
  containerFooterBottomText:{
    fontSize:16,
    color:'#fff',
    fontFamily:'Roboto-Bold',
    marginLeft:110
  },
  containerFooterBottomIcon:{
    width:32,
    height:17
},
});

export default styles;
