import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text } from 'native-base';


export default class DatePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
    this.state = { text: 'date of birth'};
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
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
            placeHolderText={this.props.placeholder}
            textStyle={{ color: "black" }}
            placeHolderTextStyle={{ color: "black" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            {/* <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}
        </Content>
    );
  }
}