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
    clients: null
  }

  componentDidMount(){
    
  console.log("this.props.navigation.state.params.data: ", this.props.navigation.state.params.data)
    const user = this.props.navigation.state.params.data;
    
    // const navigateAction = NavigationActions.setParams({
    //     params: { user: user }
    //   });

    //this.props.navigation.dispatch(navigateAction);
    console.log("params set")
    
    this.setState({user: user});

    this.props.navigation.addListener('willFocus', (route) => { 
      API.getUser(user)
      .then(res => {
      this.getUserStuff(res.data._id);
      //console.log(res);
    })
  });

  /* API.getUser(user._id)
      .then(res => {
      this.getUserStuff(res.data._id)}) */
};

getUserStuff = (id) => {
  API.getUserStuff(id)
  .then(res => this.setState({clients: res.data}))
};

goToNewClient = (userObj) => {
  const navigateAction = NavigationActions.navigate({
    routeName: "NewClientsform",
    params: { data: userObj }
  });
  this.props.navigation.dispatch(navigateAction);
}

goToClientProfile = (clientID) => {
  const navigateAction = NavigationActions.navigate({
    routeName: "ClientProfile",
    params: { data: clientID }
  });
  this.props.navigation.dispatch(navigateAction);
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Clients</Text>
       {/*  <PlusButton
        style={styles.plusButton}
        text='Add a Client'
        onPress={() => this.goToNewClient(this.state.user)}
         /> */}
        <PrimaryButton 
            text='Add a Client' 
            onPress={() => this.goToNewClient(this.state.user)}
            style={styles.button}
          />


        <ScrollView contentContainerStyle={styles.scrollView}>


          {this.state.clients !== null ? this.state.clients.map(data => {
            const client = data[0]
                return (
                  <Cards key={client._id} 
                  style={styles.sessionCards} 
                  text1={client.firstName + " " + client.lastName}
                  text2={client.notes}
                  onPress={() => this.goToClientProfile(client._id)}
                  />
                )})
            : null}

        </ScrollView>

        
          {/* <PrimaryButton 
            text='Back to Home' 
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.button}
          /> */}
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mintcream',
    // backgroundColor: '#89d4cf',
    // backgroundImage: 'linearGradient(315deg, #89d4cf 0%, #6e45e1 74%)',

    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1
  },
  titleText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#0080FF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0.5, height: 0.5},
    //top: 15,
    margin: 30
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
    width: '100%',
    //top: 115,
    margin: 20
  },
  button: {
    alignSelf: 'center',
    //bottom: 60,
    backgroundColor: '#0080FF',
    //top: 50
    margin: 10
  },
  plusButton: {
    fontSize: 50,
    color: '#0080FF',
    
  },
});