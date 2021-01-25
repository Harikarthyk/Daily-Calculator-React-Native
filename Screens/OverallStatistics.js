import React from 'react';
import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import Header from '../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {StackedBarChart} from 'react-native-chart-kit';

//Screen Width and Height
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
function OverallStatistics({navigation}) {
  const data = {
    labels: ['Test1', 'Test2'],
    legend: ['L1', 'L2', 'L3'],
    data: [
      [60, 60, 60],
      [30, 30, 60],
    ],
    barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
  };
  return (
    <ScrollView style={styles.continer}>
      <Header navigation={navigation} />
      <Text style={styles.title}>Overall Statistics</Text>
      <View style={styles.body}>
        <StackedBarChart
          data={data}
          width={Dimensions.get('window').width - 16}
          height={220}
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
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
});

export default OverallStatistics;
