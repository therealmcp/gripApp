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
import PlusButton from '../components/PlusButton';

export default class Sessions extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
          header: 
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <GripHeader/>
            </TouchableOpacity>
          }
        };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText} >Sessions</Text>
        {/* Needs a place for React Native to take it to set up a Session */}
        <PlusButton
        text='Add a Session'
        onPress={() => this.props.navigation.navigate('NewClientsform')}
         style={styles.button}/>
        {/* <PrimaryButton 
            text='Add a Client' 
            onPress={() => this.props.navigation.navigate('NewClientsForm')}
            style={styles.button}
          />
          <PlusButton/> */}
        <Cards style={styles.sessionCards}/>
        <Cards style={styles.sessionCards}/>
        <Cards style={styles.sessionCards}/>

        
          <PrimaryButton 
            text='Back to Home' 
            onPress={() => this.props.navigation.navigate('Home')}
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
    fontSize: 30,
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