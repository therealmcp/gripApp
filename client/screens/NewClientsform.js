import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity, 
} from 'react-native';
import MyDatePicker from '../components/MyDatePicker'



export default class NewClientsform extends React.Component {

  constructor()
  {
    super();
    this.state={
      name:'',
      lastName:'',
      email:'',
      dateofBirth:'',
      note:''
    }
  }
  

  updateValue(text, field) {
    // console.warn(text)
    if(field=='name')
    {
      this.setState({
        name:text,
      })
    }
    else if(field=='last Name')
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
    else if(field=='date')
    {
      this.setState({
        dateofBirth:date,
      })
    }
    else
    {
      this.setState({
        note:text,
      })
    }
  }

  submit()
  {
    let collection={}
    collection.name=this.state.name,
    collection.lastName=this.state.lastName,
    collection.email=this.state.email,
    collection.dateofBirth=this.state.dateofBirth,
    console.warn(this.state.dateofBirth);
    collection.note=this.state.note,

    console.warn(collection);

    //we should define our own URL
    // var url = 'own-url';

    // fetch(url, {
    //   method: 'POST', // or 'PUT'
    //   body: JSON.stringify(collection), // data can be `string` or {object}!
    //   headers:{
    //     'Content-Type': 'application/json'
    //   }
    // }).then(res => res.json())
    // .then(response => console.log('Success:', JSON.stringify(response)))
    // .catch(error => console.error('Error:', error));


   // 1st CORS do this for server file
   // Fetch should target your server aka http://localhost:PORT###
   // Creating a post route with payload = collection
   // on your server side this should call the router
   // ex api/clients => post route

  }
  render() {
    return (
      <View style={styles.newClientsform}>
        <Text style={styles.header}>Add New Client</Text>

        <TextInput 
          style={styles.TextInput} 
          placeholder='name' 
          onChangeText={(text) => this.updateValue(text, 'name')}/>

        <TextInput 
          style={styles.TextInput} 
          placeholder='last Name'
          onChangeText={(text) => this.updateValue(text, 'last Name')}/>

        <TextInput 
          style={styles.TextInput} 
          placeholder='email'
          onChangeText={(text) => this.updateValue(text, 'email')}/>

        <Text>date of Birth:</Text>
        <MyDatePicker />

        <TextInput
        
        style={styles.textArea}
        placeholder='Note'
        placeholderTextColor="gray"
        numberOfLines={10}
        multiline={true}
        onChangeText={(text) => this.updateValue(text, 'Note')}/>

        <TouchableOpacity
        onPress={()=>this.submit()} 
        style={styles.button} >
          <Text style={styles.btntext}>create Client</Text>
        </TouchableOpacity>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1, 
  },
  TextInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
  },
  button: {
    alignSelf:'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
