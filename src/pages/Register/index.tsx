
import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IconVoltar from '../../assets/icons/iconvoltar.png';

import Icon1 from '../../assets/icons/icon1.png';
import Icon2 from '../../assets/icons/icon2.png';
import Icon3 from '../../assets/icons/icon3.png';
import Icon4 from '../../assets/icons/icon4.png';
import Icon6 from '../../assets/icons/icon6.png';

import IconArrow from '../../assets/icons/iconarrow.png'

import styles from '../../styles/register';

const Register = () => {
  const { navigate } = useNavigation();

  function hadleNavigateToPageDados() {
    navigate('PageFoto')
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Image style={styles.containerHeaderLogo} source={IconVoltar} />
        </View>

        <View style={styles.containerBody}>
          <Text style={styles.containerBodyTitle}>Cadastro</Text>
          <View style={styles.containerBodyForm}>
          <Text style={styles.containerBodyLabel}>Comece sua experiência</Text>
          <Text style={styles.containerBodyLabelBold} >payEtc.</Text>
          </View>
          <Text style={styles.containerBodyText}>Para continuar com o seu cadastro, precisamos de algumas informações.</Text>


          <View style={styles.containerForm}>
               <TouchableOpacity style={styles.containerFormBottom}>
               <Image style={styles.containerFormIcon1} source={Icon1} />
                 <Text style={styles.containerFormTitle}>Informe seus dados</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.containerFormBottom}>
               <Image style={styles.containerFormIcons} source={Icon2} />
                 <Text style={styles.containerFormTitle}>Informe seu endereço</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.containerFormBottom}>
               <Image style={styles.containerFormIcons} source={Icon3} />
                 <Text style={styles.containerFormTitle}>Tire uma selfie</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.containerFormBottom}>
               <Image style={styles.containerFormIcons} source={Icon4} />
                 <Text style={styles.containerFormTitle}>Envie fotos dos seus documentos</Text>
               </TouchableOpacity>

               <View style={styles.containerFooterFormBottom}>
               <TouchableOpacity onPress={hadleNavigateToPageDados} style={styles.containerFooterBottom}>
               <Text style={styles.containerFooterBottomText}>Começar</Text>
               <Image style={styles.containerFooterBottomIcon} source={Icon6} />
               </TouchableOpacity>
               </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Register;
