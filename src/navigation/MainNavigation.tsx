import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DeviceCheck from '../screens/DeviceCheck';
import WelcomeView from '../screens/WelcomeView';
import ButtonsView from '../screens/ButtonsView';


const Stack = createNativeStackNavigator();

const MainNavigation = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeView} />
        <Stack.Screen name="ButtonView" component={ButtonsView} />
        <Stack.Screen name="DeviceCheck" component={DeviceCheck} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


export default MainNavigation;
