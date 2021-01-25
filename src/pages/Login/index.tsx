
import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image, Switch } from 'react-native';


import Logo from '../../assets/logoblack.png';

import styles from '../../styles/login';

const Login = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Image style={styles.containerHeaderLogo} source={Logo} />
        </View>

        <View style={styles.containerForm}>
          <Text style={styles.containerFormTitle}>Acesse</Text>
          <TextInput style={styles.containerFormInput} placeholder="E-mail ou CPF" placeholderTextColor="#4D4D4D" />
          <TextInput style={styles.containerFormInput} placeholder="Senha" placeholderTextColor="#4D4D4D" />

          <View style={styles.containerFormLembrar}>
            <Text style={styles.containerFormLembrarText}>Lembrar conta?</Text>
            <Switch style={styles.containerFormLembrarSwitch}
              trackColor={{ false: '#CCCCCC', true: '#1D83BC' }}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              ios_backgroundColor="#CCCCCC"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View style={styles.containerFormBody}>
            <Text style={styles.containerFormBodyText}>ou<Text style={styles.containerFormBodyTitle} > Cadastre-se no valePay</Text></Text>

            <TouchableOpacity style={styles.containerFormBodyBottom}>
              <Text style={styles.containerFormBodyBottomText}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.containerFormBottom}>
            <Text style={styles.containerFormBottomText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
