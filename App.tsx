
import React from 'react';
import Routes from './src/routes/Appstack';

if(__DEV__) {
  import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configurado'))
}


const App = () => {
  return (
      <Routes />
  );
};


export default App;
