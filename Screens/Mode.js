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
  Alert,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Screen Width and Height
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

let timer = null;
// let mili = null;
function Mode({navigation, route}) {
  const modeDetails = route.params;
  const [count, setCount] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  // const [ms, setMs] = useState(0);
  const [reset, setReset] = useState(false);

  //Handles seconds on timerOn
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

  //Seconds to Time Convertor
  const secondsToTime = (seconds) => {
    var date = new Date(0);
    date.setSeconds(seconds); // specify value for SECONDS here
    // if (ms >= 60) setMs((pre) => 0);
    return date.toISOString().substr(11, 8);
  };

  const confirmMessage = (timeSpent, totalSec) => {
    Alert.alert(
      'Add Time in Daily Chart',
      'YES to add this data to chart , NO to go home',
      [
        {
          text: 'NO',
          onPress: () => {
            return;
          },
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            handleSubmit(timeSpent, totalSec);
          },
        },
      ],
    );
  };

  const handleSubmit = async (timeSpent, totalSec) => {
    try {
      const jsonValue = await AsyncStorage.getItem('@dailyCalc_1407');
      let preValue = jsonValue != null ? JSON.parse(jsonValue) : {};
      let temp = preValue[(new Date() + '').substring(0, 15)] || [];
      let exists = false;

      for (let i = 0; i < temp.length; i++) {
        let t = temp[i];
        if (t.mode === modeDetails.modeName) {
          t.seconds += totalSec;
          t.count++;
          temp[i] = t;
          exists = true;
          break;
        }
      }
      if (!exists) {
        temp.push({
          mode: modeDetails.modeName,
          name: modeDetails.modeName,
          seconds: totalSec,
          count: 1,
        });
      }
      let key = (new Date() + '').substring(0, 15);
      preValue[key] = temp;
      await AsyncStorage.setItem('@dailyCalc_1407', JSON.stringify(preValue));
      // Alert.alert(
      //   'Data added to the chart , check out today Statistics Screen ',
      // );
      navigation.navigate('TodayStatistics');
    } catch (e) {
      // saving error
    }
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
            source={modeDetails.modeImage}
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
                  confirmMessage(secondsToTime(Math.floor(count / 1)), count);
                  setReset(true);
                  setTimerOn(false);
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
            onChangeText={(e) =>
              e < 9
                ? setHr(e)
                : Alert.alert('Max hour that can be added manually is 8')
            }
            value={hr}
          />
          <TextInput
            placeholder="min"
            style={styles.inputBox}
            numberOfLines={1}
            keyboardType="numeric"
            value={min}
            onChangeText={(e) =>
              e < 60 ? setMin(e) : Alert.alert('Enter valid Time')
            }
          />
          <TextInput
            placeholder="sec"
            numberOfLine={1}
            style={styles.inputBox}
            keyboardType="numeric"
            value={sec}
            onChangeText={(e) =>
              e < 60 ? setSec(e) : Alert.alert('Enter valid Time')
            }
          />
          <TouchableOpacity style={styles.inputButton}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
              onPress={() => {
                if (hr == 0 && min == 0 && sec == 0) {
                  return Alert.alert('Enter Time Spend to proceed');
                }
                let totalSec = Number(sec);
                let thr = hr * 60 * 60;
                let tmin = min * 60;
                totalSec += thr;
                totalSec += tmin;
                // console.log(totalSec, '  -', tmin, thr, sec);
                confirmMessage(`${hr}:${min}:${sec}`, totalSec);
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
