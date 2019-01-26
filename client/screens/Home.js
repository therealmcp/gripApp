import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Button } from 'native-base';
import CardImage from '../components/CardImage';
import { MonoText } from '../components/StyledText';

import GripHeader from '../components/GripHeader';
import PrimaryButton from '../components/PrimaryButton';
import Link from '../components/Link';
import Cards from '../components/Cards';

export default class Home extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header:
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <GripHeader />
        </TouchableOpacity>
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText} >Welcome, Trainer Name!</Text>
        <CardImage />
        <Link />
        <Text style={styles.subText} >Upcoming Sessions</Text>
        <Cards style={styles.sessionCards}/>
        <Cards/>
        <PrimaryButton 
            text='Back to Login' 
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.button}
          />
          <PrimaryButton 
            text='New Client' 
            onPress={() => this.props.navigation.navigate('NewClientsform')}
            style={styles.button}
          />
          <PrimaryButton 
            text='Clients Page' 
            onPress={() => this.props.navigation.navigate('ClientsPage')}
            text='Clients' 
            style={styles.button}
          />
           <PrimaryButton 
            text='Sessions Page' 
            onPress={() => this.props.navigation.navigate('Sessions')}
            style={styles.button}
          />
            <PrimaryButton 
            text='Client Profile' 
            onPress={() => this.props.navigation.navigate('ClientProfile')}
            style={styles.button}
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
  button: {
    alignSelf: 'center',
    backgroundColor: 'blue'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 17,

  },
  header: {
    // flex: 1,
    // zIndex: 1,
  },
  sessionCards: {
    // padding: '15px',
    // width: '100px',
    // alignItems: 'center',
    justifyContent: 'center',
    // width: '80%',
    // margin: 10,
  }
});