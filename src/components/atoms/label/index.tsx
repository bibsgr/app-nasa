import React from 'react';
import { Text, TextStyle } from 'react-native';

interface LabelProps {
    style: TextStyle;
    children: string;
}

const Label: React.FC<LabelProps> = ({ children, style }) => {
  return <Text style={[style]}>{children}</Text>;
};

export default Label;
