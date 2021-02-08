
import React from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../styles/notification';

import Icon1 from '../../assets/icons/icon10.png';

const Notification = () => {
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
           <Text style={styles.containerHeaderFormText}>Notificações</Text>
           <Icon name="bell" onPress={hadleNavigateToNotification} size={23} color="#020202" />
         </View>


         <View style={styles.containerForm}>
            <View style={styles.containerFormBody}>
              <Text style={styles.containerFormBodyText}>Notificações</Text>
            </View>
         </View>

      </View>
    </>
  );
};

export default Notification;
