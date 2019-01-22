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

import PrimaryButton from '../components/PrimaryButton';
import OutlineButton from '../components/OutlineButton';
import GripHeader from '../components/GripHeader';
import TextInput from '../components/TextInput';
import DatePicker from '../components/DatePicker';

export default class AddWorkout extends React.Component {
  
    static navigationOptions = ({navigation}) => {
        return {
          header: 
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <GripHeader/>
            </TouchableOpacity>
          }
        };

    state = {
      sessionDate: '',
      weight: '',
      bodyFat: '',
      caloric: '',
      sessionNotes: ''
    };

  render() {

    return (

      <View style={styles.container}>

        <Text style={styles.h1}>Add Workout</Text>

        {/* <DatePicker/> */}

        
         <TextInput placeholder="Name of Workout" style={styles.textInput}/>


        
        <View style={styles.containerInline}>
            <TextInput placeholder="Sets" style={styles.textInputHalf}/>
            <TextInput placeholder="Reps/Distance" style={styles.textInputHalf}/>
        </View>
        <View sytle={styles.containerInline}>
        <TextInput placeholder="Weight" style={styles.textInputHalf}/>
        {/* <TextInput placeholder="Caloric Intake" style={styles.textInputHalf}/> */}
        </View>
        
        <PrimaryButton 
            text='Add New Workout' 
            onPress={() => this.props.navigation.navigate('Sessions')}
            style={styles.button}
          />

         <PrimaryButton 
            text='Got to Sessions' 
            onPress={() => this.props.navigation.navigate('Sessions')}
            style={styles.button}
          />

           <PrimaryButton 
            text='Go to Clients' 
            onPress={() => this.props.navigation.navigate('ClientsPage')}
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
    flexDirection:'row',
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