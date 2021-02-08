
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
  containerHeaderLogo:{
       width:18,
       height:25
  },
  containerBody:{
    position:'absolute',
    marginTop:100,
    paddingLeft:20,
  },
  containerBodyTitle:{
    fontSize:36,
    color:'#000',
    fontFamily:'muli-extrabold',
    marginBottom:20
  },
  containerBodyLabel:{
    fontSize:18,
    color:'#4D4D4D',
    fontFamily:'muli-regular',
    marginBottom:10,
  },
  containerBodyLabelBold:{
    fontSize:18,
    color:'#4D4D4D',
    fontFamily:'muli-regular',
    marginBottom:10,
    paddingLeft:10,
    fontWeight:'700'
  },
  containerBodyText:{
    fontSize:18,
    color:'#4D4D4D',
    fontFamily:'muli-regular',
    marginBottom:10,
    maxWidth:330
  },
  containerBodyForm:{
    flexDirection:'row'
  },
  containerForm:{
    marginTop:20
  },
  containerFormBottom:{
     justifyContent:'flex-start',
     alignItems:'center',
     flexDirection:'row',

     marginBottom:40
  },
  containerFormTitle:{
    fontSize:16,
    color:'#000',
    fontFamily:'muli-regular',
   
     textAlign:'left',
     marginLeft:20
  },
  containerFooterFormBottom:{
    position:'absolute',
    marginTop:370,
  },
  containerFooterBottom:{
    width:343,
    height:60,
    backgroundColor:'#191921',
    borderRadius:73,
    
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    marginBottom:10,
    paddingHorizontal:30
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
