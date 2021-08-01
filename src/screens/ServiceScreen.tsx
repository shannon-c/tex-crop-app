import React, {Component} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeMapping from '../assets/home_map.jpg';
import HomeDrone from '../assets/home_spraying.jpg';
import HomeWaste from '../assets/home_waste.jpg';
import TexCropLogo from '../assets/logo_texcrop.png';
import Button from '../components/Button';
import Item from '../components/Item';
import TextInput from '../components/TextInput';
import {Colors} from '../styles/Colors';
import {Container, RowContainer, VerticalContainer} from '../styles/Global';
import {Title2} from '../styles/Typography';

interface Props {
  navigation: any;
}

export default class ServiceScreen extends Component<Props> {
  state = {
    editMode: false,
  };

  handleEditModel = (editMode: boolean) => {
    this.setState({
      editMode,
    });
  };

  renderContent = () => {
    if (this.state.editMode) {
      return (
        <>
          <TextInput
            style={{
              width: '100%',
              marginTop: 15,
              marginBottom: 10,
            }}
            placeholder="Type of Service"
          />
          <TextInput
            style={{
              width: '100%',
              marginBottom: 10,
            }}
            placeholder="Appointment Date"
          />
          <TextInput
            style={{
              width: '100%',
              marginBottom: 10,
            }}
            placeholder="Appointment Address"
          />
          <RowContainer style={{width: '100%'}}>
            <View style={{flex: 1}} />
            <Button
              style={{marginTop: 10, padding: 10}}
              title="Schedule"
              onPress={this.handleEditModel.bind(this, false)}
            />
          </RowContainer>
        </>
      );
    } else {
      return (
        <>
          <Item
            image={HomeWaste}
            title="Rice Husk/Straw Waste Collection"
            date="10/7/2021"
            address="Balik Pulau,Penang,Malaysia"
          />
          <Item
            image={HomeMapping}
            title="Drone Mapping Service"
            date="25/6/2021"
            address="Balik Pulau,Penang,Malaysia"
          />
          <Item
            image={HomeDrone}
            title="Drone Spraying Service"
            date="20/5/2021"
            address="Balik Pulau,Penang,Malaysia"
          />
        </>
      );
    }
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
              {this.state.editMode ? (
                <TouchableOpacity
                  onPress={this.handleEditModel.bind(this, false)}>
                  <Ionicons
                    name="arrow-back-outline"
                    size={32}
                    color={Colors.activeGreen}
                  />
                </TouchableOpacity>
              ) : (
                <Image source={TexCropLogo} style={{width: 35, height: 35}} />
              )}

              <Title2 style={{marginLeft: 10, fontWeight: 'bold'}}>
                {this.state.editMode ? 'Schedule A Service' : 'Services'}
              </Title2>
              <View style={{flex: 1}} />
              {!this.state.editMode && (
                <Button
                  style={{padding: 10}}
                  title="Request A Service"
                  onPress={this.handleEditModel.bind(this, true)}
                />
              )}
            </RowContainer>

            <View style={{marginTop: 20}} />
            {this.renderContent()}

            <View style={{marginTop: 35}} />
          </VerticalContainer>
        </ScrollView>
      </Container>
    );
  }
}
