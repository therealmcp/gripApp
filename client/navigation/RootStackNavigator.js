import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import Home from '../screens/Home';
import NewClientsform from '../screens/NewClientsform';
import ClientsPage from '../screens/ClientsPage';
import Sessions from '../screens/Sessions';
import NewSession from '../screens/NewSession';
import ClientProfile from '../screens/ClientProfile';

// This creates our app's "stack" of pages; the keys in the first object are the routes, values are the pages (found in "screens" folder)
const RootStack = createStackNavigator(
    {
        Login: Login,
        SignUp: SignUp,
        Home: Home,
        NewClientsform: NewClientsform,
        ClientsPage: ClientsPage,
        Sessions: Sessions,
        ClientProfile: ClientProfile,
        NewSession: NewSession
    },
    {
        initialRouteName: 'Login',
    }
);

/* RootStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}; */

export default RootStack;

