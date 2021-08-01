import React, {Component} from 'react';
import {Image, View} from 'react-native';
import TexCropLogo from '../assets/logo_texcrop.png';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import {Colors} from '../styles/Colors';
import {Container, RowContainer, VerticalContainer} from '../styles/Global';
import {Footnote, Title2} from '../styles/Typography';

interface Props {
  navigation: any;
}

export default class LoginScreen extends Component<Props> {
  handleNavigateToHome = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <Container>
        <VerticalContainer style={{flex: 1}}>
          <RowContainer>
            <Image source={TexCropLogo} style={{width: 35, height: 35}} />
            <Title2 style={{marginLeft: 10, fontWeight: 'bold'}}>
              Tex Crop
            </Title2>
          </RowContainer>
          <TextInput
            style={{
              width: '80%',
              marginTop: 20,
              marginBottom: 10,
            }}
            placeholder="Email Address"
          />
          <TextInput
            style={{
              width: '80%',
            }}
            placeholder="Password"
          />
          <RowContainer style={{width: '80%', marginTop: 30}}>
            <View style={{flex: 1}} />
            <VerticalContainer>
              <Button
                style={{width: 100}}
                title="Sign In"
                onPress={this.handleNavigateToHome}
              />
              <Footnote style={{marginTop: 10, color: Colors.gray}}>
                Version 1.0.0
              </Footnote>
            </VerticalContainer>
          </RowContainer>
        </VerticalContainer>
      </Container>
    );
  }
}
