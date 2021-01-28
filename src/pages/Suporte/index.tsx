
import React from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import Logo from '../../assets/logoblack.png';

import styles from '../../styles/suporte';

const Suporte = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  function hadleNavigateToWelcome() {
    navigate('Welcome')
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
         <View style={styles.containerHeader}>
             <TouchableOpacity onPress={navigation.goBack}>
             <Icon name="arrow-left" size={23} color="#020202" />
             </TouchableOpacity>
         </View>
         <View style={styles.containerHeaderForm}>
           <Text style={styles.containerHeaderFormText}>Suporte</Text>
           <Icon name="bell" size={23} color="#020202" />
         </View>

         <View>

         </View>

         <View style={styles.containerForm}>
           <Text style={styles.containerFormTitle}>Precisa de ajuda?</Text>
           <Text style={styles.containerFormText}>Está perdido? Não sabe como usar? Sinta-se a vintade para nos contatar</Text>
         </View>

         <View style={styles.containerFormBottoms}>
           <TouchableOpacity style={styles.containerFormBottomsForms}>
             <Text style={styles.containerFormBottomsFormsTitle}>Contate-nos</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.containerFormBottomsForms1}>
             <Text style={styles.containerFormBottomsFormsTitle1}>Perguntas Frequentes</Text>
           </TouchableOpacity>
         </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Política de Privacidade</Text>
        <Icon name="arrow-right" size={16} color="#020202" />
      </View>
    </>
  );
};

export default Suporte;
