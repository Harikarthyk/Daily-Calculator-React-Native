import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Header from '../Components/Header';

//Screen Width and Height
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//PNG Images
// ![sport](https://user-images.githubusercontent.com/54505967/105438354-d5f76500-5c88-11eb-9817-6cbf3a39532c.png)
// ![meditation](https://user-images.githubusercontent.com/54505967/105439149-4eaaf100-5c8a-11eb-9043-f856e1ceb68a.png)
// ![studying](https://user-images.githubusercontent.com/54505967/105439152-4fdc1e00-5c8a-11eb-8525-aa67c0b40fbc.png)
// ![computer](https://user-images.githubusercontent.com/54505967/105439153-5074b480-5c8a-11eb-9008-e83456739211.png)
// ![fitness](https://user-images.githubusercontent.com/54505967/105439154-5074b480-5c8a-11eb-8313-5b1900ace1a8.png)
// ![chat](https://user-images.githubusercontent.com/54505967/105439155-510d4b00-5c8a-11eb-806a-7e7c6af4757e.png)
// ![relaxation](https://user-images.githubusercontent.com/54505967/105439157-51a5e180-5c8a-11eb-8f24-0cf6b3b3d20b.png)
// ![bake](https://user-images.githubusercontent.com/54505967/105439159-51a5e180-5c8a-11eb-8d53-c4802bb1c052.png)

const modeNames = [
  'Sport Mode',
  'Yoga Mode',
  'Study Mode',
  'Work Mode',
  'Fun Mode',
  'Cooking Mode',
  'Fitness Mode',
  'Relax Mode',
];

const modeImages = [
  'https://user-images.githubusercontent.com/54505967/105438354-d5f76500-5c88-11eb-9817-6cbf3a39532c.png',
  'https://user-images.githubusercontent.com/54505967/105439149-4eaaf100-5c8a-11eb-9043-f856e1ceb68a.png',
  'https://user-images.githubusercontent.com/54505967/105439152-4fdc1e00-5c8a-11eb-8525-aa67c0b40fbc.png',
  'https://user-images.githubusercontent.com/54505967/105439153-5074b480-5c8a-11eb-9008-e83456739211.png',
  'https://user-images.githubusercontent.com/54505967/105439155-510d4b00-5c8a-11eb-806a-7e7c6af4757e.png',
  'https://user-images.githubusercontent.com/54505967/105439159-51a5e180-5c8a-11eb-8d53-c4802bb1c052.png',
  'https://user-images.githubusercontent.com/54505967/105439154-5074b480-5c8a-11eb-8313-5b1900ace1a8.png',
  'https://user-images.githubusercontent.com/54505967/105439157-51a5e180-5c8a-11eb-8f24-0cf6b3b3d20b.png',
];
const ModeButton = (index) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Mode', {
          modeName: modeNames[index],
          modeImage: modeImages[index],
        })
      }
      style={styles.mode}>
      <Image
        source={{
          uri: modeImages[index],
        }}
        style={{
          height: height / 6,
          width: width / 3,
        }}
        height={height / 5.5}
        width={width / 3}
      />
      <Text style={styles.modeText}>{modeNames[index]}</Text>
    </TouchableOpacity>
  );
};
function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {/* <View style={styles.topBox}>
        <Image
          source={{
            uri:
              'https://user-images.githubusercontent.com/54505967/105271519-a16aa700-5bbd-11eb-8510-2722f4604dd5.gif',
          }}
          height={height / 3.5}
          style={{height: height / 3.5, width: width - 30, borderRadius: 30}}
          width={width - 30}
        />
        <Text style={styles.topBoxText}>Good Morning</Text>
      </View> */}
      <View style={styles.wrapper}>
        <View style={styles.titleHeader}>
          <Text style={styles.titleText}>Select your Mode</Text>
        </View>
        <ScrollView style={styles.modes}>
          {/* //Sports and yoga Mode */}
          <View style={styles.modeView}>
            {ModeButton(0)}
            {ModeButton(1)}
          </View>
          {/* Study and work Mode */}
          <View style={styles.modeView}>
            {ModeButton(2)}
            {ModeButton(3)}
          </View>
          {/* Fun and Cooking Mode */}
          <View style={styles.modeView}>
            {ModeButton(4)}
            {ModeButton(5)}
          </View>
          {/* Fitness and Relax */}
          <View style={styles.modeView}>
            {ModeButton(6)}
            {ModeButton(7)}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

//StyleSheet for Home Screnn
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FBFBFF',
  },
  wrapper: {
    height: height / 1.09,
  },
  topBox: {
    position: 'relative',
    alignItems: 'center',
    borderRadius: 20,
  },
  topBoxText: {
    position: 'absolute',
    top: 0,
  },
  titleText: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  modes: {
    height: height / 1.2,
  },
  modeView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  mode: {
    marginBottom: 10,
    backgroundColor: '#fff',
    width: width / 2.5,
    height: height / 4.1,
    alignItems: 'center',
    elevation: 10,
    borderRadius: 15,
    justifyContent: 'space-evenly',
    margin: 4,
  },
  modeText: {
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Home;
