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
  ImageBackground
} from 'react-native';
import { WebBrowser } from 'expo';
import { Card } from 'native-base';
import { Font } from 'expo';


import { MonoText } from '../components/StyledText';
import TextInput from '../components/TextInput';
import PrimaryButton from '../components/PrimaryButton';


export default class LandingPage extends React.Component {
  
  componentDidMount() {
    Font.loadAsync({
      'Staatliches-Regular': require('../assets/fonts/Staatliches-Regular.ttf/'),
    });
  };





  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground
      source={require('../assets/images/athletes.jpg')}    
      style={{  flex: 1,
      width: '100%', // applied to Image
      height: '100%' 
    }}
    >
   
      <View style={styles.container}>

<View style={styles.titles}>
        {/* <Card style={styles.card}> */}
          <Text style={styles.h1}>grip</Text>
          <Text style={styles.h2}>Your Clients, Their Progress</Text>
        {/* </Card> */}

</View>
        <TextInput placeholder="Email" style={styles.textInput}/>
        <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={true}/>

        <PrimaryButton 
          text="Log In" style={styles.button} 
          onPress={() => this.props.navigation.navigate('Home')}/> 

        <Button title='Sign Up' onPress={() => this.props.navigation.navigate('SignUp')} />

      </View>
      </ImageBackground>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'mintcream',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '80%',
    margin: 10,
    backgroundColor: 'white'
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'blue'
    
  },
  card: {
    marginBottom: '30%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    // shadowColor: 'transparent',
    // borderColor: 'transparent'
  },
  h1: {
    // fontFamily: 'Staatliches-Regular',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 52,
    padding: 5,
    color: 'royalblue',
    textShadowColor: '#000000',
    textShadowOffset: {width: 2.5, height:2.5},
    
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 28,
    padding: 5,
    color: 'royalblue',
    textAlign: 'center',
    textShadowColor:'#000000',
    textShadowOffset:{width: 2.5, height: 2.5},
    

    

  },
  titles: {
    marginBottom: 90,
    zIndex: 5,

  }

});
