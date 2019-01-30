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
import TextArea from '../components/TextArea';
import GripHeader from '../components/GripHeader';
import TextInput from '../components/TextInput';
import GripDatePicker from '../components/GripDatePicker';
import PrimaryButton from '../components/PrimaryButton.js';

export default class NewClientsform extends React.Component {
  
  static navigationOptions = ({navigation}) => {
    return {
      header:
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <GripHeader/>
        </TouchableOpacity>
      }
    };

    constructor()
    {
      super();
      this.state={
        user: null,
        firstName:'',
        lastName:'',
        email:'',
        dob: '',
        sex: '',
        height: '',
        notes: '',
        emergencyContact: '',
        emergencyNumber: '',
      }
    }

    componentDidMount(){
      console.log("this.props.navigation.state.params.data: ", this.props.navigation.state.params.data)
      const user = this.props.navigation.state.params.data;
      this.props.navigation.setParams({ user })
      const navigateAction = NavigationActions.setParams({
          params: { user: user }
        });

      this.props.navigation.dispatch(navigateAction);
      console.log("params set")
      
      this.setState({user: user});
    };

    submit()
  {
    let collection={}
    collection.firstName=this.state.firstName,
    collection.lastName=this.state.lastName,
    collection.email=this.state.email,
    collection.sex=this.state.sex,
    collection.height=this.state.height,
    collection.dob=this.state.dob,
    collection.emergencyContact=this.state.emergencyContact,
    collection.emergencyNumber=this.state.emergencyNumber,
    collection.notes=this.state.notes,
    collection.user=this.state.user._id

    //console.warn(collection);

    API.saveClient(collection);
      //.then(res => console.log(res))
      //.catch(err => console.log(err))
    
    this.goToClients(this.state.user);
    //this.props.navigation.navigate('ClientsPage');
    
  };

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
        <ScrollView contentContainerStyle={styles.scrollView}>
        

          <Card style={styles.card}>
            <Text style={styles.h1}>Add New Client</Text>
          </Card>
          
          <View style={styles.containerInline}>
            <TextInput placeholder="First Name" style={styles.textInputHalf} onChangeText={(value) => this.setState({firstName: value})}/>
            <TextInput placeholder="Last Name" style={styles.textInputHalf} onChangeText={(value) => this.setState({lastName: value})}/>
          </View>

          <TextInput placeholder="Email" style={styles.textInput} onChangeText={(value) => this.setState({email: value})}/>

          <View style={styles.containerInline}>
            <TextInput placeholder="Height" style={styles.textInputHalf} onChangeText={(value) => this.setState({height: value})}/>
            <TextInput placeholder="Sex" style={styles.textInputHalf} onChangeText={(value) => this.setState({sex: value})}/>
          </View>
        
          <View style={styles.containerInline}>
          <GripDatePicker 
            placeholder="Date of Birth"
            onDateChange={(date) => this.setState({dob: date})}
          />
          </View>
          

          <TextInput placeholder="Emergency Contact" style={styles.textInput} onChangeText={(value) => this.setState({emergencyContact: value})}/>
          <TextInput placeholder="Emergency #" style={styles.textInput} onChangeText={(value) => this.setState({emergencyNumber: value})}/>

          <View style={styles.textArea}>
            <TextArea 
              numberOfLines={10}
              multiline={true}
              onChangeText={(value) => this.setState({notes: value})}
              placeholder={"Goal Notes"}/> 
          </View>

          <PrimaryButton
          onPress={()=>this.submit()} 
          text="Create Client"
          style={styles.button}/>

          {/* <TouchableOpacity
          onPress={()=>this.submit()} 
          // onPress={() => this.props.navigation.navigate('Home')}
          style={styles.button} >
           <Text style={styles.btntext}>Create Client</Text>
          </TouchableOpacity> */}

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
    //alignItems: 'center',
    //padding: 20,
    marginTop: 20,
    marginBottom: 100,
    backgroundColor: 'blue'
  },
  button2: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
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
    //height: 300,
    //flex: 1,
    width: 300,
    justifyContent: "center",
    backgroundColor: 'white',
    margin: 20
  },

});