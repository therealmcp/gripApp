import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text } from 'native-base';
import moment from 'moment';


const GripDatePicker = (props) => {

  // formattedDate = (date) => {
  //   return moment(date).format("MMM Do YY")}
  
    return (
        <Content>
          <DatePicker
            formatChosenDate={date => {return moment(date).format('L');}}
            defaultDate={new Date(2018, 20, 1)}
            minimumDate={new Date(1920, 1, 1)}
            maximumDate={new Date(2120, 1, 20)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText={props.placeholder}
            textStyle={{ color: "#0080FF" }}
            // fontSize={{fontSize: 30}}
            placeHolderTextStyle={{ color: "#0080FF" }}
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