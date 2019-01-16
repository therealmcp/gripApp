import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';


const TestButton = (props) => {
  
    return (
      
        
          <Button primary onPress={props.onPress} style={styles.button}>
            <Text> {props.text} </Text>
          </Button>
      
    );

  }

  export default TestButton;

  styles = StyleSheet.create({
      button: {
          backgroundColor: 'red',
          alignSelf: 'center'
      },
  }
  )