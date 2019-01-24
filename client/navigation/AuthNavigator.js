import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';

export default createStackNavigator({
  Login: Login,
  SignUp: {
    screen: SignUp,
    path: "/signup"
  }
});

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };
