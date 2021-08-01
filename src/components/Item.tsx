import React, {Component} from 'react';
import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import {Colors} from '../styles/Colors';
import {RowContainer, VerticalContainer} from '../styles/Global';
import {Footnote, Headline} from '../styles/Typography';

interface Props {
  image: ImageSourcePropType;
  title: string;
  date?: string;
  address: string;
}

export default class Item extends Component<Props> {
  render() {
    return (
      <TouchableOpacity style={{width: '100%'}}>
        <RowContainer
          style={{
            width: '100%',
            justifyContent: 'flex-start',
            borderBottomWidth: 1,
            borderBottomColor: Colors.lightGray,
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          <Image
            source={this.props.image}
            style={{width: 50, height: 50, borderRadius: 50}}
          />
          <VerticalContainer style={{marginLeft: 10, alignItems: 'flex-start'}}>
            <Headline style={{color: Colors.black}}>
              {this.props.title}
            </Headline>
            {this.props.date && (
              <Footnote style={{color: Colors.black}}>
                Appointment Date : {this.props.date}
              </Footnote>
            )}
            <Footnote style={{color: Colors.black}}>
              Address : {this.props.address}
            </Footnote>
          </VerticalContainer>
        </RowContainer>
      </TouchableOpacity>
    );
  }
}
