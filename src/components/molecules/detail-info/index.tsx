import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Label from '../../atoms/label';

interface InfoProps {
    title: string;
    date: string;
    explanation:string;
}

const DetailInfo: React.FC<InfoProps> = ({ title, date, explanation }) => {
  return (
    <ScrollView style={styles.container}>
        <Label style={styles.title}>{title}</Label>
        <Label style={styles.date}>{date}</Label>
        <View style={styles.explanationContainer}>
            <Label style={styles.explanation}>{explanation}</Label>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        borderTopLeftRadius: 40, 
        borderTopRightRadius: 40, 
        backgroundColor:"black", 
        marginTop:-60, 
        padding:20
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

export default DetailInfo;