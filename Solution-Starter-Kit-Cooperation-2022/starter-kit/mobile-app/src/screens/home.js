// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Image,
//   Text,
//   TouchableOpacity,
//   Button,
//   Linking,
//   Alert,
// } from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
// // import {Router, Scene} from 'react-native-router-flux';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    paddingTop: 75,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    paddingLeft: '100%',
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    color: '#323232',
    paddingBottom: 15,
  },
  subtitle: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 24,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    textDecorationLine: 'underline',
    paddingBottom: 5,
    paddingTop: 100,
    textAlign: 'center',
  },
  content: {
    fontFamily: 'IBMPlexSans-Light',
    color: '#323232',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  buttonGroup: {
    flex: 1,
    paddingTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1062FE',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    marginTop: 15,
  },
});

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

class Home extends Component {
  state = {};
  pressHanlder(navigationProp) {
    console.log('here', navigationProp.navigate('donate'));
  }
  render() {
    return (
      <View style={styles.center}>
        <ScrollView style={styles.scroll}>
          <Image
            style={styles.image}
            source={require('../images/2020-cfc-512.png')}
          />
          <View style={styles.buttonGroup}>
            <Text style={styles.title}>BE A HERO</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('donate')}
              style={styles.button}>
              <Text>donate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('takeDonation')}
              style={styles.button}>
              <Text>Take donation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('volunteer')}
              style={styles.button}>
              <Text>volunteer</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
