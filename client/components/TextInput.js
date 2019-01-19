import React, { Component } from 'react';
import { Container, Header, Content, Input, Item } from 'native-base';


const TextInput = (props) => {
  
    return (
      
        
          <Item regular style={props.style}>
            <Input 
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}/>
          </Item>
        
     
    );

}

export default TextInput;
