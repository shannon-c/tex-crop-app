import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ReportScreen from '../screens/ReportScreen';
import ServiceScreen from '../screens/ServiceScreen';
import {Colors} from '../styles/Colors';

type RootStackParamList = {
  Home: any;
  Report: any;
  Services: any;
  Profile: any;
  Login: any;
};

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.activeGreen,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName = '';
          switch (route.name) {
            case 'Home':
              iconName = 'ios-home';
              break;
            case 'Report':
              iconName = 'bar-chart';
              break;
            case 'Services':
              iconName = 'navigate-circle';
              break;
            case 'Profile':
              iconName = 'md-book';
              break;
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? Colors.activeGreen : Colors.inactiveGrey}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Services" component={ServiceScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default class AppNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
