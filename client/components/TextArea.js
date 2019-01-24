import React, {Component} from "react";
import { Container, Header, Content, Textarea, Form } from "native-base";

const TextArea = (props) => {
  
    return (
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Notes:" 
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            numberOfLines={props.numberOfLines}
            multiline={props.multiline}/>
          </Form>
    );
  }

  export default TextArea;

