
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import {DrawerActions, useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';

import IconPay from '../assets/icons/iconpay.png';



const CustomMenu = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  function hadleNavigatePagaments(){
    navigate('Pagaments');
  }

  function hadleNavigateSuporte() {
    navigate('Suporte')
  }

  function hadleNavigateMeusDados(){
    navigate('MeusDados');
  }

    return (
      <>
      <View style={styles.container}>
      <TouchableOpacity style={styles.containerBottom} onPress={() => navigation.dispatch(DrawerActions.closeDrawer)}>
             <Icon name="x" size={23} color="#ffff" />
             </TouchableOpacity>

        <View style={styles.containerMenuForm}>
          <View style={styles.containerMenu}>
          <Text style={styles.containerMenuTitle}>Jóse Silvo</Text>
          <TouchableOpacity onPress={hadleNavigateMeusDados} style={styles.containerMenuBottom}>
          <Icon name="alert-circle" size={23} color="#191921" />
          <Text style={styles.containerMenuLabel}>EDITAR MEUS DADOS</Text>
          </TouchableOpacity>
          </View>
        </View>

         <TouchableOpacity onPress={hadleNavigatePagaments}>
         <Text style={styles.containerMenuText}>Pagamento</Text>
         </TouchableOpacity>

        <TouchableOpacity onPress={hadleNavigateSuporte}>
        <Text style={styles.containerMenuText}>Suporte</Text>
        </TouchableOpacity>
        
        <Text style={styles.containerMenuText}>Sair</Text>
        </View>

        <View style={styles.footer}>
            <Image style={styles.footerIcon} source={IconPay} />
        </View>
      </>
    );
}


const styles = StyleSheet.create({
  container: {
    maxWidth:380,
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
    flex:1,
    backgroundColor:'#191921'
  },
  containerBottom:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingTop:80,
    marginRight:40
  },
  containerMenuForm:{
   marginLeft:-20
  },
  containerMenu:{
    backgroundColor:'#fff',
    width:320,
    height:80,
    marginTop:60,
    borderTopRightRadius:21,
    borderBottomRightRadius:21,
    marginBottom:60,
  },
  containerMenuTitle:{
    fontFamily:'muli-bold',
    color:'#191921',
    fontSize:26,
    marginLeft:30,
    paddingTop:10
  },
  containerMenuLabel:{
    fontFamily:'muli-regular',
    color:'#191921',
    fontSize:12,
  },
  containerMenuText:{
    fontFamily:'muli-bold',
    color:'#ffff',
    fontSize:23,
    marginLeft:30,
    marginBottom:30,
  },
  footer:{

  },
  footerIcon:{
    width:33,
    height:40
  },
  containerMenuBottom:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-evenly',
  paddingHorizontal:20,
  marginRight:100
  }
  
});

export default CustomMenu;
