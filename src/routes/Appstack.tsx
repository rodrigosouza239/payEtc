import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//import pages/components mobile



//import Pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import MeusDados from '../pages/MeusDados';

//import views
import PageDados from '../Views/PageDados';
import PageCit from '../Views/PageCit';
import PageFoto from '../Views/PageFoto';


//componentes 
import Camera from '../components/Camera';
import Suporte from '../pages/Suporte';
import Forget from '../pages/Forget';
import RoutesMenu from './AppStackmenu';
import Pagaments from '../pages/Pagaments';
import AddCard from '../pages/ Addcard';
import Notification from '../pages/Notification';
import Buycard from '../pages/ Buycard';
import BuycardOption from '../Views/BuycardOption';
import BuycardPagaments from '../Views/BuyCardPagaments';
import Header from '../components/Header';



const { Navigator, Screen } = createStackNavigator();


export default function Routes() {
  return (
      <NavigationContainer  >
      <Navigator   screenOptions={{ headerShown: false,  }}>
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Suporte" component={Suporte} />
      <Screen name="Forget" component={Forget} />
      <Screen name="MeusDados" component={MeusDados} />
      <Screen name="Pagaments" component={Pagaments} />
      <Screen name="AddCard" component={AddCard} />
      <Screen name="Notification" component={Notification} />
      <Screen name="BuyCard" component={Buycard} />
       {/* /page components/ */}
      <Screen options={{
          headerShown:true,
          header: () =><Header />
      }} name="Camera" component={Camera} />
      <Screen name="MenuApp" component={RoutesMenu} />
      {/* /page views/ */}
      <Screen name="PageDados" component={PageDados} />
      <Screen name="PageCit" component={PageCit} />
      <Screen name="PageFoto" component={PageFoto} />
      <Screen name="BuyCardOption" component={BuycardOption} />
      <Screen name="BuycardPagaments" component={BuycardPagaments} />
      </Navigator>
    </NavigationContainer>
  );
}