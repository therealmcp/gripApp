import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';
import RootStackNavigator from './RootStackNavigator';
import AuthStack from './AuthNavigator';

//This creates the app and wraps our "stacks" of screens; see https://reactnavigation.org/docs/en/app-containers.html.
export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Auth: AuthStack,
  Main: RootStackNavigator,
},
  {
    initialRouteName: 'Auth',
  }));