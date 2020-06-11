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
class OrderConfirmation extends Component {
  state = {
    confirm: true,
  };
  render() {
    return (
      <View style={styles.orderStyle}>
        <Image
          style={styles.logo}
          source={require('../images/rsz_greentick.png')}
        />
        <Text style={{color: '#008000', fontSize: 30}}>Request Confirmed</Text>
      </View>
    );
  }
}

export default OrderConfirmation;
