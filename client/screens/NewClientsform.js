
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MyDatePicker from '../components/MyDatePicker'
import TextArea from '../components/TextArea';
import PrimaryButton from '../components/PrimaryButton';
import { Card } from 'native-base';



export default class NewClientsform extends React.Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      height: '',
      weight: '',
      bodyFat: '',
      dob: '',
      note: ''
    }
  }
  //   handleInputChange = event => {
  //     // Destructure the name and value properties off of event.target
  //     // Update the appropriate state
  //     const { name, value } = event.target;
  //     this.setState({
  //       [name]: value
  //     });
  //   };

  //   handleFormSubmit = event => {
  //     // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //     event.preventDefault();
  //    //recipe search forexample:chicken
  //     API.getClient(this.state.clientSearch)
  //       .then(res => {
  //         console.log(res.data);
  //         this.setState({ recipes: res.data });
  //       })
  //       .catch(err => console.log(err));
  //   };





  updateValue(text, field) {
    // console.warn(text)
    if (field == 'first Name') {
      this.setState({
        firstName: text,
      })
    }
    else if (field == 'last Name') {
      this.setState({
        lastName: text,
      })
    }
    else if (field == 'email') {
      this.setState({
        email: text,
      })
    }
    else if (field == 'gender') {
      this.setState({
        gender: text,
      })
    }
    else if (field == 'height') {
      this.setState({
        height: text,
      })
    }
    else if (field == 'weight') {
      this.setState({
        weight: text,
      })
    }
    else if (field == 'body fat') {
      this.setState({
        bodyFat: text,
      })
    }
    else if (field == 'date') {
      this.setState({
        dob: text,
      })
    }
    else {
      this.setState({
        note: text,
      })
    }
  }

  submit() {
    let collection = {}
    collection.firstName = this.state.firstName,
      collection.lastName = this.state.lastName,
      collection.email = this.state.email,
      collection.gender = this.state.gender,
      collection.height = this.state.height,
      collection.weight = this.state.weight,
      collection.bodyFat = this.state.bodyFat,
      collection.dob = this.state.dob,
      console.warn(this.state.dob);
    collection.note = this.state.note,

      console.warn(collection);

    //1 we should define our own URL
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

    //2 axios({
    //     method: 'post',
    //     url: 'http://localhost:3001/',
    //     data: {
    //         collection
    //     }
    // });

    // 3 router.get("/recipes", (req, res) => {
    //     axios
    //       .get("http://www.recipepuppy.com/api/", { params: req.query })
    //       .then(({ data: { results } }) => res.json(results))
    //       .catch(err => res.status(422).json(err));
    // });



  }
  render() {
    return (
      <View style={styles.newClientsform}>
        <ScrollView contentContainerStyle={styles.scrollView}>

          <Card style={styles.card}>
            <Text style={styles.header}>Add New Client</Text>
          </Card>

          <TextInput
            style={styles.TextInput}
            placeholder='First Name'
            onChangeText={(text) => this.updateValue(text, 'first Name')} />

          <TextInput
            style={styles.TextInput}
            placeholder='Last Name'
            onChangeText={(text) => this.updateValue(text, 'last Name')} />

          <TextInput
            style={styles.TextInput}
            placeholder='email'
            onChangeText={(text) => this.updateValue(text, 'email')} />

          <TextInput
            style={styles.TextInput}
            placeholder='Gender'
            onChangeText={(text) => this.updateValue(text, 'gender')} />

          <TextInput
            style={styles.TextInput}
            placeholder='Height'
            onChangeText={(text) => this.updateValue(text, 'height')} />

          <TextInput
            style={styles.TextInput}
            placeholder='Weight'
            onChangeText={(text) => this.updateValue(text, 'weight')} />

          <TextInput
            style={styles.TextInput}
            placeholder='Body Fat'
            onChangeText={(text) => this.updateValue(text, 'body fat')} />

          <Text>Date of Birth:</Text>
          <MyDatePicker />
          <TextArea
            style={styles.TextArea}
            numberOfLines={10}
            multiline={true}
            onChangeText={(text) => this.updateValue(text, 'Note')} />


          <PrimaryButton
            text='Progress Report'
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.button} />

          <PrimaryButton
            text='Sessions'
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.button} />

          <TouchableOpacity
            onPress={() => this.submit()}
            style={styles.button} >
            <Text style={styles.btntext}>create Client</Text>
          </TouchableOpacity>


        </ScrollView>
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
    color: 'black',
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
  TextArea: {
    height: 150,
    justifyContent: "flex-start",
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    borderColor: 'transparent'
  },

});