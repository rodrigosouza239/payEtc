
import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image, } from 'react-native';


import IconVoltar from '../../assets/icons/iconvoltar.png';

import Icon1 from '../../assets/icons/icon2.png';


import styles from '../../styles/pagecity';

const PageCit = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Image style={styles.containerHeaderLogo} source={IconVoltar} />
        </View>

        <View style={styles.containerBody}>
         <Image style={styles.containerBodyIcon} source={Icon1} />
          <Text style={styles.containerBodyTitle}>Informe seu endereço</Text>
        </View>
        <View style={styles.containerFormCity}>
          <TextInput style={styles.containerFormInputCity} placeholder="CEP" placeholderTextColor="#4D4D4D" />
          </View>
        <View style={styles.containerForm}>
            <TextInput style={styles.containerFormInput} placeholder="Cidade" placeholderTextColor="#4D4D4D" />
            <TextInput style={styles.containerFormInput} placeholder="Estado" placeholderTextColor="#4D4D4D" />
            <TextInput style={styles.containerFormInput} placeholder="Endereço" placeholderTextColor="#4D4D4D" />
            <View style={styles.containerFormCityNumero}>
            <TextInput style={styles.containerFormInput1} placeholder="Número" placeholderTextColor="#4D4D4D" />
            <TextInput style={styles.containerFormInput1} placeholder="Complemento" placeholderTextColor="#4D4D4D" />
            </View>
        </View>
      </View>
      <View style={styles.footer}>
      <TouchableOpacity style={styles.containerFormBottom}>
                <Text style={styles.containerFormBodyBottomText}>Avançar</Text>
              </TouchableOpacity>
      </View>
    </>
  );
};

export default PageCit;
