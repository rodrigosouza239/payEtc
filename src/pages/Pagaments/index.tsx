
import React from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../styles/pagaments';

import Icon1 from '../../assets/icons/icon10.png';

const Pagaments = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  function hadleNavigateToAddCard() {
    navigate('AddCard')
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
           <Text style={styles.containerHeaderFormText}>Pagamento</Text>
           <Icon  onPress={hadleNavigateToNotification} name="bell" size={23} color="#020202" />
         </View>


         <View style={styles.containerForm}>
           <View style={styles.containerFormLeft}>
           <Text style={styles.containerFormTitle}>Formas de pagamento</Text>
           </View>
           <View style={styles.containerFormHeader}>
                  <Image source={Icon1} style={styles.containerFormHeaderIcon} />
                 <Text style={styles.containerFormHeaderTitle1}>Nenhum cartão cadastrado ainda</Text>
               </View>
               <View style={styles.containerFormHeader}>
                 <Icon name="plus-circle" size={27}  color="#191921" />
                 <TouchableOpacity onPress={hadleNavigateToAddCard}>
                 <Text style={styles.containerFormHeaderTitle}>Adicionar cartão</Text>
                 </TouchableOpacity>
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

export default Pagaments;
