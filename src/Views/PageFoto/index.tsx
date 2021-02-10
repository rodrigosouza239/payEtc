
import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import ImageSelfie from '../../assets/03_03.png';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../../styles/pagefoto';

const PageFoto = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  function hadleNavigateToCamera() {
    navigate('Camera')
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="chevron-left" color="#000000" size={30} />
        </TouchableOpacity>
        </View>

        <View style={styles.containerBody}>
        <Icon name="square" color="#1A1A1A" size={30} />
          <Text style={styles.containerBodyTitle}>Tire uma selfie</Text>
        </View>

        <View style={styles.containerSelfie}> 
         <Image style={styles.containerSelfieIcon} source={ImageSelfie} />
        </View>

           <Text style={styles.containerSelfieTitle}>Para tirar uma </Text>
           <Text style={styles.containerSelfieTitle}>selfie maneira lembre-se de:</Text>
           <Text style={styles.containerSelfieDescrip}>Verificar se a foto está nítida e se o ambiente possui luminosidade.</Text>  

      </View>
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Não se preocupe, as fotos são 100% privadas</Text>
      <TouchableOpacity onPress={hadleNavigateToCamera} style={styles.containerFormBottom}>
                <Text style={styles.containerFormBodyBottomText}>Tirar selfie</Text>
                <Icon name="arrow-right" color="#fff" size={24} />
              </TouchableOpacity>
      </View>
    </>
  );
};

export default PageFoto;
