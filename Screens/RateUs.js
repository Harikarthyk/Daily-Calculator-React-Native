import React from 'react';

import Header from '../Components/Header';
import {Text, TouchableOpacity, View, Linking} from 'react-native';

function RateUs({navigation}) {
  return (
    <View>
      <Header navigation={navigation} />
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 25}}>
        Rate Us
      </Text>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(
            'https://play.google.com/store/apps/details?id=com.dailycalculator_',
          );
        }}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 20,
            margin: 20,
            textAlign: 'center',
          }}>
          Give your Rating and Feedback to Improve our Application
        </Text>

        <Text
          style={{
            fontWeight: '500',
            fontSize: 15,
            textDecorationLine: 'underline',
            textAlign: 'center',
            fontStyle: 'italic',
          }}>
          Click here
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default RateUs;
