import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import Header from '../Components/Header';
import {PieChart} from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

function TodayStatistics({navigation}) {
  const [data, setData] = useState([]);
  const color = {
    'Sport Mode': '#ffd972',
    'Yoga Mode': '#81968F',
    'Study Mode': '#c7eae4',
    'Work Mode': '#A7BED3',
    'Cooking Mode': '#da6c8f',
    'Fun Mode': '#F1FFC4',
    'Fitness Mode': '#FFCAAF',
    'Relax Mode': '#03B5AA',
  };
  useEffect(() => {
    const getData = async () => {
      const jsonValue = await AsyncStorage.getItem('@dailyCalc_1407');
      let preValue = jsonValue != null ? JSON.parse(jsonValue) : {};
      let arr = preValue[(new Date() + '').substring(0, 15)];
      arr.forEach((a) => {
        a.color = color[a.mode];
        a.name = '';
        a.legendFontColor = '#7F7F7F';
        a.legendFontSize = 15;
      });
      setData((pre) => arr);
    };
    getData();
  }, []);
  const secondsToTime = (seconds) => {
    var date = new Date(0);
    date.setSeconds(seconds); // specify value for SECONDS here
    // if (ms >= 60) setMs((pre) => 0);
    return date.toISOString().substr(11, 8);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.title}>{(new Date() + '').substring(0, 15)}</Text>
      <View style={styles.stats}>
        {data.length >= 1 ? (
          <View>
            <PieChart
              data={data}
              width={Dimensions.get('window').width - 16}
              height={height / 2.8}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              accessor="seconds"
              paddingLeft="100"
              //absolute //for the absolute number remove if you want percentage
            />
          </View>
        ) : (
          <Text>""</Text>
        )}
        <Text style={[styles.title, {fontSize: 20, marginVertical: 10}]}>
          Total Hours Spent on each Modes
        </Text>
        <ScrollView style={styles.details}>
          {data.map((d, index) => {
            return (
              <View
                key={index}
                style={[styles.detail, {backgroundColor: color[d.mode]}]}>
                <Text style={styles.detailName}>{d.mode}</Text>
                <Text style={styles.detailSeconds}>
                  Total Hours Spent{' '}
                  <Text style={{fontWeight: 'bold'}}>
                    {' '}
                    {secondsToTime(d.seconds)}
                  </Text>
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
  },
  stats: {
    marginHorizontal: 5,
  },
  details: {
    height: height / 3,
    margin: 5,
  },
  detail: {
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    padding: 10,
  },
  detailName: {
    fontWeight: 'bold',
    fontSize: 20,
    textDecorationLine: 'underline',
    fontFamily: 'serif',
  },
});

export default TodayStatistics;
