import * as React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Footer from './components/_layout/Footer';
import UserLogin from './screens/UserLogin';
import ProcessChoose from './screens/ProcessChoose';
import DSV from './screens/ProcessScreen/PMCscreens/DSV';
import DCU from './screens/ProcessScreen/PMCscreens/DCU';
import DMP from './screens/ProcessScreen/PMCscreens/DMP';
import MLD from './screens/ProcessScreen/PMCscreens/MLD';
import DPL from './screens/ProcessScreen/PMCscreens/DPL';
import DSVDetails from './screens/ProcessScreen/DetialScreens/DSVDetails';
import ProcessDetials from './screens/ProcessDetails';
import SubProcessForm from './screens/ProcessScreen/SubProcessForm';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="UserLogin" component={UserLogin} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Process"
            component={ProcessChoose}
            options={{
              headerStyle: {
                backgroundColor: '#68d8d6',
              },
              headerTintColor: '#fff',
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Process Details"
            component={ProcessDetials}
            options={{
              headerStyle: {
                backgroundColor: '#68d8d6',
              },
              headerTintColor: '#fff',
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Sub Process"
            component={SubProcessForm}
            options={{
              headerStyle: {
                backgroundColor: '#68d8d6',
              },
              headerTintColor: '#fff',
              headerBackTitleVisible: false,
            }}
          />
          {/* process details screens */}
          <Stack.Screen
            name="DSV Details"
            component={DSVDetails}
            options={{
              headerStyle: {
                backgroundColor: '#68d8d6',
              },
              headerTintColor: '#fff',
              headerBackTitleVisible: false,
            }}
          />
          
        </Stack.Navigator>
        <Footer/>
      </View>
    </NavigationContainer>
  );
}

export default App;
