
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity, 
} from 'react-native';
import MyDatePicker from './MyDatePicker'



export default class NewClientsform extends React.Component {
  render() {
    return (
      <View style={styles.newClientsform}>
        <Text style={styles.header}>Add New Client</Text>
        <TextInput style={styles.TextInput} placeholder="First Name"/>
        
        <TextInput style={styles.TextInput} placeholder="last Name"/>
        <TextInput style={styles.TextInput} placeholder="email"/>
        <Text>date of Birth:</Text>
        <MyDatePicker/>
        <TextInput
        style={styles.textArea}
        // underlineColorAndroid="transparent"
        placeholder="Note"
        placeholderTextColor="grey"
        numberOfLines={10}
        multiline={true}/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>create Client</Text>
        </TouchableOpacity>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1, 
  },
  TextInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
  },
  button: {
    alignSelf:'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  }
});