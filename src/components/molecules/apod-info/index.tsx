import React from 'react';
import {View, StyleSheet} from 'react-native';
import {APODResponse} from '../../../utils/api-service';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import { handleGetDetailPress } from '../../../utils/const';
import { RootStackParams } from '../../../routes';
import Button from '../../atoms/button';
import Label from '../../atoms/label';

interface InfoProps {
    info: APODResponse;
}

type NavigationProps = NativeStackNavigationProp<RootStackParams>;

const ApodInfo: React.FC<InfoProps> = ({ info }) => {
    const navigate= useNavigation<NavigationProps>();
    const handleViewBtnPress = () => {
        handleGetDetailPress(info, navigate);
    };

    return (
        <View style={styles.overlay}>
            <Label style={styles.title}>{info.title}</Label>
            <View style={styles.buttonContainer}>
            <Label style={styles.date}>{info.date}</Label>
            <Button onPress={handleViewBtnPress}>View More</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default ApodInfo;