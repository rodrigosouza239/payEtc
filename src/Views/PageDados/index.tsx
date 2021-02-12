
import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image, } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'


import styles from '../../styles/pagedados';

const PageDados = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
        <TouchableOpacity onPress={navigation.goBack} >
          <Icon name="chevron-left" color="#000000" size={30} />
        </TouchableOpacity>
        </View>

        <View style={styles.containerBody}>
        <Icon name="circle" color="#1A1A1A" size={30} />
          <Text style={styles.containerBodyTitle}>Informe seus dados</Text>
        </View>
        <View style={styles.containerForm}>
            <TextInput style={styles.containerFormInput} placeholder="Nome" placeholderTextColor="#4D4D4D" />
            <TextInput style={styles.containerFormInput} placeholder="CPF" placeholderTextColor="#4D4D4D" />
            <TextInput style={styles.containerFormInput} placeholder="Email" placeholderTextColor="#4D4D4D" />
            <TextInput style={styles.containerFormInput} placeholder="Celular" placeholderTextColor="#4D4D4D" />
            <TextInput style={styles.containerFormInput} secureTextEntry placeholder="Senha" placeholderTextColor="#4D4D4D" />
            <TextInput style={styles.containerFormInput} secureTextEntry  placeholder="Confirme a senha" placeholderTextColor="#4D4D4D" />
        </View>
        <View style={styles.footer}>
      <TouchableOpacity style={styles.containerFormBottom}>
                <Text style={styles.containerFormBodyBottomText}>Avançar</Text>
              </TouchableOpacity>
      </View>
      </View>
    </>
  );
};

export default PageDados;
