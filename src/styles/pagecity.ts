
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
    width:28,
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
  containerFormCity:{
  justifyContent:'flex-start',
  paddingLeft:17,
  },
  containerFormCityBody:{
    width:wp('98%'),
    height:hp('60%')
  },
  containerFormBodyBottomText:{
    fontSize:14,
    color:'#191921',
    fontFamily:'Roboto-Bold',
  },
  containerFormBottom:{
    width:wp('90%'),
    height:55,
    backgroundColor:'#fff',
    borderRadius:73,
    borderWidth:1,
    borderColor:'#191921',
 
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,

    marginTop:8,
  },
  containerFormInput:{
    width:wp('90%'),
    height:55,

    backgroundColor:"#E6E6E6",
    borderTopLeftRadius:13,
    borderTopRightRadius:13,
    marginBottom:20,

    paddingHorizontal:10,
    fontFamily:'muli-regular',
    fontSize:15,
  },
  containerFormInput1:{
    width:wp('40%'),
    height:55,

    backgroundColor:"#E6E6E6",
    borderTopLeftRadius:13,
    borderTopRightRadius:13,
    marginBottom:20,
    paddingHorizontal:10,
    fontFamily:'muli-regular',
    marginHorizontal:5,
    fontSize:15,
  },
  containerFormInputCity:{
    width:wp('40%'),
    height:55,
    backgroundColor:"#E6E6E6",
    borderTopLeftRadius:13,
    borderTopRightRadius:13,
    marginBottom:20,
    paddingHorizontal:10,
    fontFamily:'muli-regular',
    fontSize:15,
  },
  containerFormCityNumero:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:wp('90%'),
  },
  footer:{
    justifyContent:'center',
    alignItems:'center',
    height:hp('8%'),
    backgroundColor:'#fff',
  }
});

export default styles;
