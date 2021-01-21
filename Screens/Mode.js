import React from 'react';
import {Text, View} from 'react-native';

function Mode({navigation, route}) {
  const modeDetails = route.params;
  return (
    <View>
      <Text>It's your {modeDetails.modeName}</Text>
      <View>
        <Text>00 : 00 : 00 . 00</Text>
      </View>
      <View>
        
        <Text>Start</Text>
      </View>
    </View>
  );
}

export default Mode;
