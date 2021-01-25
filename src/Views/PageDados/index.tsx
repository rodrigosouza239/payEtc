
import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image, } from 'react-native';


import IconVoltar from '../../assets/icons/iconvoltar.png';

import Icon1 from '../../assets/icons/icon1.png';


import styles from '../../styles/pagedados';

const PageDados = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Image style={styles.containerHeaderLogo} source={IconVoltar} />
        </View>

        <View style={styles.containerBody}>
         <Image style={styles.containerBodyIcon} source={Icon1} />
          <Text style={styles.containerBodyTitle}>Informe seus dados</Text>
        </View>
        <View style={styles.containerForm}>
            <TextInput style={styles.containerFormInput} placeholder="Nome" placeholderTextColor="#4D4D4D" />
            <TextInput style={styles.containerFormInput} placeholder="CPF" placeholderTextColor="#4D4D4D" />
            <TextInput style={styles.containerFormInput} placeholder="Email" placeholderTextColor="#4D4D4D" />
            <TextInput style={styles.containerFormInput} placeholder="Celular" placeholderTextColor="#4D4D4D" />
            <TextInput style={styles.containerFormInput} placeholder="Senha" placeholderTextColor="#4D4D4D" />
            <TextInput style={styles.containerFormInput} placeholder="Confirme a senha" placeholderTextColor="#4D4D4D" />

              <TouchableOpacity style={styles.containerFormBottom}>
                <Text style={styles.containerFormBodyBottomText}>Avançar</Text>
              </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default PageDados;
