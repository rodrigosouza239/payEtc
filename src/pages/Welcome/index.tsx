
import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image, ImageBackground,Button} from 'react-native';
import {DrawerActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'


import Logo from '../../assets/icons/iconmenu.png';
import Logo1 from '../../assets/logo.png';
import Banner from '../../assets/icons/bannerhome.png';
import Iconmoney from '../../assets/icons/iconmoney.png';
import Iconinfo from '../../assets/icons/icon9.png';
import styles from '../../styles/welcome';
import RoutesMenu from '../../routes/AppStackmenu';

const Welcome = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  function hadleNavigateToMenu() {
    navigate('MenuApp')
  }

  function hadleNavigateToNotification() {
    navigate('Notification')
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer)}>
          <Image style={styles.containerHeaderLogo} source={Logo} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerbody}>
          <Text style={styles.containerbodyText}>Ola,João</Text>
          <Icon name="bell" onPress={hadleNavigateToNotification} size={23} color="#020202" />
        </View>
         <View style={styles.containerForm1} >
         <ImageBackground  source={Banner} resizeMode="cover" style={styles.containerForm}>
                <View style={styles.containerFormLeft}>
                  <Image style={styles.containerFormLeftLogo} source={Logo1} />
                  <Text style={styles.containerFormLeftTitle} >Viagens sem dor de cabeça ;)</Text>
                </View>
   
                 <View style={styles.containerFormBottomCenter}>
                 <TouchableOpacity style={styles.containerFormBottom}>
                   <Image source={Iconmoney} style={styles.containerFormBottomIcon} />
                  <Text style={styles.containerFormBottomText}>COMPRAR CARTÃO</Text>
                </TouchableOpacity>
                 </View>

                 <View  style={styles.containerPagaments} >
                   <Text  style={styles.containerPagamentsText}>Formas de pagamento</Text>

                   <View style={styles.containerPagamentsForm}>

                     <View style={styles.containerPagamentsFormLeft}>
                       <View style={styles.containerPagamentsFormLeftIcon}></View>
                     <Text style={styles.containerPagamentsFormLeftText}>Nenhum cartão cadastrado ainda</Text>
                     </View>
                     <View style={styles.containerPagamentsFormBottomContainer}>
                     <TouchableOpacity style={styles.containerPagamentsFormBottomContainerBottom}>
                           <Image  style={styles.containerPagamentsFormBottomContainerBottomIcon} source={Iconinfo} />
                           <Text style={styles.containerPagamentsFormBottomContainerBottomText} >Toque para gerenciar</Text>
                         </TouchableOpacity>
                     </View>
                      
                   </View>

                   <View style={styles.containerHistory}>
                     <Text style={styles.containerHistoryTitle}>Histórico</Text>
                   </View>
                 </View>
         </ImageBackground>
         </View>
      </View>
    </>
  );
};

export default Welcome;
