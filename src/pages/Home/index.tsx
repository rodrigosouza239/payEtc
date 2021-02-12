
import React from 'react';
import { StatusBar, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import Backgroud from '../../assets/backgroudhome.png';
import Logo from '../../assets/logo.png';
import IconLogo from '../../assets/icons/iconlogo.png';
import styles from '../../styles/home';


const Home = () => {
  const { navigate } = useNavigation();

  function hadleNavigateToLogin() {
    navigate('Login')
  }

  function hadleNavigateToRegister() {
    navigate('Register')
  } 
    return (
    <>
      <ImageBackground style={styles.container} source={Backgroud} resizeMode="cover">
        <View style={styles.containerHeader}>
          <Image style={styles.containerHeaderLogo} source={Logo} />
        </View>




        <View style={styles.containerFooter}>

          <Text style={styles.containerBodyText}>A maneira mais segura do seu dinheiro viajar pelo mundo.</Text>
  
  <View style={styles.containerFooterResponsi}>
  <TouchableOpacity onPress={hadleNavigateToLogin} style={styles.containerFooterBottomBorder}>
            <Text style={styles.containerFooterBottomTextBorder}>Já tem cadastro?Acesse</Text>
            <Icon name="arrow-right" color="#fff" size={23} />
          </TouchableOpacity>

          <TouchableOpacity onPress={hadleNavigateToRegister} style={styles.containerFooterBottom}>
            <Text style={styles.containerFooterBottomText}>Cadastre-se no payEtc</Text>
            <Image style={styles.containerFooterBottomIcon} source={IconLogo} />
          </TouchableOpacity>
  </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Home;
