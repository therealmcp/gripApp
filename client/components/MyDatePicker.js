import React from 'react';
import DatePicker from 'react-native-datepicker'

export default class MyDatePicker extends React.Component {
    constructor(props){
      super(props)
      this.state = {date:"05-15-2019"}
    }
   
    render(){
      return (
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="MM-DD-YYYY"
          minDate="05-01-1970"
          maxDate="06-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
      )
    }
  }
  