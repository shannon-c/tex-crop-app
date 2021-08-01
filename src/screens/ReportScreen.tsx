import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import TexCropLogo from '../assets/logo_texcrop.png';
import ReportNDVI from '../assets/report_ndvi.png';
import ReportSpray from '../assets/report_spray.png';
import Card from '../components/Card';
import {Container, RowContainer, VerticalContainer} from '../styles/Global';
import {Title2} from '../styles/Typography';

export default class ReportScreen extends Component {
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
                Report
              </Title2>
            </RowContainer>

            <View style={{marginTop: 35}} />
            <Card
              image={ReportNDVI}
              title="NDVI Index"
              description="-"
              onPress={this.handleModalVisible.bind(this, true)}
            />
            <View style={{marginTop: 35}} />
            <Card
              image={ReportSpray}
              title="RGB Mapping"
              description="-"
              onPress={this.handleModalVisible.bind(this, true)}
            />
            <View style={{marginTop: 35}} />
          </VerticalContainer>
        </ScrollView>
      </Container>
    );
  }
}
