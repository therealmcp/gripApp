import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card } from 'native-base';
import { NavigationActions } from "react-navigation";

import API from '../utils/API.js';
import GripHeader from '../components/GripHeader';
import PrimaryButton from '../components/PrimaryButton';
import Cards from '../components/Cards';
import FooterTabsIcon from '../components/FooterWithText';



export default class NewClientsform extends React.Component {
  
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
        
          <Card style={styles.card}>
            <Text style={styles.h1}>Session for:</Text>
          </Card>

          <ScrollView contentContainerStyle={styles.scrollView}>  
          
            <Cards style={styles.sessionCards}/>
            <Cards style={styles.sessionCards}/>
            <Cards style={styles.sessionCards}/>
            <Cards style={styles.sessionCards}/>
            <Cards style={styles.sessionCards}/>
            <Cards style={styles.sessionCards}/>
            <Cards style={styles.sessionCards}/>
            <Cards style={styles.sessionCards}/>

             <PrimaryButton 
            text='Back to Client Sessions' 
            onPress={() => this.props.navigation.navigate('Sessions')}
            style={styles.button}
            />

            <FooterTabsIcon />
           
          </ScrollView>

          

           

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
  scrollView: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  containerInline: {
    flexWrap: 'wrap', 
    padding: 0,
    justifyContent: 'space-between',
    flexDirection:'row',
    width: '82%',
  },
  textInput: {
    width: '80%',
    margin: 10, 
    backgroundColor: 'white'
  },
  textInputHalf: {
    width: '46%',
    margin: 10,
    padding: 0,
    backgroundColor: 'white'
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: 'blue'
  },
  card: {
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    borderColor: 'transparent'
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 28,
    padding: 10,
    color: 'blue'
  },
  textArea: {
    height: 300,
    width: 300,
    justifyContent: "flex-start",
  },
  sessionCards: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },

});