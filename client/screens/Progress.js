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

import GripHeader from '../components/GripHeader';
import Graph from '../components/Graph';
import API from '../utils/API.js';



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


        <Graph />

    );
  }
}