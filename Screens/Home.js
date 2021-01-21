import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../Components/Header';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View>
        <Text>Good Morning</Text>
      </View>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('Mode', {modeName: 'Sport Mode'})}>
          <Text>Sports Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Mode', {modeName: 'Work Mode'})}>
          <Text>Work Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Mode', {modeName: 'Party Mode'})}>
          <Text>Party Mode</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  titleContainer: {},
  title: {},
  text: {},
  modeTitle: {},
});

export default Home;
