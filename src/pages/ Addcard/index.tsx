
import React from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../styles/addcard';

import Icon1 from '../../assets/icons/icon10.png';

const AddCard = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

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
           <Text style={styles.containerHeaderFormText}>Adicionar cartão</Text>
           <Icon onPress={hadleNavigateToNotification} name="bell" size={23} color="#020202" />
         </View>


         <View style={styles.containerForm}>
           <View style={styles.containerFormCenter}>
           <TextInput style={styles.containerFormInput} placeholder="Número do cartão" placeholderTextColor="#4D4D4D" />
           </View>
           <View style={styles.containerFormRow}>
           <TextInput style={styles.containerFormInput1} placeholder="Data de expiração" placeholderTextColor="#4D4D4D" />
           <TextInput style={styles.containerFormInput2} placeholder="CVV" placeholderTextColor="#4D4D4D" />
           <Icon style={styles.containerFormInputIcon} name="help-circle" color="#008EAC" size={23} />
           </View>
           <View style={styles.containerFormCenter}>
           <TextInput style={styles.containerFormInput} placeholder="Nome" placeholderTextColor="#4D4D4D" />
           </View>
         </View>

      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerBottom}>
          <Text style={styles.footerBottomText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddCard;
