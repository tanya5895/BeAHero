import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import PickerSelect from 'react-native-picker-select';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {search} from '../lib/utils';
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
  searchResultText: {
    fontFamily: 'IBMPlexSans-Bold',
    padding: 10,
    color: '#1062FE',
  },
  flatListView: {
    backgroundColor: '#FFF',
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
});
class TakeDonation extends Component {
  state = {
    query: {type: 'Food', name: ''},
    items: '',
    info: '',
  };
  searchItem() {
    console.log('QUERY ', this.state.query);
    const payload = this.state.query;

    search(payload)
      .then(results => {
        //   setInfo(`${results.length} result(s)`);
        this.setState({info: `${results.length} result(s)`, items: results});
        // setItems(results);
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
  setQueryType(t) {
    this.setState({query: {type: t}});
    console.log('setting query for type ', t);
  }
  setQueryName(n) {
    this.setState({query: {name: n}});
    console.log('setting query for name ', n);
  }
  renderItem(item) {
    return (
      <TouchableOpacity
        style={styles.itemTouchable}
        // onPress={() => {
        //   navigation.navigate('Map', {item: item});
        // }}
      >
        <View style={styles.itemView}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemQuantity}> ( {item.quantity} ) </Text>
        </View>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.outerView}>
        <View style={styles.inputsView}>
          <Text style={styles.label}>Type</Text>
          <PickerSelect
            style={{inputIOS: styles.selector}}
            value={this.state.query.type}
            onValueChange={t => this.setQueryName(t)}
            items={[
              {label: 'Food', value: 'Food'},
              {label: 'Help', value: 'Help'},
              {label: 'Other', value: 'Other'},
            ]}
          />
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.query.name}
            onChangeText={t => this.setQueryType(t)}
            onSubmitEditing={this.searchItem()}
            returnKeyType="send"
            enablesReturnKeyAutomatically={true}
            placeholder="e.g., Tomotatoes"
            blurOnSubmit={false}
          />
          <TouchableOpacity onPress={this.searchItem()}>
            <Text style={styles.button}>Search</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.searchResultText}>{this.state.info}</Text>

        <FlatList
          style={styles.flatListView}
          data={this.state.items}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={item => item.id || item['_id']}
        />
      </View>
    );
  }
}

export default TakeDonation;
