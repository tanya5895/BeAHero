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
import {Button} from 'react-native';

const screens = {
  home: {
    screen: Home,
  },
  donate: {
    screen: Donate,
  },
  takeDonation: {
    screen: TakeDonation,
  },
  volunteer: {
    screen: Volunteer,
  },
  editDonation: {
    screen: EditResource,
  },
  addDonation: {
    screen: AddResource,
  },
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
