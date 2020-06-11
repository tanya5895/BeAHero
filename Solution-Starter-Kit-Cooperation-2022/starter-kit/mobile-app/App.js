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
import SearchResources from './src/screens/resources-search';
import Map from './src/screens/map';
import NewMap from './src/screens/NewMap';
import OrderConfirmation from './src/screens/orderConfirmation';
import OrderPending from './src/screens/orderPending';
const screens = {
  home: {
    screen: Home,
    navigationOptions: {
      title: 'BeAHero',
      headerStyle: {backgroundColor: '#eee'},
    },
  },
  donate: {
    screen: Donate,
    navigationOptions: {
      title: 'Your services',
      headerStyle: {backgroundColor: '#eee'},
    },
  },
  takeDonation: {
    screen: SearchResources,
    navigationOptions: {
      title: 'Take a service',
      headerStyle: {backgroundColor: '#eee'},
    },
  },
  'order confirmation': {
    screen: OrderConfirmation,
    navigationOptions: {
      title: 'Order Confirmation',
      headerStyle: {backgroundColor: '#eee'},
    },
  },
  'order pending': {
    screen: OrderPending,
    navigationOptions: {
      title: 'order pending',
      headerStyle: {backgroundColor: '#eee'},
    },
  },
  volunteer: {
    screen: Volunteer,
    navigationOptions: {
      title: 'Volunteer',
      headerStyle: {backgroundColor: '#eee'},
    },
  },
  editDonation: {
    screen: EditResource,
    navigationOptions: {
      title: 'Edit service',
      headerStyle: {backgroundColor: '#eee'},
    },
  },
  addDonation: {
    screen: AddResource,
    navigationOptions: {
      title: 'Add a service',
      headerStyle: {backgroundColor: '#eee'},
    },
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {backgroundColor: '#eee'},
    headerTintColor: '#444',
  },
});

export default createAppContainer(HomeStack);
