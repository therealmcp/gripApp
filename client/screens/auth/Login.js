import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import { Card } from 'native-base';
import { NavigationActions } from "react-navigation";

import { MonoText } from '../../components/StyledText';
import TextInput from '../../components/TextInput';
import PrimaryButton from '../../components/PrimaryButton';
import API from "../../utils/API";


export default class LandingPage extends React.Component {
  static navigationOptions = {
    header: null,
  }

  goToMain = (userObj) => {
    const navigateAction = NavigationActions.navigate({
      routeName: "HomeScreen",
      params: { data: userObj }
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }

  signUp = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: "SignUp",
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }

  login = () => {
    API.login(this.state)
      .then(res => this.goToMain(res.data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <View style={styles.container}>

        <Card style={styles.card}>
          <Text style={styles.h1}>GRIP</Text>
          <Text style={styles.h2}>for Personal Trainers</Text>
        </Card>


        <TextInput placeholder="Email" style={styles.textInput} />
        <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={true} />

        <PrimaryButton
          text="Log In" style={styles.button}
          onPress={() => this.login()} />

        <Button
          title="Login"
          onPress={() => this.login()}
        />

        <Button
          title="Register"
          onPress={() => this.signUp()}
        />

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mintcream',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '80%',
    margin: 10,
    backgroundColor: 'white'
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'blue'
  },
  card: {
    marginBottom: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    borderColor: 'transparent'
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 52,
    padding: 5,
    color: 'blue'
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 28,
    padding: 5,
    color: 'blue'
  }
});
