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
    height: '80%',
    width: '80%',
    resizeMode: 'contain',
    paddingLeft: '100%',
  },
  title: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 36,
    color: '#323232',
    paddingBottom: 15,
  },
  subtitle: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 24,
    color: '#ffffff',
    paddingBottom: 5,
    paddingTop: 5,
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
    paddingTop: 5,
    width: '100%',
    paddingLeft: '30%',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    marginTop: 15,
    borderRadius: 10,
  },
});

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

class Home extends Component {
  state = {};
  render() {
    return (
      <View style={styles.center}>
        <ScrollView style={styles.scroll}>
          <View style={styles.buttonGroup}>
            <Text style={styles.title}>BE A HERO</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('donate')}
              style={styles.button}>
              <Text style={styles.subtitle}>Give service</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('takeDonation')}
              style={styles.button}>
              <Text style={styles.subtitle}>Take service</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('volunteer')}
              style={styles.button}>
              <Text style={styles.subtitle}>volunteer</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => this.props.navigation.navigate('map')}
              style={styles.button}>
              <Text style={styles.subtitle}>Possible gatherings</Text>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
