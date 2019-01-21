import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';



const PlusButton = (props) => {


    return (
       
       
        
        
         
          <Content>
          <Button iconLeft transparent primary onPress={props.onPress} >
            <Icon name='person'/>
            <Text>{props.text}</Text>
          </Button>
        </Content>
       
   
    
          
      
    );
  };


export default PlusButton;