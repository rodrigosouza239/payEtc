
import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';


import styles from '../../styles/register';

const Register = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  function hadleNavigateToPageDados() {
    navigate('PageDados')
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
          <Text style={styles.containerBodyTitle}>Cadastro</Text>
          <View style={styles.containerBodyForm}>
          <Text style={styles.containerBodyLabel}>Comece sua experiência</Text>
          <Text style={styles.containerBodyLabelBold} >valePay</Text>
          </View>
          <Text style={styles.containerBodyText}>Para continuar com o seu cadastro, precisamos de algumas informações.</Text>
</View>

<View style={{justifyContent:'center', alignItems:'center'}}>
<View style={styles.containerForm}>
               <TouchableOpacity style={styles.containerFormBottom}>
                <Icon name="circle" color="#1A1A1A" size={30} />
                 <Text style={styles.containerFormTitle}>Informe seus dados</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.containerFormBottom}>
               <Icon name="triangle" color="#1A1A1A" size={30} />
                 <Text style={styles.containerFormTitle}>Informe seu endereço</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.containerFormBottom}>
                <Icon name="square" color="#1A1A1A" size={30} />
                <Text style={styles.containerFormTitle}>Tire uma selfie</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.containerFormBottom}>
               <Icon name="hexagon" color="#1A1A1A" size={30} />
                 <Text style={styles.containerFormTitle}>Envie fotos dos seus documentos</Text>
               </TouchableOpacity>
          </View>
</View>
        </View>
        <View style={styles.containerFooterFormBottom}>
               <TouchableOpacity onPress={hadleNavigateToPageDados} style={styles.containerFooterBottom}>
               <Text style={styles.containerFooterBottomText}>Começar</Text>
               <Icon name="arrow-right" color="#fff" size={24} />
               </TouchableOpacity>
               </View>
    </>
  );
};

export default Register;
