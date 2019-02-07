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
import moment from 'moment';

import API from '../utils/API.js';
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

    state = {
      clientID: "",
      sessions: [
        {
          "workouts": [],
          "_id": "5c512a41fd74b3002ac7fab6",
          "client": "5c4feae2758d4f002a1943c8",
          "date": "2019-01-24T00:00:00.000Z",
          "calories": 2000,
          "notes": "leg day",
          "__v": 0
      }
      ]
    }
  
    componentDidMount(){

      console.log("this.props.navigation.state.params.data: ", this.props.navigation.state.params.data)
        const clientID = this.props.navigation.state.params.data;
        
        /* const navigateAction = NavigationActions.setParams({
            params: { user: user }
          });
    
        this.props.navigation.dispatch(navigateAction);
        console.log("params set") */
        
        this.setState({clientID: clientID});

        this.props.navigation.addListener('willFocus', (route) => { 
          API.getClient(clientID)
        .then(res => 
          this.setState({sessions: res.data.dbSession.sessions})
          //console.log(res.data)
          )})
    }


    goToSessionPage = (sessionID) => {
      const navigateAction = NavigationActions.navigate({
        routeName: "Session",
        params: { data: sessionID }
      });
      this.props.navigation.dispatch(navigateAction);
    }

    goToNewSession = (clientID) => {
      const navigateAction = NavigationActions.navigate({
        routeName: "NewSession",
        params: { data: clientID }
      });
      this.props.navigation.dispatch(navigateAction);
    }

    formattedDate = (date) => {
      return moment(date).format("MMM Do YY")}


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText} >Sessions</Text>
        {/* Needs a place for React Native to take it to set up a Session */}
        
        <PrimaryButton
        text='Add a Session'
        onPress={() => this.goToNewSession(this.state.clientID)}
        style={styles.button}/>

        {/* <PrimaryButton 
            text='Add a Client' 
            onPress={() => this.props.navigation.navigate('NewClientsForm')}
            style={styles.button}
          />
          <PlusButton/> */}

        <ScrollView contentContainerStyle={styles.scrollView}>  
        
            
          {this.state.sessions.sort(function(a,b){return new Date(b.date) - new Date(a.date)}).map(session => {
                  return (
                    <Cards key={session._id} 
                    style={styles.sessionCards} 
                    text1={this.formattedDate(session.date)}
                    text2={session.notes}
                    onPress={() => this.goToSessionPage(session._id)}
                    />
                  )}
              )}

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    //top: 40
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0080FF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0.5, height: 0.5},
    //top: 15,
    margin: 20
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
  },
  scrollView: {
    /* flex: 1, */
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    //top: 95,
    marginTop: 20
  }
});