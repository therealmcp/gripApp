import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
} from 'react-native';
import { WebBrowser, ImagePicker, Permissions } from 'expo';
import { Card } from 'native-base';
import moment from 'moment';

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
      sessionNotes: '',
      requiredFields: true
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
    // if date, weight, bodyFat, caloires, and notes are true, then hit our API.saveSession method
    if (this.state.clientID && this.state.sessionDate && this.state.weight && this.state.bodyFat && this.state.caloric && this.state.sessionNotes) {
      API.saveSession(collection)
      this.goToSessions(this.state.clientID);
      
    }

    else {
      console.log("fill out info")
      this.setState({ requiredFields: false })

    }

    
    
    // .then(res => 
    //   this.goToAddWorkout(res.data._id))
    //.catch(err => console.log(err))

    // else 
    // send an alert box to the user saying that all fields required
  

    
    //this.props.navigation.navigate('ClientsPage');

  };


  renderAlert = () => {
    if(!this.state.requiredFields){
        Alert.alert(
          'Required Fields Missing',
          'Please fill in all listed fields.',
          [
            //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
    }
  }

  formattedDate = (date) => {
    return moment(date).format("MMM Do YY")}

  goToSessions = (clientID) => {
    const navigateAction = NavigationActions.navigate({
      routeName: "Sessions",
      params: { data: clientID }
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }

  // goToAddWorkout = (clientID) => {
  //   const navigateAction = NavigationActions.navigate({
  //     routeName: "AddWorkout",
  //     params: { data: clientID }
  //   });
  //   this.props.navigation.dispatch(navigateAction);
  //   // this.props.navigation.goBack();
  // }

  render() {

    return (

      <View style={styles.container}>
        {this.renderAlert()}

        <Text style={styles.h1}>New Session</Text>

        <Text style={styles.h3}>Date:</Text>
        <GripDatePicker 
        style={styles.datePick}
         placeholder="Tap to Pick Session Date"
         onDateChange={(date) => {
           //let formDate = this.formattedDate(date);
           this.setState({sessionDate: date})}
         }
        />

        <View style={styles.containerInline}>
          <TextInput placeholder="Weight" style={styles.textInputHalf} onChangeText={(value) => this.setState({ weight: value })} />
          <TextInput placeholder="Body Fat %" style={styles.textInputHalf} onChangeText={(value) => this.setState({ bodyFat: value })} />
        </View>
        <TextInput placeholder="Caloric Intake" style={styles.textInputHalf} onChangeText={(value) => this.setState({ caloric: value })} />

        {/* <View style={styles.textArea}> */}
            <TextInput style={styles.textArea}
              numberOfLines={10}
              multiline={true}
              onChangeText={(value) => this.setState({sessionNotes: value})}
              placeholder={"Session Notes"}/> 
          {/* </View> */}

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
    color: '#0080FF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
    color: 'blue'
  },
  h3: {
    fontSize: 20,
    color: '#0080FF'
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