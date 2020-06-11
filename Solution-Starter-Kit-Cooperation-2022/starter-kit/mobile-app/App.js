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
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createApppContainer, Navigator} from 'react-navigation';
import EntryLoginPage from './src/screens/entryLoginPage';
import NgoPage from './src/screens/ngoPage';
import SignUpAsUser from './src/screens/signUpAsUser';
import SignUpAsNGO from './src/screens/signUpAsNgo';

const screens = {
  entryLoginPage: {
    screen: EntryLoginPage,
  },

  home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },

  ngoPage: {
    screen: NgoPage,
    navigationOptions: {
      title: 'NGO Dashboard',
    },
  },
  signUpAsUser: {
    screen: SignUpAsUser,
    navigationOptions: {
      title: 'User Sign Up',
    },
  },

  signUpAsNgo: {
    screen: SignUpAsNGO,
    navigationOptions: {
      title: 'NGO Sign Up',
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
