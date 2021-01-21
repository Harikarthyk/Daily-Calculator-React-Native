import React from 'react';
import {View, Text} from 'react-native';
import Header from '../Components/Header';

function About({navigation}) {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>This is About Section</Text>
    </View>
  );
}

export default About;
