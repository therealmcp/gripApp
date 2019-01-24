import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text } from 'native-base';


const GripDatePicker = (props) => {
  
    return (
        <Content>
          <DatePicker
            defaultDate={new Date(2018, 20, 1)}
            minimumDate={new Date(1970, 1, 1)}
            maximumDate={new Date(2019, 1, 20)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText={props.placeholder}
            textStyle={{ color: "black" }}
            placeHolderTextStyle={{ color: "black" }}
            onDateChange={props.onDateChange}
            disabled={false}
            />
            {/* <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}
        </Content>
    );
  }

  export default GripDatePicker;