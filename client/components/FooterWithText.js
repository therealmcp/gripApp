import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIcon extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Reports</Text>
            </Button>
            <Button vertical active>
              <Icon active name="person" />
              <Text>Sessions</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>clients</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}