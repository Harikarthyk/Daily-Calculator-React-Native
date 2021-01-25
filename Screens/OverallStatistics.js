// import React, {useEffect, useState} from 'react';
// import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
// import Header from '../Components/Header';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useIsFocused} from '@react-navigation/native';
// import {StackedBarChart} from 'react-native-chart-kit';
// import cloneDeep from 'clone-deep';

// //Screen Width and Height
// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
// function OverallStatistics({navigation}) {
//   const [items, setItems] = useState({
//     labels: [],
//     legend: [],
//     data: [[]],
//     barColors: [],
//   });
//   const isFocused = useIsFocused();
//   const data = {
//     labels: ['Test1', 'Test2'],
//     legend: ['L1', 'L2', 'L3'],
//     data: [
//       [60, 60, 60],
//       [30, 30, 60],
//     ],
//     barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
//   };
//   const color = {
//     'Sport Mode': '#ffd972',
//     'Yoga Mode': '#81968F',
//     'Study Mode': '#c7eae4',
//     'Work Mode': '#A7BED3',
//     'Cooking Mode': '#da6c8f',
//     'Fun Mode': '#F1FFC4',
//     'Fitness Mode': '#FFCAAF',
//     'Relax Mode': '#03B5AA',
//   };
//   let arrColor = [
//     '#ffd972',
//     '#81968F',
//     '#c7eae4',
//     '#A7BED3',
//     '#da6c8f',
//     '#F1FFC4',
//     '#FFCAAF',
//     '#03B5AA',
//   ];
//   let arrName = [
//     'Sport Mode',
//     'Yoga Mode',
//     'Study Mode',
//     'Work Mode',
//     'Cooking Mode',
//     'Fun Mode',
//     'Fitness Mode',
//     'Relax Mode',
//   ];
//   const [load, setLoad] = useState(false);
//   useEffect(() => {
//     const getData = async () => {
//       const jsonValue = await AsyncStorage.getItem('@dailyCalc_1407');
//       let preValue = jsonValue != null ? JSON.parse(jsonValue) : {};
//       let arr = cloneDeep(items.data),
//         c = [],
//         l = [];

//       for (let value in preValue) {
//         console.log(value);
//         l.push(value.substring(4, 10));
//         let a = [];
//         for (let i = 0; i < preValue[value].length; i++) {
//           a.push(preValue[value][i].seconds);
//         }
//         arr.push(a);
//         console.log(a, arr);
//       }
//       setItems({...items, data: [...arr]});
//       setItems({...items, barColors: arrColor, labels: l, legend: arrName});
//       console.log(items);
//       setLoad(true);
//     };
//     getData();
//   }, [isFocused]);
//   return (
//     <ScrollView style={styles.continer}>
//       <Header navigation={navigation} />
//       <Text style={styles.title}>Overall Statistics</Text>
//       {load ? (
//         <View style={styles.body}>
//           <StackedBarChart
//             data={items}
//             width={Dimensions.get('window').width - 16}
//             height={220}
//             chartConfig={{
//               backgroundColor: '#1cc910',
//               backgroundGradientFrom: '#eff3ff',
//               backgroundGradientTo: '#efefef',
//               decimalPlaces: 2,
//               color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//               style: {
//                 borderRadius: 16,
//               },
//             }}
//             style={{
//               marginVertical: 8,
//               borderRadius: 16,
//             }}
//           />
//         </View>
//       ) : (
//         <View>
//           <Text></Text>
//         </View>
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   continer: {
//     flex: 1,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 24,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

// export default OverallStatistics;
