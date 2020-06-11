import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
const styles = StyleSheet.create({
  acceptButton: {
    backgroundColor: '#4caf50',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 10,
    overflow: 'hidden',
    padding: 10,
    textAlign: 'center',
    // marginTop: 15,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 10,
    width:100,
  },
  viewConfirmation: {
    backgroundColor: '#f5a31a',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 10,
    overflow: 'hidden',
    padding: 10,
    textAlign: 'center',
    // marginTop: 15,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 10,
    width:140,
  },
});
class Accept extends Component {
  state = {};
  renderButton(props) {
    if (props.name.name == 'Request' || props.name.name == 'Accept') {
      return <Text style={styles.acceptButton}>{this.props.name.name}</Text>;
    } 
    else {
      return (
        <Text style={styles.viewConfirmation}>{this.props.name.name}</Text>
      );
    }
  }
  render() {
    return (
      //   <TouchableOpacity
      //     style={{alignItems: 'flex-end'}}
      //     onPress={() => {
      //       console.log('clicked ', this.props);
      //       this.props.name.nav.navigate(this.props.name.screen);
      //     }}>
      this.renderButton(this.props)

      //   </TouchableOpacity>
    );
  }
}

export default Accept;
