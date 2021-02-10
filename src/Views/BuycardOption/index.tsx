
import React,{useState} from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../styles/buycardoption';
import logo from '../../assets/logoblack.png';
import DropDownPicker from 'react-native-dropdown-picker';


const BuycardOption = () => {
  const { navigate } = useNavigation();
  const [ country ,  Country] = useState();
  const navigation = useNavigation();

  function hadleNavigateToNotification() {
    navigate('Notification')
  }

  function hadleNavigateToBuycardPagaments() {
    navigate('BuycardPagaments')
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
           </View>
           <View style={styles.containerFormRow}>
             <View style={styles.containerFormInput1}>
               <View style={styles.containerFormInputIcon}>
                     <Text style={styles.containerFormInputIconText}>USD</Text>
               </View>
               <TextInput style={styles.containerFormInput1Title} placeholder="$ 1.000,00" placeholderTextColor="#fff" />
             </View>
            <Text style={styles.containerFormCenterTitle}>Selecione o número de parcelas em Real (BRL)</Text>
            <View>
            <DropDownPicker
    items={[
        {label: '1x R$ 6.000,78', value: '1x', icon: () => <Icon name="circle" size={18} color="#666666" />},
        {label: '2x R$ 3.000,39', value: '2x', icon: () => <Icon name="circle" size={18} color="#666666" />},
        {label: '3x R$ 2.000,26', value: '3x', icon: () => <Icon name="circle" size={18} color="#666666" />},
        {label: '4x R$ 1.500,19', value: '4x', icon: () => <Icon name="circle" size={18} color="#666666" />},
        {label: '5x R$ 6.000,78', value: '5x', icon: () => <Icon name="circle" size={18} color="#666666" />},
        {label: '6x R$ 6.000,78', value: '6x', icon: () => <Icon name="circle" size={18} color="#666666" />},
    ]}
    placeholder="Parcelas"
    placeholderStyle={{
      color:'#4D4D4D',
      fontFamily:'muli-regular'
    }}
    labelStyle={{
      color:'#020202',
      fontFamily:'Roboto-Regular',
      fontSize:15
    }}
    activeLabelStyle={{
      color:'#020202',
      fontFamily:'Roboto-Bold',
      fontSize:15
    }}
    dropDownStyle={{
      backgroundColor:'#f2f2f2',
      borderBottomWidth:1,
      borderBottomColor:'#4d4d4d',
    }}
    defaultValue={country}
    containerStyle={{height: 60,width:370, marginTop:20}}
    style={{
      backgroundColor:'#f2f2f2',
      borderBottomRightRadius:0,
      borderBottomLeftRadius:0,
      borderBottomWidth:1,
      borderBottomColor:'#4d4d4d',
      borderColor:'#f2f2f2',
      borderTopLeftRadius:13,
      borderTopRightRadius:13
    }}
    itemStyle={{
        justifyContent: 'flex-start',
        backgroundColor:'#f2f2f2'
    }}
    onChangeItem={item => ({
      country: item // an array of the selected items
    })}
/>
            </View>
           </View>
         </View>

      </View>
      <View style={styles.footer}>
      <TouchableOpacity onPress={hadleNavigateToBuycardPagaments} style={styles.footerBottom}>
            <Text style={styles.footerBottomText}>Continuar para o pagamento</Text>
            </TouchableOpacity>
      </View>
    </>
  );
};

export default BuycardOption;
