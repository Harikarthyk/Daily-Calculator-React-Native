import React, {useEffect, useState} from 'react';
import BackgroundTimer from 'react-native-background-timer';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Header from '../Components/Header';

//Screen Width and Height
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TimerButtons = (image, color) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

let timer = null;
// let mili = null;
function Mode({navigation, route}) {
  const modeDetails = route.params;
  const [count, setCount] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [hr, setHr] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');
  // const [ms, setMs] = useState(0);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    if (timerOn) {
      setReset(false);
      timer = BackgroundTimer.setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      // mili = BackgroundTimer.setInterval(() => {
      //   setMs((prev) => prev + 1);
      // }, 1);
    } else {
      // console.log('timerOn ', timerOn);
      BackgroundTimer.clearInterval(timer);
      // BackgroundTimer.clearInterval(mili);
    }
    if (reset) {
      setCount(0);
      // setMs(0);
      BackgroundTimer.clearInterval(timer);
      // BackgroundTimer.clearInterval(mili);
    }
  }, [timerOn, reset]);

  const secondsToTime = (seconds) => {
    var date = new Date(0);
    date.setSeconds(seconds); // specify value for SECONDS here

    // if (ms >= 60) setMs((pre) => 0);
    return date.toISOString().substr(11, 8);
  };
  return (
    <ScrollView style={styles.container}>
      {/* <Header navigation={navigation} /> */}
      <View style={styles.titleHeader}>
        <View style={styles.titleHeaderLeft}>
          <Text style={styles.title1}>you are on{'  '}</Text>
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
      <View style={styles.caption}>
        <Text style={styles.captionText}>Every Seconds Count ... ⏰</Text>
      </View>
      <View style={styles.timer}>
        <View style={styles.clock}>
          <Text style={styles.clockText1}>
            {secondsToTime(Math.floor(count / 1))}
            {/* <Text style={styles.clockText2}>
              .{(ms + '').length == 1 ? '0' + ms : ms} ms
            </Text> */}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          {timerOn ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  setReset(false);
                  setTimerOn(false);
                }}
                style={styles.button}>
                <Image
                  source={require('../Components/pause.png')}
                  style={styles.buttonImage}
                  height={50}
                  width={50}
                />
                <Text style={styles.buttonText}>Pause Mode</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setReset(true);
                  setTimerOn(false);
                }}
                style={styles.button}>
                <Image
                  source={require('../Components/repeat.png')}
                  style={styles.buttonImage}
                  height={50}
                  width={50}
                />
                <Text style={styles.buttonText}>Reset Mode</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert('Mode Ended');
                }}
                style={styles.button}>
                <Image
                  source={require('../Components/stop.png')}
                  style={styles.buttonImage}
                  height={50}
                  width={50}
                />
                <Text style={styles.buttonText}>End Mode</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              onPress={() => setTimerOn(true)}
              style={styles.button}>
              <Image
                source={require('../Components/play.png')}
                style={styles.buttonImage}
                height={50}
                width={50}
              />
              <Text style={styles.buttonText}>Start Mode</Text>
            </TouchableOpacity>
          )}
        </View>
        {timerOn ? (
          <TouchableOpacity
            style={[styles.caption, {backgroundColor: '#da6c8f'}]}>
            <Text style={styles.captionText}>Your Mode is Started 🏃🏼‍♂️</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.caption, {backgroundColor: '#5e8c61'}]}>
            <Text style={styles.captionText}>
              Click Start Mode to Get Started
            </Text>
          </TouchableOpacity>
        )}
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>
          OR
        </Text>
        <TouchableOpacity style={styles.manual}>
          <Text
            style={{
              textAlign: 'center',
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              marginVertical: 15,
            }}>
            Add Manual Hours
          </Text>
        </TouchableOpacity>
        <View style={styles.modelAdd}>
          <TextInput
            placeholder="hrs"
            style={styles.inputBox}
            numberOfLine={1}
            keyboardAppearance="light"
            keyboardType="numeric"
            onChange={(e) => setHr(e)}
            value={hr}
          />
          <TextInput
            placeholder="min"
            style={styles.inputBox}
            numberOfLines={1}
            keyboardType="numeric"
            value={min}
            onChange={(e) => setMin(e)}
          />
          <TextInput
            placeholder="sec"
            numberOfLine={1}
            style={styles.inputBox}
            keyboardType="numeric"
            value={sec}
            onChange={(e) => setSec(e)}
          />
          <TouchableOpacity style={styles.inputButton}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.footer}>
            <Text style={styles.footerText}>Back Home</Text>
            <Image
              source={require('../Components/home.png')}
              style={styles.footerImage}
              height={50}
              width={50}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

//StyleSheet for Mode Screen
const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    // backgroundColor: 'red',
    backgroundColor: '#FBFBFF',
  },
  titleHeader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: height / 5.5,
    elevation: 11,
    borderRadius: 20,
  },
  titleHeaderLeft: {
    flex: 2,
    backgroundColor: '#fff',
    display: 'flex',
    paddingLeft: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
  },
  titleHeaderRight: {
    flex: 1.3,
  },
  title1: {
    textTransform: 'uppercase',
    fontSize: 19,
    fontWeight: '100',
    fontFamily: 'sans-serif-light',
  },
  title2: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif-medium',
  },
  image: {
    // flex: 1,
    height: '100%',
    width: '80%',
  },
  caption: {
    backgroundColor: '#1f2041',
    marginVertical: 20,
    height: height / 15,
    justifyContent: 'center',
    elevation: 20,
    borderRadius: 15,
  },
  captionText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  clock: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 20,
    elevation: 10,
    height: height / 5.3,
    justifyContent: 'center',
  },
  clockText1: {
    fontSize: 50,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  clockText2: {
    fontSize: 26,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
  },
  buttonImage: {
    height: 50,
    width: 50,
    marginBottom: 4,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 20,
    alignItems: 'center',
    height: 50,
    justifyContent: 'space-evenly',
    width: width / 2,
  },
  footerText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  footerImage: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
  },
  modelAdd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  inputBox: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 5,
  },
  inputButton: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f2041',
  },
});

export default Mode;
