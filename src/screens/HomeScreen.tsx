import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HomeMapping from '../assets/home_map.jpg';
import HomeSpraying from '../assets/home_spraying.jpg';
import HomeWaste from '../assets/home_waste.jpg';
import TexCropLogo from '../assets/logo_texcrop.png';
import Card from '../components/Card';
import {Colors} from '../styles/Colors';
import {Container, RowContainer, VerticalContainer} from '../styles/Global';
import {Body, Headline, Title2} from '../styles/Typography';

export default class HomeScreen extends Component {
  state = {
    modalVisible: false,
    selectedContent: null,
  };

  handleModalVisible = (visible: boolean) => {
    // this.setState({
    //   modalVisible: visible,
    // });
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
                Tex Crop
              </Title2>
            </RowContainer>

            <RowContainer style={{width: '100%', marginTop: 20}}>
              <VerticalContainer style={{alignItems: 'flex-start', flex: 1}}>
                <Headline style={{color: Colors.black}}>
                  Account Balance
                </Headline>
                <Body style={{color: Colors.black}}>RM100</Body>
              </VerticalContainer>
              <View
                style={{
                  height: '100%',
                  backgroundColor: Colors.lightGray,
                  width: 1,
                  marginRight: 20,
                }}
              />
              <VerticalContainer style={{alignItems: 'flex-start', flex: 1}}>
                <Headline style={{color: Colors.black}}>
                  Waste Collected
                </Headline>
                <Body style={{color: Colors.black}}>10MT</Body>
              </VerticalContainer>
            </RowContainer>

            <View style={{marginTop: 35}} />
            <Card
              image={HomeWaste}
              title="Rice and Palm Oil Waste Collection"
              description="Tex Crop logistic team purchases rice husk/rice straw from paddy field while purchases palm oil truck from palm oil plantation"
              onPress={this.handleModalVisible.bind(this, true)}
            />
            <View style={{marginTop: 35}} />
            <Card
              image={HomeSpraying}
              title="Drone Spraying Services"
              description="Tex Crop logistic team maps your plantation on a competitive pricing. This allows you to gather a better metrics on your plantation"
              onPress={this.handleModalVisible.bind(this, true)}
            />
            <View style={{marginTop: 35}} />
            <Card
              image={HomeMapping}
              title="Drone Mapping Services"
              description="Tex Crop logistic team maps your plantation on a competitive pricing. This allows you to gather a better metrics on your plantation"
              onPress={this.handleModalVisible.bind(this, true)}
            />
            <View style={{marginTop: 35}} />
          </VerticalContainer>
        </ScrollView>
      </Container>
    );
  }
}
