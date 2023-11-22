import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Label from '../../atoms/label';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Label style={styles.title}>Explore</Label>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={require('../../../assets/images/nasa-logo.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  image: {
    width: 60,
    height: 60,
  },
});

