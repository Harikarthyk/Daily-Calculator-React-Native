import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Header from '../Components/Header';

function Mode({navigation, route}) {
  const modeDetails = route.params;
  return (
    <View style={styles.container}>
      {/* <Header navigation={navigation} /> */}
      <View style={styles.titleHeader}>
        <View style={styles.titleHeaderLeft}>
          <Text style={styles.title1}>you're on{'  '}</Text>
          <Text style={styles.title2}>{modeDetails.modeName}</Text>
        </View>
        <View style={styles.titleHeaderRight}>
          <Image
            source={{uri: modeDetails.modeImage}}
            height={100}
            width={100}
            style={styles.image}
          />
        </View>
      </View>
      <View>
        <Text>00 : 00 : 00 . 00</Text>
      </View>
      <View>
        <Text>Start</Text>
      </View>
    </View>
  );
}

//StyleSheet for Mode Screen
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  titleHeader: {},
  titleHeaderLeft: {},
  titleHeaderRight: {},
  title1: {
    fontSize: 20,
  },
  title2: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  image: {
    height: '100',
    width: '100',
  },
});

export default Mode;
