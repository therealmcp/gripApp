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

import { MonoText } from '../components/StyledText';

import GripHeader from '../components/GripHeader';
import PrimaryButton from '../components/PrimaryButton';

export default class Home extends React.Component {

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

        <Text>Welcome home!</Text>
        <PrimaryButton 
            text='Back to Landing' 
            onPress={() => this.props.navigation.navigate('Landing')}
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
    alignSelf: 'center',
    backgroundColor: 'blue'
  }
});