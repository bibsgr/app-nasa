import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {APODResponse} from './api-service';
import {RootStackParams} from '../routes';

type NavigationProps = NativeStackNavigationProp<RootStackParams>;

export const handleGetDetailPress = (info: APODResponse, navigation: NavigationProps) => {
    navigation.navigate('Detail', {
        title: info.title,
        date: info.date,
        url: info.url,
        explanation: info.explanation,
    });
};