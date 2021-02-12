
import React,{useState} from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../styles/buycardpagaments';
import logo from '../../assets/logoblack.png';

import BackgroudInputs from '../../assets/1_03.png'


const BuycardPagaments = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  function hadleNavigateToNotification() {
    navigate('Notification')
  }

  function hadleNavigateToAddCard() {
    navigate('AddCard')
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
         <View style={styles.containerFormCenter}>
             <Image style={styles.containerHeaderLogo} source={logo} />
           </View>
           <ImageBackground source={BackgroudInputs} resizeMode='cover'  style={styles.containerFormRow}>
             <View style={styles.containerFormInput1}>
               <View style={styles.containerFormInputIcon}>
                     <Text style={styles.containerFormInputIconText}>USD</Text>
               </View>
               <Text style={styles.containerFormInput1Title}>$ 1.000,00</Text>
             </View>

             <View style={styles.containerFormInput1}>
               <View style={styles.containerFormInputIcon}>
                     <Text style={styles.containerFormInputIconText}>BRL</Text>
               </View>
               <Text style={styles.containerFormInput1Title}>R$ 6.000,78</Text>
             </View>

             <View style={styles.containerFormInput1}>
               <View style={styles.containerFormInputIcon}>
                     <Text style={styles.containerFormInputIconText}>Parcelas</Text>
               </View>
               <Text style={styles.containerFormInput1Title}>2x 3.000,39</Text>
             </View>

             <View style={styles.containerFormInputCotation}>
               <Text style={styles.containerFormInputCotationTITLE}>COTAÇÃO: <Text  style={styles.containerFormInputCotationTITLEBold}>R$ 5,74</Text></Text>
               <Text style={styles.containerFormInputCotationTITLELeft}>CUSTO OP:3%</Text>
             </View>
           </ImageBackground>
           <Text style={styles.containerFormCenterTitle}>Selecione a forma de pagamento:</Text>
           <View style={styles.containerFormAdd}>
             <TouchableOpacity onPress={hadleNavigateToAddCard}  style={styles.containerFormAddBottom}  >
             <Icon name="plus-circle" color="#191921" size={23} />
             <Text style={styles.containerFormAddTitle}>Adicionar pagamento</Text>
             </TouchableOpacity>
           </View>

           <View style={styles.footer}>
      <TouchableOpacity style={styles.footerBottom}>
            <Text style={styles.footerBottomText}>Continuar para o pagamento</Text>
            </TouchableOpacity>
      </View>
  
      </View>
    </>
  );
};

export default BuycardPagaments;
