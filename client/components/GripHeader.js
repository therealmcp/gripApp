import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';


const GripHeader = () => {
  
    return (
        
                <Header style={styles.header}>
                    <Body>
                        <Title style={styles.title}>GRIP</Title>
                    </Body>
                </Header>
    );
  };

  styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'blue'
    },
    title: {
        color: 'white'
    }
});

export default GripHeader;
