import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../molecules/header';
import APOD from '../../organims/apod';
import Last5APOD from '../../organims/last-5-apod';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <APOD />
      <Last5APOD />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#0C0C0C',
  },
});

