import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {APODResponse} from '../../../utils/api-service';

import { handleGetDetailPress } from '../../../utils/const';
import { RootStackParams } from '../../../routes';
import IconButton from '../../atoms/icon-button';

type NavigationProps = NativeStackNavigationProp<RootStackParams>;

interface InfoProps {
  info: APODResponse;
}

const Last5APODItem: React.FC<InfoProps> = ({ info }) => {
  const navigate= useNavigation<NavigationProps>();
  const handleViewBtnPress = () => {
      handleGetDetailPress(info, navigate);
  };
  return (
    <View style={styles.container}>
      <View style={{width: '90%'}}>
        <Text style={styles.title}>{info.title}</Text>
        <Text style={styles.date}>{info.date}</Text>
      </View>
      <IconButton onPress={handleViewBtnPress} source={require('../../../assets/images/right-arrow.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(69, 72, 81, 0.56)',
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: '#fff',
  },
});


export default Last5APODItem;