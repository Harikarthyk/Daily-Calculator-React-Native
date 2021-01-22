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
          height={height / 28}
          width={width / 12}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    width: '100%',
    height: height / 14,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 20,
    width: width / 12,
    height: height / 28,
  },
});

export default Header;
