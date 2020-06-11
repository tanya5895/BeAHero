const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    // paddingLeft: 10,
    // paddingRight: 20,
    // paddingBottom: 25,
    // paddingTop: 75,
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
    paddingLeft: '18%',
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
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    backgroundColor: 'red',
    margin: 3,
    width: 100,
  },
});

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {Avatar, ListItem} from 'react-native-elements';
import {search, userID} from '../lib/utils';

class Home extends Component {
  state = {
    volunteerCount: 0,
    takenCount: 0,
    count: 0,
    items: [],
  };

  UNSAFE_componentWillMount() {
    search({userID: userID()})
      .then(response => {
        for (res of response) {
          console.log('res === ', res);
          if (res.orderPlaced == 'true') {
            this.state.takenCount = this.state.takenCount + 1;
          }
        }
        console.log(this.state.takenCount);
        x = response.length;
        this.setState({
          count: x,
        });
        console.log('x here', x, this.state);
      })
      .catch(err => {
        console.log(err);
        Alert.alert(
          'ERROR',
          'Please try again. If the problem persists contact an administrator.',
          [{text: 'OK'}],
        );
      });
  }
  getCount(count) {
    if (count != '') {
      return count;
    }

    return 0;
  }
  render() {
    console.log('rendering');

    return (
      <View style={styles.center}>
        <ScrollView style={styles.scroll}>
          <View style={styles.buttonGroup}>
            <View style={{alignContent: 'center', paddingTop: 10}}>
              <ListItem
                leftAvatar={{
                  source: {
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  },
                  size: 'large',
                }}
                title={'emmy'}
              />
            </View>
            <View>
              <FlatList
                data={[
                  {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    title: {
                      name: 'services',
                      value: this.getCount(this.state.count),
                    },
                  },
                  {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    title: {name: 'taken', value: this.state.takenCount},
                  },
                  {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    title: {
                      name: 'volunteered',
                      value: this.state.volunteerCount,
                    },
                  },
                ]}
                renderItem={({item}) => (
                  <View style={{margin: 5}}>
                    <Text
                      style={{
                        margin: 10,
                        textAlign: 'center',
                      }}>
                      {item.title.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 40,
                        margin: 10,
                        textAlign: 'center',
                      }}>
                      {item.title.value}
                    </Text>
                  </View>
                )}
                keyExtractor={item => item.id}
                numColumns={4}
              />
            </View>
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
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
