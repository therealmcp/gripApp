import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';



const Cards = (props) => {


    return (
       
      
    
          <Card style={{width: '80%'}}>
            <CardItem>
              <Body>
                <Text>
                  {props.text1}
                </Text>
                <Text>
                  {props.text2}
                </Text>
              </Body>
            </CardItem>
          </Card>
      
    );
  };


export default Cards;