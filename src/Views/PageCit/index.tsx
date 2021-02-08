
import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image, } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


import styles from '../../styles/pagecity';

const PageCit = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
        <TouchableOpacity>
          <Icon name="chevron-left" color="#000000" size={30} />
        </TouchableOpacity>
        </View>

        <View style={styles.containerBody}>
        <Icon name="triangle" color="#1A1A1A" size={30} />
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
