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

import { MonoText } from '../components/StyledText';
import TextInput from '../components/TextInput';
import PrimaryButton from '../components/PrimaryButton';


export default class LandingPage extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>

        <Card style={styles.card}>
          <Text style={styles.h1}>GRIP</Text>
          <Text style={styles.h2}>for Personal Trainers</Text>
        </Card>


        <TextInput placeholder="Email" style={styles.textInput}/>
        <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={true}/>

        <PrimaryButton 
          text="Log In" style={styles.button} 
          onPress={() => this.props.navigation.navigate('Home')}/> 

        <Button title='Sign Up' onPress={() => this.props.navigation.navigate('SignUp')} />

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
