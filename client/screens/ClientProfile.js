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
import { WebBrowser, ImagePicker, Permissions } from 'expo';
import { Card } from 'native-base';
import { NavigationActions } from "react-navigation";
import moment from "moment";

import { MonoText } from '../components/StyledText';

import API from '../utils/API.js';

import PrimaryButton from '../components/PrimaryButton';
import OutlineButton from '../components/OutlineButton';
import GripHeader from '../components/GripHeader';
import TextInput from '../components/TextInput';

export default class ClientProfile extends React.Component {
  
  static navigationOptions = ({navigation}) => {
    return {
      header:
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <GripHeader/>
        </TouchableOpacity>
    }
    };

    state = {
      client: {},
      sessions: []
    }

    componentDidMount(){
    
      console.log("this.props.navigation.state.params.data: ", this.props.navigation.state.params.data)
        const clientID = this.props.navigation.state.params.data;
        
        /* const navigateAction = NavigationActions.setParams({
            params: { user: user }
          });
    
        this.props.navigation.dispatch(navigateAction);
        console.log("params set") */
        
        /* this.setState({client: client}); */
    
        API.getClient(clientID)
        .then(res => 
          this.setState({client: res.data.dbSession})
          //console.log(res.data)
          )
    };

    goToSessions = (clientID) => {
      const navigateAction = NavigationActions.navigate({
        routeName: "Sessions",
        params: { data: clientID }
      });
      this.props.navigation.dispatch(navigateAction);
    }

    formattedDate = (date) => {
      return moment(date).format("MMM Do YY")}

    goToProgress = (clientID) => {
      const navigateAction = NavigationActions.navigate({
        routeName: "Progress",
        params: { data: clientID }
      });
      this.props.navigation.dispatch(navigateAction);
    }
    
  render() {

    return (

      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
        
          <Card style={styles.card}>
            <Text style={styles.h1}>Profile for {this.state.client.firstName} {this.state.client.lastName}</Text>
          </Card>
          
          <PrimaryButton 
              text='Go to Progress' 
              onPress={() => this.goToProgress(this.state.client._id)}
              style={styles.button2}/>
          
          <PrimaryButton 
              text='Go to Sessions' 
              onPress={() => this.goToSessions(this.state.client._id)}
              style={styles.button2}/>


          <Card style={styles.card}>
            <Text style={styles.h1}>Date of Birth: {this.formattedDate(this.state.client.dob)}</Text>
            <Text style={styles.h1}>Sex: {this.state.client.sex}</Text>
            <Text style={styles.h1}>Height: {this.state.client.height}</Text>
            <Text style={styles.h1}>Weight: { this.state.client.sessions ? this.state.client.sessions[this.state.client.sessions.length - 1].weight : ""}</Text>
            <Text style={styles.h1}>Body Fat %: { this.state.client.sessions ? this.state.client.sessions[this.state.client.sessions.length - 1].bodyFat : ""}</Text>
            <Text style={styles.h1}>Caloric Intake: { this.state.client.sessions ? this.state.client.sessions[this.state.client.sessions.length - 1].calories : ""}</Text>
            <Text style={styles.h1}>Goal Notes: {this.state.client.notes}</Text>
          </Card>

         {/*  <TextInput placeholder="Goal Notes:" style={styles.textInput}/> */}

          {/* <Button title='Edit Client Info' onPress={() => this.props.navigation.navigate('ClientsPage')} />
          <Button title='Delete Client' onPress={() => this.props.navigation.navigate('ClientsPage')} /> */}
          
          {/* <View style={styles.containerInline}>
            <TextInput placeholder="First Name" style={styles.textInputHalf}/>
            <TextInput placeholder="Last Name" style={styles.textInputHalf}/>
          </View>

            <TextInput placeholder="Email" style={styles.textInput}/>
            <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={true}/>
            <TextInput placeholder="Repeat Password" style={styles.textInput} secureTextEntry={true}/>
          

          <OutlineButton
              text='Choose a Profile Picture'
              onPress={this._pickImage}
              style={styles.button2}/> */}

         
          <PrimaryButton 
              text='Back to Clients' 
              onPress={() => this.props.navigation.navigate('ClientsPage')}
              style={styles.button}/>

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
    /* flex: 1, */
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
    /* marginLeft: 15, */
    backgroundColor: 'white'
  },
  textInputHalf: {
    width: '46%',
    margin: 10,
    /* marginLeft: 15, */
    padding: 0,
    backgroundColor: 'white'
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: 'blue'
  },
  button2: {
    alignSelf: 'center',
    // marginTop: 20,
    marginBottom: 10,
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
  h2: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
    color: 'blue'
  }
});
