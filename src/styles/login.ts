
import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  containerHeader:{
      justifyContent:'flex-start',
      padding:23,
      paddingTop:44
  },
  containerHeaderLogo:{
       width:120,
       height:40
  },
  containerForm:{
    position:'absolute',
    marginTop:200,
    paddingLeft:23,
    maxWidth:340,
  },
  containerFormTitle:{
    fontSize:47,
    color:'#000',
    fontFamily:'muli-extrabold',
    marginBottom:20
  },
  containerFormInput:{
    width:343,
    height:60,

    backgroundColor:"#E6E6E6",
    borderTopLeftRadius:13,
    borderTopRightRadius:13,
    marginBottom:10,

    paddingHorizontal:10,
    fontFamily:'muli-regular',
    fontSize:15,
  },
  containerFormLembrar:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    marginTop:20
  },
  containerFormLembrarText:{
    fontSize:17,
    color:'#666666',
    fontFamily:'Roboto-Light',
    marginBottom:20
  },
  containerFormLembrarSwitch:{
     marginTop:-20,
     marginLeft:180,
  },
  containerFormBody:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
  },
  containerFormBodyText:{
    fontSize:14,
    color:'#000',
    fontFamily:'Roboto-Regular',
    marginBottom:20
  },
  containerFormBodyTitle:{
    fontSize:14,
    color:'#0071BC',
    fontFamily:'Roboto-Bold',
    marginBottom:20
  },
  containerFormBodyBottom:{
    marginHorizontal:50
  },
  containerFormBodyBottomText:{
    fontSize:14,
    color:'#666666',
    fontFamily:'Roboto-Medium',
    marginBottom:20
  },
  containerFormBottom:{
    width:343,
    height:60,
    backgroundColor:'#191921',
    borderRadius:73,

    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,

    marginTop:10,
  },
  containerFormBottomText:{
    fontSize:16,
    color:'#fff',
    fontFamily:'Roboto-Bold',
  }
});

export default styles;
