import React from 'react';
import {ScrollView, Text, View} from 'react-native';

function Home() {
  return (
    <View>
      <View>
        <Text>Good Morning</Text>
      </View>
      <ScrollView>
        <View>
          <Text>Mode 1</Text>
        </View>
        <View>
          <Text>Mode 2</Text>
        </View>
        <View>
          <Text>Mode 3</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
