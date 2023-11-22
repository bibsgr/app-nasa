import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParams} from '../../../routes';
import DetailInfo from '../../molecules/detail-info';

type UseRouteType = NativeStackScreenProps<RootStackParams, 'Detail'>['route'];
export default function Detail() {
  const {params} = useRoute<UseRouteType>();
  const {title, url, explanation, date} = params;

  return (
    <View style={styles.container}>  
        <Image source={{uri: url}} style={styles.image} />   
        <DetailInfo title={title!} date={date!} explanation={explanation!}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
  content: {
    flex: 1,
    backgroundColor: '#222222',
    borderRadius: 32,
  
  },
  image: {
    width: '100%',
    height: '50%',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  explanationContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: '#fff',
    fontSize: 16,
  },
});
