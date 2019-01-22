import React, {Component} from "react";
import { Container, Header, Content, Textarea, Form } from "native-base";

export default class TextArea extends Component {
  render() {
    return (
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Notes:" />
          </Form>
    );
  }
}

