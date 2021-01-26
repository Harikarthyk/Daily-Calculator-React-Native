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
        {/* <Drawer.Screen
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
        /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
