import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Button } from 'native-base';
import CardImage from '../components/CardImage';
import { MonoText } from '../components/StyledText';

import GripHeader from '../components/GripHeader';
import PrimaryButton from '../components/PrimaryButton';
import Link from '../components/Link';
import Cards from '../components/Cards';
import PlusButton from '../components/PlusButton';
// import Graph from '../components/Graph';
import Graph2 from '../components/Graph2'



export default class Progress extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
          header: 
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <GripHeader/>
            </TouchableOpacity>
          }
        };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText} >Progress</Text>
       <Text>Graph Goes Here</Text>
       <View>
        {/* <Graph/> */}
        <Graph2/>
        </View>
          <PrimaryButton 
            text='Back to Home' 
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.button}
          />
        
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
  button: {
    margin:20,
    alignSelf: 'center',
    backgroundColor: 'blue'
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 17,

  }, 
   
});