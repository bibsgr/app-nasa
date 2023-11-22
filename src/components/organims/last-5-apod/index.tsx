import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {getPast5APOD, APODResponse} from '../../../utils/api-service';
import Last5APODItem from '../../molecules/last-5-apod-item';

export default function Last5APOD() {
  const [images, setImages] = useState<APODResponse[]>();

  useEffect(() => {
    (async () => {
      setImages(await getPast5APOD());
    })();
  }, []);

  if (!images) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {images.map((img, i) => (
          <Last5APODItem info={img}/>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 24,
  },
});
