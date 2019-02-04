import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card } from 'native-base';
import { NavigationActions } from "react-navigation";

import API from '../utils/API.js';
import GripHeader from '../components/GripHeader';
import PrimaryButton from '../components/PrimaryButton';
import Cards from '../components/Cards';
import FooterTabsIcon from '../components/FooterWithText';



export default class NewClientsform extends React.Component {

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
      sessionID: ''
    }
  }

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

  // submit() {

  //   let collection = {}

  //   collection.session = this.state.sessionID

  //   API.addWorkout(collection);
  //   //.then(res => console.log(res))
  //   //.catch(err => console.log(err))

  //   this.goToWorkouts(this.state.sessionID);
  //   //this.props.navigation.navigate('ClientsPage');

  // };

  goToAddWorkout = (sessionID) => {
    const navigateAction = NavigationActions.navigate({
      routeName: "AddWorkout",
      params: { data: sessionID }
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }



  render() {

    return (

      <View style={styles.container}>

        <Card style={styles.card}>
          <Text style={styles.h1}>Session for:</Text>
        </Card>

        <PrimaryButton
          text='Add New Workouts'
          onPress={() => this.goToAddWorkout(this.state.sessionID)}
          style={styles.button}
        />

        <ScrollView contentContainerStyle={styles.scrollView}>

          <Cards style={styles.sessionCards} />
          <Cards style={styles.sessionCards} />
          <Cards style={styles.sessionCards} />
          <Cards style={styles.sessionCards} />
          <Cards style={styles.sessionCards} />
          <Cards style={styles.sessionCards} />
          <Cards style={styles.sessionCards} />
          <Cards style={styles.sessionCards} />

          <PrimaryButton
            text='Back to Client Sessions'
            onPress={() => this.props.navigation.navigate('Sessions')}
            style={styles.button}
          />

          <FooterTabsIcon />

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
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  containerInline: {
    flexWrap: 'wrap',
    padding: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '82%',
  },
  textInput: {
    width: '80%',
    margin: 10,
    backgroundColor: 'white'
  },
  textInputHalf: {
    width: '46%',
    margin: 10,
    padding: 0,
    backgroundColor: 'white'
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
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
  textArea: {
    height: 300,
    width: 300,
    justifyContent: "flex-start",
  },
  sessionCards: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },

});