// import React, {Component} from 'react';
// import {
//   Text,
//   StyleSheet,
//   View,
//   Button,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Home from './src/screens/home';
// import Donate from './src/screens/Donate';
// import TakeDonation from './src/screens/takeDonation';
// import Volunteer from './src/screens/volunteer';
// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#1062FE',
//     color: '#FFFFFF',
//     fontFamily: 'IBMPlexSans-Medium',
//     fontSize: 15,
//     overflow: 'hidden',
//     padding: 10,
//     marginTop: 10,
//     // marginRight: 100,
//     // marginLeft: 50,
//   },
//   buttonGroup: {
//     marginTop: 350,
//     marginLeft: '10%',
//     width: '80%',
//     alignItems: 'center',
//   },
// });
// const naviagationScreens = {
//   donate: false,
//   'Take donation': false,
//   volunteer: false,
// };
// class App extends Component {
//   state = {};
//   OnClickEventHandler(params) {
//     console.log('my', naviagationScreens[params]);
//   }
//   render() {
//     return (
//       <View style={styles.buttonGroup}>
//         <TouchableOpacity onPress={() => this.OnClickEventHandler('donate')}>
//           <Text style={styles.button}>Donate for the quarentined</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => this.OnClickEventHandler()}>
//           <Text style={styles.button}>Take donations</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => this.OnClickEventHandler()}>
//           <Text style={styles.button}>Volunteer</Text>
//         </TouchableOpacity>
//       </View>
//       //   <NavigationContainer>
//       //     <Stack.Navigator>
//       //       <Stack.Screen name="Home" component={Home} />
//       //       <Stack.Screen name="about" component={Donate} />
//       //     </Stack.Navigator>
//       //   </NavigationContainer>
//     );
//   }
// }

// export default App;

import React, {Component} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';
import Donate from './src/screens/Donate';
import TakeDonation from './src/screens/takeDonation';
import Volunteer from './src/screens/volunteer';
import Home from './src/screens/home';
import {createAppContainer} from 'react-navigation';

const screens = {
  home: {
    screen: Home,
  },
  donate: {
    screen: Donate,
  },
  takeDonation: {
    screen: TakeDonation,
  },
  volunteer: {
    screen: Volunteer,
  },
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
