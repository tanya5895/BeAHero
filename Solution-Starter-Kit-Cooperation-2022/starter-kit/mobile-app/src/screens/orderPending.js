import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
const styles = StyleSheet.create({
  orderStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
class OrderPending extends Component {
  render() {
    return (
      <View style={styles.orderStyle}>
        <Text style={{color: '#008000', fontSize: 30}}>Request Sent ! :)</Text>
        <Text>Confirmation pending ....</Text>
      </View>
    );
  }
}

export default OrderPending;
