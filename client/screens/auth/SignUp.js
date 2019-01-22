// import React from 'react';
// import {
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Button
// } from 'react-native';
// import { WebBrowser, ImagePicker, Permissions } from 'expo';
// import { Card } from 'native-base';

// import { MonoText } from '../../components/StyledText';

// // import PrimaryButton from '../components/PrimaryButton';
// import OutlineButton from '../../components/OutlineButton';
// import GripHeader from '../../components/GripHeader';
// import TextInput from '../../components/TextInput';
// import API from "../../utils/API";

// export default class SignUp extends React.Component {

//   static navigationOptions = ({ navigation }) => {
//     return {
//       header:
//         <GripHeader />
//     }
//   };

//   state = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     repeatPassword: '',
//     image: ''
//   };

//   signUp = () => {
//     // deconstruct state object
//     const { email, password, firstName, lastName, image } = this.state;

//     // create newUser object to be sent to database
//     const newUser = { email, password, firstName, lastName, image };

//     API.registerUser(newUser)
//       .then(res => {
//         console.log("SUCCESSFUL SIGNUP")
//         this.handleLoginRedirect(res.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   };

//   _pickImage = async () => {

//     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//     if (status === 'granted') {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         allowsEditing: true,
//         aspect: [4, 3],
//       });

//       console.log(result);

//       if (!result.cancelled) {
//         this.setState({ photo: result.uri });
//       }
//     } else {
//       throw new Error('Camera roll permission not granted');
//     }
//   };


//   handleLoginRedirect = (userObj) => {
//     const navigateAction = NavigationActions.navigate({
//       routeName: "Home",
//       params: { data: userObj }
//     });
//     this.props.navigation.dispatch(navigateAction);
//     // this.props.navigation.goBack();
//   };

//   // async componentDidMount() {
//   //   const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
//   //   if (permission.status !== 'granted') {
//   //     const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//   //     if (newPermission.status === 'granted') {
//   //       //it's granted.
//   //     }
//   //   } else {
//   //   }
//   // }

//   render() {

//     let { image } = this.state;

//     return (

//       <View style={styles.container}>
//         <ScrollView contentContainerStyle={styles.scrollView}>


//           <Card style={styles.card}>
//             <Text style={styles.h1}>TRAINER SIGN-UP</Text>
//             <Text style={styles.h2}>Enter your information in the fields below.</Text>
//           </Card>

//           <View style={styles.containerInline}>
//             <TextInput placeholder="First Name" style={styles.textInputHalf} />
//             <TextInput placeholder="Last Name" style={styles.textInputHalf} />
//           </View>

//           <TextInput placeholder="Email" style={styles.textInput} />
//           <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={true} />
//           <TextInput placeholder="Repeat Password" style={styles.textInput} secureTextEntry={true} />


//           <OutlineButton
//             text='Choose a Profile Picture'
//             onPress={this._pickImage}
//             style={styles.button2} />

//           {image &&
//             <Image source={{ uri: image }} style={{ width: 200, height: 200, margin: 20 }} />}

//           {/* <PrimaryButton
//             text='Create Account'
//             onPress={() => this.props.navigation.navigate('Home')}
//             style={styles.button} /> */}

//           <View>
//             <Button onPress={this.signUp} title="Sign Up" />
//           </View>

//         </ScrollView>
//       </View>
//     );
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
//     /* flex: 1, */
//     backgroundColor: 'transparent',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%'
//   },
//   containerInline: {
//     flexWrap: 'wrap',
//     padding: 0,
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     width: '82%',
//   },
//   textInput: {
//     width: '80%',
//     margin: 10,
//     /* marginLeft: 15, */
//     backgroundColor: 'white'
//   },
//   textInputHalf: {
//     width: '46%',
//     margin: 10,
//     /* marginLeft: 15, */
//     padding: 0,
//     backgroundColor: 'white'
//   },
//   button: {
//     alignSelf: 'center',
//     marginTop: 20,
//     marginBottom: 30,
//     backgroundColor: 'blue'
//   },
//   button2: {
//     alignSelf: 'center',
//     marginTop: 20,
//     marginBottom: 10,
//     /* backgroundColor: 'green', */
//     /* width: '80%', */
//     /* justifyContent: 'center' */
//   },
//   card: {
//     marginBottom: 20,
//     width: '90%',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//     shadowColor: 'transparent',
//     borderColor: 'transparent'
//   },
//   h1: {
//     fontWeight: 'bold',
//     fontSize: 28,
//     padding: 10,
//     color: 'blue'
//   },
//   h2: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     padding: 5,
//     color: 'blue'
//   }
// });


import React, { Component } from 'react';
import { Button, Image, View } from "react-native";
import { Container, Header, Content, Form, Item, Input, Label, Text, Thumbnail } from 'native-base';
import { NavigationActions } from "react-navigation";
import { ImagePicker, Permissions } from 'expo';
import API from "../../utils/API";

export default class SignUp extends Component {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    photo: ''
  }

  signUp = () => {
    // deconstruct state object
    const { email, password, firstName, lastName, photo } = this.state;

    // create newUser object to be sent to database
    const newUser = { email, password, firstName, lastName, photo };

    API.registerUser(newUser)
      .then(res => {
        console.log("SUCCESSFUL SIGNUP")
        this.handleLoginRedirect(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  _pickImage = async () => {

    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      console.log(result);

      if (!result.cancelled) {
        this.setState({ photo: result.uri });
      }
    } else {
      throw new Error('Camera roll permission not granted');
    }
  };

  handleLoginRedirect = (userObj) => {
    const navigateAction = NavigationActions.navigate({
      routeName: "Home",
      params: { data: userObj }
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input name='email' onChangeText={(value) => this.setState({ email: value })} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={(value) => this.setState({ password: value })} />
            </Item>
            <Item floatingLabel last>
              <Label>First Name</Label>
              <Input onChangeText={(value) => this.setState({ firstName: value })} />
            </Item>
            <Item floatingLabel last>
              <Label>Last Name</Label>
              <Input onChangeText={(value) => this.setState({ lastName: value })} />
            </Item>
            <Item fixedLabel disabled style={{ paddingTop: "10%", justifyContent: "flex-end" }}>
              <Label>Profile Picture</Label>

              <Text note style={{ marginRight: '20%' }}>{this.state.photo ? "uploaded profile picture" : null}</Text>
            </Item>
            <Button onPress={this._pickImage} title="Upload from Photo Library" />
            <View style={{ justifyContent: 'center' }}>
              {/* {this.state.image === null ? null :
                <Image large source={{ uri: this.state.image }} resizeMethod='scale' resizeMode='contain' style={{width: '100%', height: 200}}/>}   */}
            </View>
            <View>
              <Button onPress={this.signUp} title="Sign Up" />
            </View>
          </Form>



        </Content>
      </Container>
    );
  }
}