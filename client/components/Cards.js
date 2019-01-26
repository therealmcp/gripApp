import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';



const Cards = (props) => {


    return (
       
      
    
          <Card style={props.style}>
            <CardItem>
              <Body>
                <Text style={{alignSelf: "center"}}>
                  {props.text1}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{alignSelf: "center"}}>
                  {props.text2}
                </Text>
              </Body>
            </CardItem>
          </Card>
      
    );
  };


export default Cards;