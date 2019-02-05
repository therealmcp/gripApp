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
import { WebBrowser, BlurView } from 'expo';
import { Button } from 'native-base';
import CardImage from '../components/CardImage';
import { MonoText } from '../components/StyledText';
import API from '../utils/API.js';
import GripHeader from '../components/GripHeader';
import PrimaryButton from '../components/PrimaryButton';
import Link from '../components/Link';
import Cards from '../components/Cards';
import OutlineButton from '../components/OutlineButton';

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
    user: "",
    clients: null
  }

  componentDidMount(){
    // console.log("this.props.navigation.state.params.data.user: ", this.props.navigation.state.params.data.user)
    const user = this.props.navigation.state.params.data.user;
    // this.props.navigation.setParams({ user })
    // const navigateAction = NavigationActions.setParams({
    //    // key: "id-1547683730508-2",
    //     params: { user: user }
    //   });

    // this.props.navigation.dispatch(navigateAction);
    // console.log("USER DATA: ", user)
      // this.props.navigation.goBack();
    
    // this.setState({user: user})

    // API.getUser(user._id)
    // .then(res => {
    //   this.getUserStuff(res.data._id);
    //   // console.log(res);
    // })
    this.getUserStuff(user)

  };

  getUserStuff = (user) => {
    API.getUserStuff(user._id)
    .then(res => {
      // console.log("CLIENT DATA: ", res)
      this.setState({user: user, clients: res})
    })
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
    // console.log("HOME STATE: ", this.state)
    return (
      <View style={styles.container}>
        <Text style={styles.titleText} >Welcome, {this.state.user.firstName}! </Text>
        <CardImage style={styles.thumbnail} />
        <Link />
        <Text style={styles.subText} >Upcoming Sessions</Text>

        <ScrollView contentContainerStyle={styles.scrollView}>
 
          {this.state.clients !== null ? this.state.clients.data.map(data => {
            console.log("DATA", client)
              const client = data[0]
                return (
                  <Cards key={client._id} 
                  style={styles.sessionCards} 
                  text1={client.firstName + " " + client.lastName}
                  // onPress={() => this.props.navigation.navigate(this.state.client)}
                  // text2={client.notes}
                  />
                )}
            ) : null} 

        </ScrollView>
        



       {/*  <PrimaryButton 
            text='Back to Login' 
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.button}
          /> */}
          {/* <PrimaryButton 
            text='New Client' 
            onPress={() => this.goToNewClient(this.state.user)}
            style={styles.button}
          /> */}
          <PrimaryButton 
            text='Clients Page' 
            onPress={() => this.goToClients(this.state.user)}
            text='Go to Clients' 
            style={styles.button}
          />
          {/*  <PrimaryButton 
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
          /> */}
          <PrimaryButton 
            text='Log Out' 
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.button2}
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
    backgroundColor: 'blue',
    margin: 20,
    bottom: 40,
  },
  button2: {
    alignSelf: 'center',
    //backgroundColor: 'blue',
    //color: 'white',
    // margin: 20,
    backgroundColor: '#0080FF',
    bottom: 30,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0080FF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0.5, height: 0.5},
    top: 15,
   
  },
  subText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: "#0080FF",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0.5, height: 0.5},



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
  },
  // thumbnail: {
  // width: 400, height: 250, top: 200 
  // },
});