import React, { Component } from 'react';
import { View, Text } from 'react-desktop/osx';

export default class extends Component {
  render() {
    return (
      <View
        background="black"
        padding="20px"
        horizontalAlignment="center"
        verticalAlignment="center"
        width="200px"
        height="200px"
      >
        <Text color="white">Hello World</Text>
      </View>
    );
  }
}
