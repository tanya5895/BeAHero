import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';

import {search, userID} from '../lib/utils';
import {ScrollView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  flatListView: {
    backgroundColor: '#FFF',
    shadowColor: '#eee',
  },
  itemTouchable: {
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.25,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 24,
    fontFamily: 'IBMPlexSans-Medium',
  },
  ngoItem: {
    fontSize: 15,
    fontFamily: 'IBMPlexSans-Medium',
  },
  itemDescription: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'gray',
  },
  itemQuantity: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'gray',
  },
  emptyListView: {
    paddingTop: 300,
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListText: {
    fontFamily: 'IBMPlexSans-Bold',
    color: '#999999',
    fontSize: 16,
  },
  buttonGroup: {
    flex: 1,
    paddingTop: 5,
    width: '100%',
    alignItems: 'center',
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

const MyResources = function({navigation}) {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    // navigation.addListener('focus', () => {
    search({userID: userID()})
      .then(setItems)
      .catch(err => {
        console.log(err);
        Alert.alert(
          'ERROR',
          'Please try again. If the problem persists contact an administrator.',
          [{text: 'OK'}],
        );
      });
    // }
  }, []);

  const Item = props => {
    console.log('ITEMS ', props);
    return (
      <View>
        <TouchableOpacity
          style={styles.itemTouchable}
          onPress={() => {
            navigation.navigate('editDonation', {item: props});
          }}>
          <View style={styles.itemView}>
            <Text style={styles.itemName}>{props.name}</Text>
            <Text style={styles.itemQuantity}> ( {props.quantity} ) </Text>
          </View>
          <View style={styles.itemView}>
            <Text style={styles.ngoItem}>Provided By, {props.NGO}</Text>
          </View>
          <Text style={styles.itemDescription}>{props.description}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  if (items.length > 0) {
    console.log('length', items.length);
    return (
      <ScrollView>
        <FlatList
          style={styles.flatListView}
          data={items}
          renderItem={({item}) => <Item {...item} />}
          keyExtractor={item => item.id || item['_id']}
          //   numColumns={4}
          //   key={item => item.id || item['_id']}
        />
        <TouchableOpacity
          style={styles.buttonGroup}
          onPress={() => navigation.navigate('addDonation')}>
          <Text style={styles.button}>Add service</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.emptyListView}>
        <Text style={styles.emptyListText}>
          You currently have no services listed
        </Text>
        <TouchableOpacity
          style={styles.buttonGroup}
          onPress={() => navigation.navigate('addDonation')}>
          <Text style={styles.button}>Add service</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default MyResources;
