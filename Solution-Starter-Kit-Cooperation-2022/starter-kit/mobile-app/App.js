import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Donate from './src/screens/Donate';
import TakeDonation from './src/screens/takeDonation';
import Volunteer from './src/screens/volunteer';
import Home from './src/screens/home';
import MyResources from './src/screens/resources-my';
import EditResource from './src/screens/resource-edit';
import AddResource from './src/screens/resource-add';
import {createAppContainer} from 'react-navigation';
import {Button, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Map from './src/screens/map';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createApppContainer, Navigator} from 'react-navigation';

const screens = {
  home: {
    screen: Home,
  },
  donate: {
    screen: Donate,
    navigationOptions: {
      title: 'Your services',
    },
  },
  takeDonation: {
    screen: TakeDonation,
    navigationOptions: {
      title: 'Take a service',
    },
  },
  volunteer: {
    screen: Volunteer,
    navigationOptions: {
      title: 'Volunteer',
    },
  },
  editDonation: {
    screen: EditResource,
    navigationOptions: {
      title: 'Edit service',
    },
  },
  addDonation: {
    screen: AddResource,
    navigationOptions: {
      title: 'Add a service',
    },
  },
  map: {
    screen: Map,
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee'},
  },
});

export default createAppContainer(HomeStack);
