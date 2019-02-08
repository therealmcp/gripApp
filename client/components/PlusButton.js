import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';



const PlusButton = (props) => {


    return (
       
       
        
        
         
          <Content style={{top:50}}>
          <Button iconLeft transparent primary onPress={props.onPress} >
            <Icon name='person' style={{color: 'blue', fontSize: 40}}/>
            <Text>{props.text}</Text>
          </Button>
        </Content>
       
   
    
          
      
    );
  };


export default PlusButton;