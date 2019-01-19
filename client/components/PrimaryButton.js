import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Right } from 'native-base';


const PrimaryButton = (props) => {
  
    return (

        <Button primary onPress={props.onPress} style={props.style}>
            <Text> {props.text} </Text>
        </Button>
      
    );

  }


 /*  styles = StyleSheet.create({
      container: {
        flex: 1
      },
      button: {
          alignSelf: 'center',
          backgroundColor: 'red'
      },
  });
 */
  export default PrimaryButton;