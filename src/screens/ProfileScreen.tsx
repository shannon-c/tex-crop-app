import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HomeMapping from '../assets/home_map.jpg';
import TexCropLogo from '../assets/logo_texcrop.png';
import ProfileFace from '../assets/profile_face.jpg';
import Button from '../components/Button';
import Item from '../components/Item';
import {Container, RowContainer, VerticalContainer} from '../styles/Global';
import {Body, Headline, Title2} from '../styles/Typography';

interface Props {
  navigation: any;
}

export default class ProfileScreen extends Component<Props> {
  state = {
    modalVisible: false,
    selectedContent: null,
  };

  handleNavigateLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <Container>
        <ScrollView style={{flex: 1}}>
          <VerticalContainer style={{width: '90%', alignSelf: 'center'}}>
            <RowContainer
              style={{
                marginTop: 15,
                justifyContent: 'flex-start',
                width: '100%',
              }}>
              <Image source={TexCropLogo} style={{width: 35, height: 35}} />
              <Title2 style={{marginLeft: 10, fontWeight: 'bold'}}>
                Profile
              </Title2>
            </RowContainer>

            <View style={{marginTop: 20}} />

            <VerticalContainer style={{width: '100%'}}>
              <Image
                source={ProfileFace}
                style={{
                  height: 180,
                  width: 180,
                  borderRadius: 180,
                  marginBottom: 20,
                }}
              />
              <VerticalContainer
                style={{alignSelf: 'flex-start', alignItems: 'flex-start'}}>
                <Body>Name : Louis</Body>
                <Body style={{marginTop: 10, marginBottom: 10}}>
                  Waste Recycled : 10MT
                </Body>
                <Body>Account Balance : RM50</Body>
              </VerticalContainer>
              <Button
                style={{width: 120, marginTop: 25}}
                title="Log Out"
                onPress={this.handleNavigateLogin}
              />
            </VerticalContainer>
            <View style={{marginTop: 40}} />
            <Headline style={{alignSelf: 'flex-start', marginBottom: 5}}>
              My Plantation
            </Headline>
            <Item
              image={HomeMapping}
              title="Plantation A"
              address="Balik Pulau,Penang,Malaysia"
            />
          </VerticalContainer>
        </ScrollView>
      </Container>
    );
  }
}
