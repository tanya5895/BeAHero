import {Marker, Polyline} from 'react-native-maps';
import MapView from 'react-native-maps';
// import {MapView} from 'expo';
import axios from 'axios';
import Config from 'react-native-config';
import React, {Component} from 'react';
import {Text, ActivityIndicator, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
class NewMap extends Component {
  state = {
    startingLocation: {
      latitude: 40.785834,
      longitude: -120.406417,
    },
    finishLocation: {
      latitude: 37.785834,
      longitude: -122.406417,
    },
    region: {
      latitude: parseFloat(40.785834),
      longitude: parseFloat(-120.406417),
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    isLoading: true,
  };
  _getRoute = () => {
    // we are using parseFloat() because HERE API expects a float
    let from_lat = parseFloat(this.state.startingLocation.latitude);
    let from_long = parseFloat(this.state.startingLocation.longitude);
    let to_lat = parseFloat(this.state.finishLocation.latitude);
    let to_long = parseFloat(this.state.finishLocation.longitude);
    // we will save all Polyline coordinates in this array
    let route_coordinates = [];
    axios
      .get(
        `https://route.ls.hereapi.com/routing/7.2/calculateroute.json?apiKey=QzkouNIRHNQ4GK9TUHau9gkbjn7exvqEqbspvdJl8bg&waypoint0=geo!52.5,13.4&waypoint1=geo!52.5,13.45&mode=fastest;car;traffic:disabled`,
      )
      .then(response => {
        console.log('data is ', response);
        // here we are getting all route coordinates from API response
        // let i = 0;
        response.data.response.route[0].leg[0].maneuver.map(m => {
          console.log(
            'maneuver    ====== ',
            m['position'],
            m['position']['latitude'],
          );
          // here we are getting latitude and longitude in seperate variables because HERE sends it together, but we
          // need it seperate for <Polyline/>
          //   let latlong = m.split(',');
          let latlong = m['position'];
          let latitude = parseInt(latlong['latitude']);
          let longitude = parseInt(latlong['longitude']);
          route_coordinates.push({
            latitude: latitude,
            longitude: longitude,
          });
          //   i = i + 1;
        });
        this.setState({
          routeForMap: route_coordinates,
          // here we can access route summary which will show us how long does it take to pass the route, distance etc.
          summary: response.data.response.route[0].summary,
          // NOTE just add this 'isLoading' field now, I'll explain it later
          isLoading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  UNSAFE_componentWillMount() {
    // when this function is finished, we will set isLoading state to false to let program know that API request has finished and now we can render the map
    this._getRoute();
  }
  render() {
    if (this.state.isLoading) {
      return (
        <Text>
          Loading...(you could also use <ActivityIndicator /> or what ever you
          want to show while loading the request)
        </Text>
      );
    } else {
      return (
        <MapView
          style={styles.map}
          initialRegion={this.state.region}
          loadingEnabled={true}
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee"
          moveOnMarkerPress={false}
          showsUserLocation={true}
          showsCompass={true}
          showsPointsOfInterest={false}>
          <Polyline
            coordinates={this.state.routeForMap}
            strokeWidth={7}
            strokeColor="red"
            geodesic={true}
          />
        </MapView>
      );
    }
  }
}

export default NewMap;
