import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import PickerSelect from 'react-native-picker-select';

import {search, update, userID} from '../lib/utils';
import Accept from '../screens/Accept-reject';

const styles = StyleSheet.create({
  outerView: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
  },
  inputsView: {
    backgroundColor: '#F1F0EE',
    padding: 16,
    padding: 22,
  },
  label: {
    fontFamily: 'IBMPlexSans-Medium',
    color: '#000',
    fontSize: 14,
    paddingBottom: 5,
  },
  selector: {
    fontFamily: 'IBMPlexSans-Medium',
    backgroundColor: '#fff',
    padding: 8,
    marginBottom: 10,
  },
  textInput: {
    fontFamily: 'IBMPlexSans-Medium',
    backgroundColor: '#fff',
    padding: 8,
    marginBottom: 10,
  },
  searchResultText: {
    fontFamily: 'IBMPlexSans-Bold',
    padding: 10,
    color: 'black',
  },
  flatListView: {
    backgroundColor: '#FFF',
  },
  itemTouchable: {
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
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
  itemQuantity: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'gray',
  },
  itemDescription: {
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'gray',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 35,
  },
});

const updateItem = (orderItem, navigation) => {
  console.log('accepted', orderItem['listOfbuyerId']);
  var listofBuyers = {};
  if (orderItem['listOfbuyerId'] != undefined) {
    listofBuyers = orderItem['listOfbuyerId'];
  }
  listofBuyers[orderItem['userID']] = true;
  console.log('after', listofBuyers);

  const payload = {
    ...orderItem,
    id: orderItem.id || orderItem['_id'],
    orderPlaced: 'true',
    listOfbuyerId: listofBuyers,
  };
  console.log('payload for update ', payload);

  update(payload)
    .then(() => {
      // Alert.alert('Done', 'Your order has been updated.', [{text: 'OK'}]);
      navigation.navigate('order pending');
    })
    .catch(err => {
      console.log(err);
      Alert.alert('ERROR', err.message, [{text: 'OK'}]);
    });
};
const SearchResources = function({route, navigation}) {
  const [query, setQuery] = React.useState({type: 'Food', name: ''});
  const [items, setItems] = React.useState([]);
  const [info, setInfo] = React.useState('');
  const AcceptButton = props => {
    let data = '';
    listOfbuyerId = props.orderPlaced['listOfbuyerId'] || {'': ''};
    userIdForOrder = props.orderPlaced.userID;
    console.log('orderplaced', listOfbuyerId[userIdForOrder], userIdForOrder);
    console.log(
      'accepted',
      props.orderPlaced.orderPlaced,
      props.orderPlaced.is_accepted,
    );
    if (
      props.orderPlaced.is_accepted == 'true' &&
      listOfbuyerId[userIdForOrder]
    ) {
      // Alert.alert(props.orderPlaced.orderPlaced['listOfbuyerId']);
      let PropData = {
        name: 'View Confirmation',
      };
      data = [
        {
          id: '2',
          title: (
            <View>
              <TouchableOpacity
                onPress={() => {
                  console.log('clicked ');
                  navigation.navigate('orderConfirmation');
                }}>
                <Accept name={PropData} />
              </TouchableOpacity>
            </View>
          ),
        },
      ];
    } else if (
      (props.orderPlaced.is_accepted == 'false' ||
        props.orderPlaced.is_accepted == undefined) &&
      listOfbuyerId[userIdForOrder]
    ) {
      // Alert.alert(props.orderPlaced.orderPlaced['listOfbuyerId']);
      let PropData = {
        name: 'View Confirmation',
      };
      data = [
        {
          id: '2',
          title: (
            <View>
              <TouchableOpacity
                onPress={() => {
                  console.log('clicked ');
                  navigation.navigate('order pending');
                }}>
                <Accept name={PropData} />
              </TouchableOpacity>
            </View>
          ),
        },
      ];
    } else if (props.orderPlaced.orderPlaced == 'false') {
      let acceptPropData = {
        name: 'Request',
      };
      data = [
        {
          id: '1',
          title: (
            <View>
              <TouchableOpacity
                onPress={() => {
                  console.log('clicked ');
                  updateItem(props.orderPlaced, navigation);
                }}>
                <Accept name={acceptPropData} />
              </TouchableOpacity>
            </View>
          ),
        },
      ];
    }

    // props.orderPlaced.orderPlaced == 'true' &&
    // !listOfbuyerId[userIdForOrder]

    return (
      <FlatList
        data={data}
        renderItem={({item}) => item.title}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    );
  };
  const Item = props => {
    listOfbuyerId = props.listOfbuyerId;
    userIdForOrder = props.userID;
    console.log('RENDERING ITEM ', userIdForOrder);
    if (
      !(
        listOfbuyerId != undefined &&
        !listOfbuyerId[userIdForOrder] &&
        props.orderPlaced
      )
    ) {
      console.log(props.name, 'AVAILABLE ');
      return (
        <View style={{borderBottomColor: '#dddddd', borderBottomWidth: 0.25}}>
          <TouchableOpacity style={styles.itemTouchable}>
            <View style={styles.itemView}>
              <Text style={styles.itemName}>{props.name}</Text>
              <Text style={styles.itemQuantity}> ( {props.quantity} ) </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.ngoItem}>Provided By, {props.NGO}</Text>
            </View>
            <Text style={styles.itemDescription}>{props.description}</Text>
          </TouchableOpacity>
          <View>
            <AcceptButton orderPlaced={props} />
          </View>
        </View>
      );
    } else {
      return <View />;
    }
  };

  const searchItem = () => {
    const payload = {
      ...query,
    };

    search(payload)
      .then(results => {
        console.log('results ========', results);
        setInfo(`${results.length} result(s)`);
        setItems(results);
      })
      .catch(err => {
        console.log(err);
        Alert.alert(
          'ERROR',
          'Please try again. If the problem persists contact an administrator.',
          [{text: 'OK'}],
        );
      });
  };

  return (
    <View style={styles.outerView}>
      <View style={styles.inputsView}>
        <Text style={styles.label}>Type</Text>
        <PickerSelect
          style={{inputIOS: styles.selector}}
          value={query.type}
          onValueChange={t => setQuery({...query, type: t})}
          items={[
            {label: 'Food', value: 'Food'},
            {label: 'Help', value: 'Help'},
            {label: 'Other', value: 'Other'},
          ]}
        />
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.textInput}
          value={query.name}
          onChangeText={t => setQuery({...query, name: t})}
          onSubmitEditing={searchItem}
          returnKeyType="send"
          enablesReturnKeyAutomatically={true}
          placeholder="e.g., Tomotatoes"
          blurOnSubmit={false}
        />
        <TouchableOpacity onPress={searchItem}>
          <Text style={styles.button}>Search</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.searchResultText}>{info}</Text>

      <FlatList
        style={styles.flatListView}
        data={items}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.id || item['_id']}
      />
    </View>
  );
};

export default SearchResources;
