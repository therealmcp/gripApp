import React, { Component } from 'react';
import { Image } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
// import { Container, Header, Content, Thumbnail, Text } from 'native-base';
import { Container, Header, Content, Thumbnail, Text } from 'native-base';




const CardImage = () => {
    return (

    
      
       
      
           
            // <Thumbnail square large source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
           
            <Thumbnail circle large  source={require('../assets/images/griplogo.png')} style={{width: 200, height: 150, top: 30}}/>

          //  source={require('./img/one.png')}
        
      );
    };
         
  
         
 export default CardImage;




