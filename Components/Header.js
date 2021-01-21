//Import Dependencies
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

//Screen Width and Height
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function Header({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          source={require('./menu.png')}
          style={styles.icon}
          height={42}
          width={30}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    width: '100%',
    padding: 20,
  },
  icon: {
    width: 30,
    height: 45,
  },
});

export default Header;
