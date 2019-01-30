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
import { NavigationActions } from "react-navigation";
import { WebBrowser } from 'expo';
import { Button } from 'native-base';
import CardImage from '../components/CardImage';
import { MonoText } from '../components/StyledText';
import API from '../utils/API.js';
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

  state = {
    user: null,
    clients: []
  }

  componentDidMount(){
    console.log("this.props.navigation.state.params.data.user: ", this.props.navigation.state.params.data.user)
    const user = this.props.navigation.state.params.data.user;
    // this.props.navigation.setParams({ user })
    const navigateAction = NavigationActions.setParams({
       // key: "id-1547683730508-2",
        params: { user: user }
      });

    this.props.navigation.dispatch(navigateAction);
    console.log("params set")
      // this.props.navigation.goBack();
    
    this.setState({user: user})

    API.getUser(user._id)
    .then(res => {
      this.getUserStuff(res.data._id);
      // console.log(res);
    })
  };

  getUserStuff = (id) => {
    API.getUserStuff(id)
    .then(res => this.setState({clients: res.data.clients}))
  };

  // goToNewClient = (userObj) => {
  //   const navigateAction = NavigationActions.navigate({
  //     routeName: "NewClientsform",
  //     params: { data: userObj }
  //   });
  //   this.props.navigation.dispatch(navigateAction);
  //   // this.props.navigation.goBack();
  // }

  goToClients = (userObj) => {
    const navigateAction = NavigationActions.navigate({
      routeName: "ClientsPage",
      params: { data: userObj }
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText} >Welcome, </Text>
        <CardImage />
        <Link />
        <Text style={styles.subText} >Upcoming Sessions</Text>

        <ScrollView contentContainerStyle={styles.scrollView}>

          {this.state.clients.map(client => {
                return (
                  <Cards key={client._id} 
                  style={styles.sessionCards} 
                  text1={client.firstName + " " + client.lastName}
                  // text2={client.notes}
                  />
                )}
            )}

        </ScrollView>


        <PrimaryButton 
            text='Back to Login' 
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.button}
          />
          {/* <PrimaryButton 
            text='New Client' 
            onPress={() => this.goToNewClient(this.state.user)}
            style={styles.button}
          /> */}
          <PrimaryButton 
            text='Clients Page' 
            onPress={() => this.goToClients(this.state.user)}
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
            <PrimaryButton 
            text='Session' 
            onPress={() => this.props.navigation.navigate('Session')}
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