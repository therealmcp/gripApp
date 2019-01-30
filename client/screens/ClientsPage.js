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
    clients: []
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
      this.getUserStuff(res.data._id);
      //console.log(res);
    })
};

getUserStuff = (id) => {
  API.getUserStuff(id)
  .then(res => this.setState({clients: res.data.clients}))
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
        <PlusButton
        text='Add a Client'
        onPress={() => this.goToNewClient(this.state.user)}
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
                  text2={client.notes}
                  onPress={() => this.goToClientProfile(client._id)}
                  />
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