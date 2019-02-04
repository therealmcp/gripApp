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

import API from '../utils/API.js';
import { NavigationActions } from "react-navigation";

import PrimaryButton from '../components/PrimaryButton';
import OutlineButton from '../components/OutlineButton';
import GripHeader from '../components/GripHeader';
import TextInput from '../components/TextInput';
import GripDatePicker from '../components/GripDatePicker';

export default class NewSession extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header:
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <GripHeader />
        </TouchableOpacity>
    }
  };

  state = {
    sessionID: '',
    name: '',
    sets: '',
    reps: '',
    weight: ''
  };

  componentDidMount() {

    console.log("this.props.navigation.state.params.data: ", this.props.navigation.state.params.data)
    const sessionID = this.props.navigation.state.params.data;

    /* const navigateAction = NavigationActions.setParams({
        params: { user: user }
      });
 
    this.props.navigation.dispatch(navigateAction);
    console.log("params set") */

    this.setState({ sessionID: sessionID });
  };

  submit() {
    let workout = {}
    workout.name = this.state.name,
      workout.sets = this.state.sets,
      workout.reps = this.state.reps,
      workout.weight = this.state.weight,

      API.addWorkout(workout);
    //.then(res => console.log(res))
    //.catch(err => console.log(err))

    this.backToNewSession(this.state.sessionID);
    //this.props.navigation.navigate('ClientsPage');

  };

  backToNewSession = (sessionID) => {
    const navigateAction = NavigationActions.navigate({
      routeName: "Session",
      params: { data: sessionID }
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }

  render() {

    return (

      <View style={styles.container}>

        <Text style={styles.h1}>Add Workout to New Session</Text>

        <TextInput placeholder="Workout Name" style={styles.textInput} onChangeText={(value) => this.setState({ name: value })} />

        <View style={styles.containerInline}>
          <TextInput placeholder="Sets" style={styles.textInputHalf} onChangeText={(value) => this.setState({ sets: value })} />
          <TextInput placeholder="Reps/Distance" style={styles.textInputHalf} onChangeText={(value) => this.setState({ reps: value })} />
        </View>
        <TextInput placeholder="Weight" style={styles.textInputHalf} onChangeText={(value) => this.setState({ weight: value })} />

        <PrimaryButton
          onPress={() => this.submit()}
          text="Add Workout"
          style={styles.button} />


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
  }
});