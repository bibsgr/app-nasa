import React, {useEffect, useState} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {getTodayAPOD, APODResponse} from '../../../utils/api-service';

import ApodInfo from '../../molecules/apod-info';

export default function APOD() {
  const [apod, setApod] = useState<APODResponse>();

  useEffect(() => {
    (async () => {
      const _apod = await getTodayAPOD();
      setApod(_apod);
    })();
  }, []);

  if (!apod) {
    return null;
  }
  return (
    <View style={{flex:1, margin:10}}>
      <View style={{ flex: 1 }}>
        <Image source={{uri: apod.url}} style={styles.image} />
      </View>
      <ApodInfo info={apod} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 32,
  },
});