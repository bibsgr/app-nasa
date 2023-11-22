import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

interface ButtonProps {
    onPress: () => void;
    source: string;
  }

const IconButton: React.FC<ButtonProps> = ({ onPress, source }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Image source={{uri: source}} style={styles.image}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    image:{
        width: 40, 
        height: 40
    },
});

export default IconButton;