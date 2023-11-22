import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import Detail from './components/screens/Detail';
import {APODResponse} from './utils/api-service';

const Stack = createNativeStackNavigator<RootStackParams>();
const routeScreenDefaultOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: '#fff'
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={routeScreenDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type RootStackParams = {
  Home: undefined;
  Detail: Partial<APODResponse>;
};
