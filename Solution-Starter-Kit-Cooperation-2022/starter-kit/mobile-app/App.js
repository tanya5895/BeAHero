import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Donate from './src/screens/Donate';
import TakeDonation from './src/screens/takeDonation';
import Volunteer from './src/screens/volunteer';
import Home from './src/screens/home';
import {createAppContainer} from 'react-navigation';

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
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
