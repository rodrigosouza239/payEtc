
import React from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../styles/meusdados';

const MeusDados = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  function hadleNavigateToWelcome() {
    navigate('Welcome')
  }

  function hadleNavigateToNotification() {
    navigate('Notification')
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
         <View style={styles.containerHeader}>
             <TouchableOpacity onPress={navigation.goBack}>
             <Icon name="chevron-left" size={30} color="#020202" />
             </TouchableOpacity>
         </View>
         <View style={styles.containerHeaderForm}>
           <Text style={styles.containerHeaderFormText}>Meus Dados</Text>
           <Icon name="bell"  onPress={hadleNavigateToNotification} size={23} color="#020202" />
         </View>


         <View style={styles.containerForm}>
          <View style={styles.containerFormBotoms}>
            <Text style={styles.containerFormBotomsTitle}>Cadastro</Text>
            <TouchableOpacity>
              <Text style={styles.containerFormBotomsBottomTitle}>EDITAR</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerFormInputs}>
              <View style={styles.containerFormInputsFormTop}>
                <Text  style={styles.containerFormInputsFormTitle}>José Santos</Text>
              </View>
              <View style={styles.containerFormInputsFormRow}>
                <Text style={styles.containerFormInputsFormTitle}>CPF</Text>
                <Text style={styles.containerFormInputsFormTitleLabel}>344.818.370-98</Text>
              </View>
              <View style={styles.containerFormInputsFormRow}>
                <Text style={styles.containerFormInputsFormTitle}>Tel</Text>
                <Text style={styles.containerFormInputsFormTitleLabel}>41991993005</Text>
              </View>
              <View style={styles.containerFormInputsFormFooter}>
                <Text style={styles.containerFormInputsFormTitleLabel}>17/12/1993</Text>
              </View>
          </View>
         </View>

         <View style={styles.containerFormBotoms}>
            <Text style={styles.containerFormBotomsTitle}>Cadastro</Text>
            <TouchableOpacity>
              <Text style={styles.containerFormBotomsBottomTitle}>EDITAR</Text>
            </TouchableOpacity>
          </View>

         <View style={styles.containerFormBottomsFooteer1}>
           <View style={styles.containerFormBottomsFooteer}>
           <Text style={styles.containerFormBottomsFooteerTitle}>Rua América Latina, 857</Text>
           <Text style={styles.containerFormBottomsFooteerLabel}>Cidade Industrial, Curitiba, 80411-025</Text>
           </View>
         </View>

      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Política de Privacidade</Text>
        <Icon name="arrow-right" size={16} color="#020202" />
      </View>
    </>
  );
};

export default MeusDados;
