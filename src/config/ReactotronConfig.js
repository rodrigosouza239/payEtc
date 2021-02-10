import Reactotron from 'reactotron-react-native'

Reactotron
  .configure({
    name: "React Native",
    host:'192.168.1.5',
    port:9090
  })
  .useReactNative()
  .connect();