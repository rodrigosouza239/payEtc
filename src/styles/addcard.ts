
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
  },
  containerFormInput:{
    backgroundColor:'#E6E6E6',
    width:wp('90%'),
    height:55,

    fontFamily:'muli-bold',
    fontSize:14,
    paddingHorizontal:20,

    borderTopRightRadius:13,
    borderTopLeftRadius:13
  },
  containerFormRow:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
      width:wp('90%'),
  },
  containerFormCenter:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
  },
  containerFormInput1:{
    backgroundColor:'#E6E6E6',
    width:wp('42%'),
    height:55,
    fontFamily:'muli-bold',
    fontSize:14,
    paddingHorizontal:13,
    borderTopRightRadius:13,
    borderTopLeftRadius:13,
  },
  containerFormInput2:{
    backgroundColor:'#E6E6E6',
    width:wp('23%'),
    height:55,
    fontFamily:'muli-bold',
    fontSize:14,
    paddingHorizontal:20,
    borderTopRightRadius:13,
    borderTopLeftRadius:13,
    marginLeft:5,
    marginHorizontal:10
  },
  containerFormInputIcon:{
    marginLeft:20
  },
  footer:{
    justifyContent:'center',
    alignItems:'center',
    height:300
  },
  footerBottom:{
    
    width:wp('90%'),
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
