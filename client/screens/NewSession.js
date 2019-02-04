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

import { MonoText } from '../components/StyledText';
import { NavigationActions } from "react-navigation";
import API from '../utils/API.js';

import PrimaryButton from '../components/PrimaryButton';
import OutlineButton from '../components/OutlineButton';
import GripHeader from '../components/GripHeader';
import TextInput from '../components/TextInput';
import GripDatePicker from '../components/GripDatePicker';
import TextArea from '../components/TextArea';

export default class NewSession extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header:
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <GripHeader />
        </TouchableOpacity>
    }
  };

  constructor() {
    super();
    this.state = {
      clientID: '',
      sessionID: '',
      sessionDate: '',
      weight: '',
      bodyFat: '',
      caloric: '',
      sessionNotes: ''
    }
  }

  componentDidMount() {

    console.log("this.props.navigation.state.params.data: ", this.props.navigation.state.params.data)
    const clientID = this.props.navigation.state.params.data;
    this.props.navigation.setParams({ clientID })
    const navigateAction = NavigationActions.setParams({
      params: { clientID: clientID }
    });

    this.props.navigation.dispatch(navigateAction);
    console.log("params set")

    /* const navigateAction = NavigationActions.setParams({
        params: { user: user }
      });
 
    this.props.navigation.dispatch(navigateAction);
    console.log("params set") */

    this.setState({ clientID: clientID });
  };

  submit() {
    let collection = {}

      collection.client = this.state.clientID,
      collection.date = this.state.sessionDate,
      collection.weight = this.state.weight,
      collection.bodyFat = this.state.bodyFat,
      collection.calories = this.state.caloric,
      collection.notes = this.state.sessionNotes

    //console.warn(collection);

    API.saveSession(collection)
    //.then(res => console.log(res))
    .catch(err => console.log(err))
  

    this.goToSessions(this.state.clientID);
    //this.props.navigation.navigate('ClientsPage');

  };

  goToSessions = (clientID) => {
    const navigateAction = NavigationActions.navigate({
      routeName: "AddWorkout",
      params: { data: clientID }
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }

  render() {

    return (

      <View style={styles.container}>

        <Text style={styles.h1}>New Session</Text>

        <Text>Date:</Text>
        <GripDatePicker 
         placeholder="Tap to Pick Session Date"
         onDateChange={(date) => {
           // date = moment().format("MMM Do YY")
           this.setState({sessionDate: date})}
         }
        />

        <View style={styles.containerInline}>
          <TextInput placeholder="Weight" style={styles.textInputHalf} onChangeText={(value) => this.setState({ weight: value })} />
          <TextInput placeholder="Body Fat %" style={styles.textInputHalf} onChangeText={(value) => this.setState({ bodyFat: value })} />
        </View>
        <TextInput placeholder="Caloric Intake" style={styles.textInputHalf} onChangeText={(value) => this.setState({ caloric: value })} />

        <View style={styles.textArea}>
            <TextArea 
              numberOfLines={10}
              multiline={true}
              onChangeText={(value) => this.setState({sessionNotes: value})}
              placeholder={"Session Notes"}/> 
          </View>

        <PrimaryButton
          text='Add New Session'
          onPress={() => this.submit()}
          style={styles.button}
        />


        <ScrollView contentContainerStyle={styles.scrollView}>

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
    /* flexWrap: 'wrap', */
    padding: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '80%',
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
    marginTop: 20,
    marginBottom: 10,
    /* backgroundColor: 'green', */
    /* width: '80%', */
    /* justifyContent: 'center' */
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
  },
  textArea: {
    //height: 300,
    //flex: 1,
    width: 300,
    justifyContent: "center",
    backgroundColor: 'white',
    margin: 20
  },
});