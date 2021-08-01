import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../styles/Colors';
import {VerticalContainer} from '../styles/Global';
import {Headline} from '../styles/Typography';

interface Props {
  style: any;
  title: string;
  onPress?: () => void;
}
export default class Button extends Component<Props> {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <ButtonContainer style={this.props.style}>
          <Headline style={{color: '#fff'}}>{this.props.title}</Headline>
        </ButtonContainer>
      </TouchableOpacity>
    );
  }
}

const ButtonContainer = styled(VerticalContainer)`
  background-color: ${Colors.activeGreen};
  height: 44px;
  border-radius: 10px;
`;
