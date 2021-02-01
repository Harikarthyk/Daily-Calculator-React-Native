import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Header from '../Components/Header';

function About({navigation}) {
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Header navigation={navigation} />
      <Text
        style={{
          fontFamily: 'Roboto',
          fontSize: 22,
          margin: 10,
          textAlign: 'center',
          fontWeight: 'bold',
          marginVertical: 10,
        }}>
        About Daily Calculator
      </Text>
      <Text
        style={{
          margin: 10,
          fontSize: 15,
          color: 'grey',
          fontWeight: 'bold',
          fontFamily: 'sans-serif-thin',
        }}>
        Daily Calculator is an Productive Application used to track and monitor
        all your activites,by tracking these activites you could find on which
        activity you spent the most of your time.
      </Text>
      <Text
        style={{
          margin: 10,
          fontSize: 15,
          fontFamily: 'sans-serif-thin',
          color: 'grey',
          fontWeight: 'bold',
        }}>
        By tracking your activites ,you can change your timings accordingly and
        can Improve your Productivity
      </Text>

      <Text
        style={{
          margin: 15,
          fontSize: 17,
          color: 'black',
          fontFamily: 'sans-serif-condensed',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Note : All your data's are stored only on your device
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          color: 'grey',
          position: 'absolute',
          bottom: 20,
          fontFamily: 'sans-serif-medium',
          left: Dimensions.get('screen').width / 2.5,
        }}>
        VERSION 1.0.0
      </Text>
    </View>
  );
}

export default About;
