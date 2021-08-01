import React, {Component} from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components';

const screenWidth = 200;

interface Props {
  style: any;
  value?: string;
  placeholder: string;
  onChangeText?: () => void;
}

export default class TextInputCustom extends Component<Props> {
  render() {
    return (
      <InputText
        style={this.props.style ? this.props.style : {}}
        value={this.props.value}
        onChangeText={this.props.onChangeText}
        placeholder={this.props.placeholder}
      />
    );
  }
}

const InputText = styled(TextInput)`
  width: 100px;
  height: ${screenWidth < 500 ? 44 : 50}px;
  display: flex;
  padding-left: 5px;
  border: solid 1px #ddd;
  border-radius: 10px;
  text-align: left;
  font-size: 16px;
  color: #ffffff;
`;
