
import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IconVoltar from '../../assets/icons/iconvoltar.png';
import Icon1 from '../../assets/icons/icon3.png';
import Icon6 from '../../assets/icons/icon6.png';
import ImageSelfie from '../../assets/icons/icon7.png';


import styles from '../../styles/pagefoto';

const PageFoto = () => {
  const { navigate } = useNavigation();

  function hadleNavigateToCamera() {
    navigate('Camera')
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Image style={styles.containerHeaderLogo} source={IconVoltar} />
        </View>

        <View style={styles.containerBody}>
         <Image style={styles.containerBodyIcon} source={Icon1} />
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
                <Image style={styles.containerFooterBottomIcon} source={Icon6} />
              </TouchableOpacity>
      </View>
    </>
  );
};

export default PageFoto;
