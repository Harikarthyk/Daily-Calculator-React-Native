//Import Dependencies
import React from 'react';
import {Image, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Home from './Screens/Home';
import Mode from './Screens/Mode';
import About from './Screens/About';
import TodayStatistics from './Screens/TodayStatistics';
import RateUs from './Screens/RateUs';
// import OverallStatistics from './Screens/OverallStatistics';

//Navigation
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Image Links
// [yoga](https://user-images.githubusercontent.com/54505967/105271503-9a439900-5bbd-11eb-8b61-de913443e5ea.gif)
// [friend](https://user-images.githubusercontent.com/54505967/105271506-9ca5f300-5bbd-11eb-8102-dbd7664166e6.gif)
// [gym](https://user-images.githubusercontent.com/54505967/105271507-9d3e8980-5bbd-11eb-8743-6d7ca7cffeab.gif)
// [other](https://user-images.githubusercontent.com/54505967/105271508-9dd72000-5bbd-11eb-915c-6e89d6d63715.gif)
// [party](https://user-images.githubusercontent.com/54505967/105271510-9e6fb680-5bbd-11eb-95b3-a767a66e3575.gif)
// [sport](https://user-images.githubusercontent.com/54505967/105271515-9fa0e380-5bbd-11eb-97e0-852afc166e0f.gif)
// [study](https://user-images.githubusercontent.com/54505967/105271518-a0d21080-5bbd-11eb-85de-e75304732866.gif)
// [welcome](https://user-images.githubusercontent.com/54505967/105271519-a16aa700-5bbd-11eb-8510-2722f4604dd5.gif)
// [work](https://user-images.githubusercontent.com/54505967/105271525-a29bd400-5bbd-11eb-8999-64380116cf22.gif)

//Home Stack Screen
const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Mode" component={Mode} />
    </Stack.Navigator>
  );
};

//Drawer Navigation
export const App = () => {
  return (
    <NavigationContainer>
      {/* 
        drawerContent={(props) => <DrawContent {...props} />} */}
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          options={{
            drawerIcon: ({focused}) => (
              <Image
                source={require('./Components/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#3C4F76' : '#CDCDD2',
                }}
              />
            ),
            drawerLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? 'black' : '#CDCDD2',
                  fontSize: 15,
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                Home
              </Text>
            ),
          }}
          name="Home"
          component={HomeStackScreen}
        />

        <Drawer.Screen
          options={{
            drawerIcon: ({focused}) => (
              <Image
                source={require('./Components/graph.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1F2041' : '#CDCDD2',
                }}
              />
            ),
            drawerLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? 'black' : '#CDCDD2',
                  fontSize: 15,
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                Today Statistics
              </Text>
            ),
          }}
          name="TodayStatistics"
          component={TodayStatistics}
        />
        {/* <Drawer.Screen
          options={{
            drawerIcon: ({focused}) => (
              <Image
                source={require('./Components/profit-report.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1F2041' : '#CDCDD2',
                }}
              />
            ),
            drawerLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? 'black' : '#CDCDD2',
                  fontSize: 15,
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                Overall Report
              </Text>
            ),
          }}
          name="OverallReport"
          component={OverallStatistics}
        /> */}
        <Drawer.Screen
          options={{
            drawerIcon: ({focused}) => (
              <Image
                source={require('./Components/about.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1F2041' : '#CDCDD2',
                }}
              />
            ),
            drawerLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? 'black' : '#CDCDD2',
                  fontSize: 15,
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                About
              </Text>
            ),
          }}
          name="About"
          component={About}
        />
        <Drawer.Screen
          options={{
            drawerIcon: ({focused}) => (
              <Image
                source={require('./Components/rating.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1F2041' : '#CDCDD2',
                }}
              />
            ),
            drawerLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? 'black' : '#CDCDD2',
                  fontSize: 15,
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                Rate Us
              </Text>
            ),
          }}
          name="RateUs"
          component={RateUs}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
