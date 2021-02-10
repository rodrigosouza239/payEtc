
import React from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../styles/buycard';

import logo from '../../assets/logoblack.png';


const Buycard = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  function hadleNavigateToNotification() {
    navigate('Notification')
  }

  function hadleNavigateToBuycardOption() {
    navigate('BuyCardOption')
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
           <Text style={styles.containerHeaderFormText}>Comprar cartão</Text>
           <Icon onPress={hadleNavigateToNotification} name="bell" size={23} color="#020202" />
         </View>
         <View style={styles.containerForm}>
           <View style={styles.containerFormCenter}>
             <Image style={styles.containerHeaderLogo} source={logo} />
            <Text style={styles.containerFormCenterTitle}>José, vamos começar? Primeiro digite o valor em dólares que gostaria de resgatar.</Text>
           </View>
           <View style={styles.containerFormRow}>
           <TextInput style={styles.containerFormInput1} placeholder="USD" placeholderTextColor="#4D4D4D" />
           </View>
           <View style={styles.containerFormCenter}>
           <TouchableOpacity onPress={hadleNavigateToBuycardOption} style={styles.footerBottom}>
          <Text style={styles.footerBottomText}>Continuar</Text>
        </TouchableOpacity>
           </View>
         </View>

      </View>
    </>
  );
};

export default Buycard;
