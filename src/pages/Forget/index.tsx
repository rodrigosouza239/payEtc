
import React from 'react';
import { StatusBar, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../styles/forget';
import { TextInput } from 'react-native-gesture-handler';


const Forget = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  function hadleNavigateToLogin() {
    navigate('Login')
  }

  function hadleNavigateToRegister() {
    navigate('Register')
  } 
    return (
    <>
    <View style={styles.container}>
    <View style={styles.containerHeader}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="chevron-left" color="#000000" size={30} />
        </TouchableOpacity>
        </View>

        <View style={styles.containerBody}>
        <Icon name="lock" color="#1A1A1A" size={30} />
          <Text style={styles.containerBodyTitle}>Recupere sua senha</Text>
        </View>

        <Text style={styles.containerBodyText}>Caso tenha esquecido sua senha, digite o CPF que você utilizou para se cadastrar no payEtc.</Text>
        <View style={styles.containerFormCenter}>
        <TextInput style={styles.containerFormInput} placeholder="CPF"  placeholderTextColor="#4D4D4D" />
        <TouchableOpacity  style={styles.containerFormBottom}>
            <Text style={styles.containerFormBottomText}>	Criar nova senha</Text>
          </TouchableOpacity>
        </View>
    </View>
    </>
  );
};

export default Forget;
