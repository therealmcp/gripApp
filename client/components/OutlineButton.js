import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Right } from 'native-base';


const OutlineButton = (props) => {
  
    return (

        <Button bordered dark onPress={props.onPress} style={props.style}>
            <Text dark> {props.text} </Text>
        </Button>
      
    );

  }

  export default OutlineButton;