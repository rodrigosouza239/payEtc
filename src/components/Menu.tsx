
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const Menu = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  function hadleNavigateSuporte() {
    navigate('Suporte')
  }

    return (
      <>
      <View style={styles.container}>
      <TouchableOpacity style={styles.containerBottom} onPress={navigation.goBack}>
             <Icon name="x" size={23} color="#ffff" />
             </TouchableOpacity>
        <View style={styles.containerMenu}>
          <Text style={styles.containerMenuTitle}>Jóse Silvo</Text>
          <Text style={styles.containerMenuLabel}>EDITAR MEUS DADOS</Text>
        </View>
        <Text style={styles.containerMenuText}>Pagamento</Text>
        <TouchableOpacity onPress={hadleNavigateSuporte}>
        <Text style={styles.containerMenuText}>Suporte</Text>
        </TouchableOpacity>
        <Text style={styles.containerMenuText}>Sair</Text>
        </View>
      </>
    );
}


const styles = StyleSheet.create({
  container: {
    maxWidth:380,
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
    flex:1,
    backgroundColor:'#191921'
  },
  containerBottom:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingTop:80,
    marginRight:40
  },
  containerMenu:{
    backgroundColor:'#fff',
    width:320,
    height:80,
    marginTop:60,
    borderTopRightRadius:21,
    borderBottomRightRadius:21,
    marginBottom:60
  },
  containerMenuTitle:{
    fontFamily:'muli-bold',
    color:'#191921',
    fontSize:26,
    marginLeft:30,
    paddingTop:10
  },
  containerMenuLabel:{
    fontFamily:'muli-regular',
    color:'#191921',
    fontSize:12,
    marginLeft:30,
  },
  containerMenuText:{
    fontFamily:'muli-bold',
    color:'#ffff',
    fontSize:23,
    marginLeft:30,
    marginBottom:30,
  }
  
});

export default Menu;
