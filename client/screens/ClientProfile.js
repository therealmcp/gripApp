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
      dob: '',
      sex: '',
      height: '',
      weight: '',
      bodyFat: '',
      caloricIntake: '',
      notes:''
    }

    
  render() {

    return (

      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
        
          <Card style={styles.card}>
            <Text style={styles.h1}>Profile for: Client Name</Text>
          </Card>
          

          <PrimaryButton 
              text='Progress Reports' 
              onPress={() => this.props.navigation.navigate('')}
              style={styles.button}/>
          
          <PrimaryButton 
              text='Go to Sessions' 
              onPress={() => this.props.navigation.navigate('Sessions')}
              style={styles.button2}/>


          <Card style={styles.card}>
            <Text style={styles.h1}>Date of Birth:</Text>
            <Text style={styles.h1}>Sex:</Text>
            <Text style={styles.h1}>Height:</Text>
            <Text style={styles.h1}>Weight:</Text>
            <Text style={styles.h1}>Body Fat %:</Text>
            <Text style={styles.h1}>Caloric Intake:</Text>
          </Card>

          <TextInput placeholder="Goal Notes:" style={styles.textInput}/>

          <Button title='Edit Client Info' onPress={() => this.props.navigation.navigate('ClientsPage')} />
          <Button title='Delete Client' onPress={() => this.props.navigation.navigate('ClientsPage')} />
          
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
              text='Back to Client' 
              onPress={() => this.props.navigation.navigate('')}
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


















// me
// export default class ClientProfile extends React.Component {
//   static navigationOptions = ({navigation}) => {
//     return {
//       header:
//        <GripHeader/>
//     }
//   };

//   state = {
//     dob: '',
//     sex: '',
//     height: '',
//     weight: '',
//     bodyFat: '',
//     caloricIntake: '',
//     notes:''
//   }
  
//   render() {

//     return (
//       <View style={styles.container}>

//        <ScrollView contentContainerStyle={styles.scrollView}>>
//        <Text></Text>

//         <PrimaryButton 
//           text='Create Account' 
//           onPress={() => this.props.navigation.navigate('Progress Reports')}
//           style={styles.button}
//         />

//           <PrimaryButton 
//             text='Create Account' 
//             onPress={() => this.props.navigation.navigate('Sessions')}
//             style={styles.button}
//           />

//        </ScrollView>
//       </View>
//     )
//   }
// }






// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'mintcream',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   scrollView: {
//     backgroundColor: 'transparent',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%'
//   }

// });