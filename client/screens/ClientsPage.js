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
import { NavigationActions } from "react-navigation";

import API from '../utils/API.js';

import GripHeader from '../components/GripHeader';
import PrimaryButton from '../components/PrimaryButton';
import Link from '../components/Link';
import Cards from '../components/Cards';
import PlusButton from '../components/PlusButton';

export default class ClientsPage extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
          header: 
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <GripHeader/>
            </TouchableOpacity>
          }
        };

  state = {
    user: null,
    clients: [
      {
        sessions: [],
        _id: "5c4a279d98701f002a6e4947",
        firstName: "Test",
        "lastName": "Testy",
        "email": "email@email.com",
        "height": 7,
        "sex": "M",
        "dob": "1095-01-02T00:00:00.000Z",
        "emergencyContact": "Mom",
        "emergencyNumber": 5555555,
        notes: "note note note",
        "weight": 166,
        "bodyFat": 2,
        "trainer": "5c47b315e7b746002ae89c38",
        "__v": 0
    },
    {
        "sessions": [],
        _id: "5c4a29dd98701f002a6e4948",
        "trainer": "5c47b315e7b746002ae89c38",
        firstName: "Andy",
        "lastName": "Richter",
        "email": "andy@hmail.com",
        "sex": "M",
        "height": 8,
        "dob": "1971-02-20T08:00:00.000Z",
        "emergencyContact": "Conan",
        "emergencyNumber": 5555555,
        notes: "Tryna get fit!",
        "bodyFat": 2,
        "weight": 175,
        "__v": 0
    },
    {
        "sessions": [],
        "_id": "5c4a2bdd98701f002a6e4949",
        "trainer": "5c47b315e7b746002ae89c38",
        "firstName": "Toby",
        "lastName": "McGuire",
        "email": "toby@hmail.com",
        "sex": "M",
        "height": 6,
        "dob": "1986-02-20T08:00:00.000Z",
        "emergencyContact": "Aunt May",
        "emergencyNumber": 66666666,
        "notes": "I’m Spider-Man!",
        "bodyFat": 2,
        "weight": 175,
        "__v": 0
    },
    {
        "sessions": [],
        "_id": "5c4a2c6798701f002a6e494a",
        "trainer": "5c47b315e7b746002ae89c38",
        "firstName": "Another",
        "lastName": "One",
        "email": "Try@gmail.com",
        "sex": "F",
        "height": 7,
        "dob": "1976-02-20T08:00:00.000Z",
        "emergencyContact": "Dad",
        "emergencyNumber": 4444444,
        "notes": "Just so.",
        "bodyFat": 2,
        "weight": 175,
        "__v": 0
    },
    {
        "sessions": [],
        "_id": "5c4a543e0de58b002aceccb3",
        "firstName": "New",
        "lastName": "Guy",
        "email": "new@email.com",
        "height": 7,
        "sex": "M",
        "dob": "1995-01-02T00:00:00.000Z",
        "emergencyContact": "Mommy",
        "emergencyNumber": 5555555,
        "notes": "note note notes",
        "weight": 177,
        "bodyFat": 2,
        "trainer": "5c47b315e7b746002ae89c38",
        "__v": 0
    }
    ]
  }

  componentDidMount(){
    
  console.log("this.props.navigation.state.params.data: ", this.props.navigation.state.params.data)
    const user = this.props.navigation.state.params.data;
    
    const navigateAction = NavigationActions.setParams({
        params: { user: user }
      });

    this.props.navigation.dispatch(navigateAction);
    console.log("params set")
    
    this.setState({user: user});
    API.getUser(user._id)
    .then(res => {
      this.getUserClients(res.data.user._id);
      console.log(res);
    })
};

getUserClients = (id) => {
  API.getUserClients(id)
  .then(res => this.setState({clients: res.data.client}))
};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText} >Clients</Text>
        <PlusButton
        text='Add a Client'
        onPress={() => this.props.navigation.navigate('NewClientsform')}
         style={styles.button}/>
        {/* <PrimaryButton 
            text='Add a Client' 
            onPress={() => this.props.navigation.navigate('NewClientsForm')}
            style={styles.button}
          />
          <PlusButton/> */}

        <ScrollView contentContainerStyle={styles.scrollView}>

          {this.state.clients.map(client => {
                return (
                  <Cards key={client._id} 
                  style={styles.sessionCards} 
                  text1={client.firstName + " " + client.lastName}
                  text2={client.notes}/>
                )}
            )}

        </ScrollView>

        
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
  container2: {
    flex: 1
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
     alignItems: 'center',
     justifyContent: 'center',
     width: '80%',
    // margin: 10,
    // flex: 0
  },
  scrollView: {
    /* flex: 1, */
    /* flexGrow: 1, */
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});