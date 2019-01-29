import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const TextInput = (props)=>{

    return (
        
        <Item regular style={props.style}>
            <Text numberOfLines={5}>
                {this.state.bodyText}
            </Text>
        </Item>
    );
}






export default Text;
