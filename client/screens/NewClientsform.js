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

import API from '../API.js';
import TextArea from '../components/TextArea';
import GripHeader from '../components/GripHeader';
import TextInput from '../components/TextInput';
import GripDatePicker from '../components/GripDatePicker';

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
      // console.log(this.props.navigation.state.params.data.user)
      const user = {
        _id: "5c47af84e7b746002ae89c37",
        firstName: "Derek",
        lastName: "Rutter",
        email: "rutterer@gmail.com",
        photo: "image",
        __v: 0
      };
      // this.props.navigation.setParams({ user })
      const navigateAction = NavigationActions.setParams({
          key: "id-1547683730508-2",
          params: { user: user }
        });

      this.props.navigation.dispatch(navigateAction);
      console.log("params set")
        // this.props.navigation.goBack();
      
      this.setState({user})
    }

    /* updateValue(text, field) {
      // console.warn(text)
      if(field=='firstName')
      {
        this.setState({
          firstName:text,
        })
      }
      else if(field=='lastName')
      {
        this.setState({
          lastName:text,
        })
      }
      else if(field=='email')
      {
        this.setState({
          email:text,
        })
      }
      else if(field=='sex')
      {
        this.setState({
          sex:text,
        })
      }
      else if(field=='height')
      {
        this.setState({
          height:text,
        })
      }
      else if(field=='date')
      {
        this.setState({
          dob:text,
        })
      }
      else if(field=='emergencyContact')
      {
        this.setState({
          emergencyContact:text,
        })
      }
      else if(field=='emergencyNumber')
      {
        this.setState({
          emergencyNumber:text,
        })
      }
      else
      {
        this.setState({
          note:text,
        })
      }
    } */

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
    collection.note=this.state.notes,

    console.warn(collection);

    API.saveClient(collection, this.state.user._id)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    // axios({
    //   method: 'POST',
    //   url: 'http://10.0.0.2:3001/api/clients',
    //   data: {
    //       collection
    //   }
    // }).catch(err=>{throw err});
  
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
              onChangeText={(value) => this.setState({notes: value})}/> 
          </View>

          <TouchableOpacity
          onPress={()=>this.submit()} 
          // onPress={() => this.props.navigation.navigate('Home')}
          style={styles.button} >
           <Text style={styles.btntext}>Create Client</Text>
          </TouchableOpacity>

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
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
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
    height: 300,
    width: 300,
    justifyContent: "flex-start",
  },

});