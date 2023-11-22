import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
    onPress: () => void;
    children: string;
  }

const Button: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'rgba(69, 72, 81, 0.56)',
        padding: 10
    },
    text: {
        color: 'white'
    }
});

export default Button;