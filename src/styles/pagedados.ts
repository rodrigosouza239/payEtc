
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
   paddingLeft:30,
   marginBottom:60,
   height:hp('5%')
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
    alignItems:'center',
    height:hp('50%')
  },
  containerFormBodyBottomText:{
    fontSize:14,
    color:'#191921',
    fontFamily:'Roboto-Bold',
  },
  containerFormBottom:{
    width:338,
    height:50,
    backgroundColor:'#fff',
    borderRadius:73,
    borderWidth:1,
    borderColor:'#191921',
 
    justifyContent:'center',
    alignItems:'center',
    marginBottom:5,

    marginTop:30,
  },
  containerFormInput:{
    width:333,
    height:50,

    backgroundColor:"#E6E6E6",
    borderTopLeftRadius:13,
    borderTopRightRadius:13,
    marginBottom:15,

    paddingHorizontal:10,
    fontFamily:'muli-regular',
    fontSize:15,
  },
  footer:{
    justifyContent:'center', alignItems:'center',
    height:hp('15%')
  }
});

export default styles;
