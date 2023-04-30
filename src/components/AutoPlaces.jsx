import {View, Text, Alert, Dimensions, Image} from 'react-native';
import {GOOGLE_API_KEY} from '@env';
//
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useEffect} from 'react';
import {locationPermissionAccess} from '../utils/locationPermissionAccess';

export const AutoPlaces = () => {
  useEffect(() => {
    locationPermissionAccess();
  });
  return (
    <View style={{flex: 1}}>
      <GooglePlacesAutocomplete
        placeholder="Search Destination"
        fetchDetails={true}
        enablePoweredByContainer={false}
        onPress={(data, details) => {
          console.log(data.structured_formatting.main_text, data.place_id);
        }}
        onFail={error => console.error(error)}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
          components: 'country:pk',
        }}
        currentLocation={true}
        currentLocationLabel="Your location!" // add a simple label
        predefinedPlaces={[
          {
            type: 'favorite',
            description: 'Dominos Pizza',
            geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
          },
          {
            type: 'favorite',
            description: 'Chicken Republic',
            geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
          },
        ]}
        renderRow={results => {
          if (results.isPredefinedPlace) {
            return (
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <Icon name="home" size={24} color="#fff" />
                  <Text>{results.description}</Text>
                </View>
              </View>
            );
          } else {
            return <Text>{results.description}</Text>;
          }
        }}
        styles={{
          container: {padding: 16},
          textInputContainer: {
            // borderRadius: 100,
          },
          textInput: {
            color: '#000',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            backgroundColor: 'transparent',
            borderRadius: 0,
          },
          listView: {
            // backgroundColor: 'red',
          },
          row: {
            backgroundColor: 'transparent',
          },
          description: {
            color: 'red',
            flexDirection: 'row',
          },
          predefinedPlacesDescription: {
            backgroundColor: 'red',
            flexDirection: 'row',
          },
        }}
      />
    </View>
  );
};
