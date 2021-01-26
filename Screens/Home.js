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

//Import Images
import bake from '../Components/bake.png';
import chat from '../Components/chat.png';
import computer from '../Components/computer.png';
import fitness from '../Components/fitness.png';
import meditation from '../Components/meditation.png';
import relaxation from '../Components/relaxation.png';
import sport from '../Components/sport.png';
import studying from '../Components/studying.png';

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
  sport,
  meditation,
  computer,
  studying,
  chat,
  bake,
  fitness,
  relaxation,
];
const ModeButton = ({index, navigation, image_src}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push('Mode', {
          modeName: modeNames[index],
          modeImage: image_src,
        })
      }
      style={styles.mode}>
      <Image
        source={require(image_src)}
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
      <View style={styles.wrapper}>
        <View style={styles.titleHeader}>
          <Text style={styles.titleText}>Select your Mode</Text>
        </View>
        <ScrollView style={styles.modes}>
          {/* //Sports and yoga Mode */}
          <View style={styles.modeView}>
            <ModeButton
              index={0}
              navigation={navigation}
              image_src="../Components/chat.png"
            />
            <ModeButton
              index={1}
              navigation={navigation}
              image_src="../Components/chat.png"
            />
          </View>
          {/* Study and work Mode */}
          <View style={styles.modeView}>
            <ModeButton
              index={2}
              navigation={navigation}
              image_src="../Components/chat.png"
            />
            <ModeButton
              index={3}
              navigation={navigation}
              image_src="../Components/chat.png"
            />
          </View>
          {/* Fun and Cooking Mode */}
          <View style={styles.modeView}>
            <ModeButton
              index={4}
              navigation={navigation}
              image_src="../Components/chat.png"
            />
            <ModeButton
              index={5}
              navigation={navigation}
              image_src="../Components/chat.png"
            />
          </View>
          {/* Fitness and Relax */}
          <View style={styles.modeView}>
            <ModeButton
              index={6}
              navigation={navigation}
              image_src="../Components/chat.png"
            />
            <ModeButton
              index={7}
              navigation={navigation}
              image_src="../Components/chat.png"
            />
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
    backgroundColor: '#FBFBFF',
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
