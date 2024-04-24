import * as React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Footer from './components/_layout/Footer';
import UserLogin from './screens/UserLogin';
import ProcessChoose from './screens/ProcessChoose';
import PMC from './screens/ProcessScreen/PMC';

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
            name="PMC"
            component={PMC}
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
