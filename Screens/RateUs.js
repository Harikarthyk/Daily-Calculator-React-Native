import React from 'react';
import {Text, TouchableOpacity, View , Linking} from 'react-native';

function RateUs() {
  return (
    <View style={{margin: 15}}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 25}}>
        Rate Us
      </Text>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(
            'https://play.google.com/store/apps/details?id=com.dailycalculator_',
          );
        }}>
        <Text style={{fontWeight: '500', fontSize: 20, textAlign: 'center'}}>
          Click here to view on play store
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default RateUs;
