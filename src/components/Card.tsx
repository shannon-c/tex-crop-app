import React, {Component} from 'react';
import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import {Colors} from '../styles/Colors';
import {VerticalContainer} from '../styles/Global';
import {Footnote, Headline} from '../styles/Typography';

interface Props {
  image: ImageSourcePropType;
  title: string;
  description: string;
  onPress?: () => void;
}

export default class Card extends Component<Props> {
  render() {
    return (
      <VerticalContainer style={{width: '100%', alignItems: 'flex-start'}}>
        <TouchableOpacity style={{width: '100%'}} onPress={this.props.onPress}>
          <Image
            source={this.props.image}
            style={{width: '100%', borderRadius: 5, height: 220}}
          />
          <Headline style={{marginTop: 5, color: Colors.black}}>
            {this.props.title}
          </Headline>
          <Footnote
            style={{
              color: Colors.mediumGray,
              textAlign: 'justify',
              lineHeight: 18,
            }}>
            {this.props.description}
          </Footnote>
        </TouchableOpacity>
      </VerticalContainer>
    );
  }
}
