import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screen/Login/Login';
import Register from './Screen/Login/Register';
import Tab from './Screen/Main_Screen/Home';
import Chapter from './Screen/Sub_Screen/Chapter';
import Content from './Screen/Sub_Screen/Content';
import SubWorkshop from './Screen/Sub_Screen/SubWorkshop';


const Stack = createStackNavigator();
 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Chapter" component={Chapter}/>
        <Stack.Screen name="Content" component={Content}/>
        <Stack.Screen name="SubWorkshop" component={SubWorkshop}/>

        <Stack.Screen name="Tab" component={Tab}/>
      </Stack.Navigator>
      {/* <Tab/> */}

    </NavigationContainer>

     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
