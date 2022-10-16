import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {SIZES} from '../themes/color';

export default function TouchableOpacityComponents({width,textColor, color, text}) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        {
          width: width,
          backgroundColor: color,
        },
      ]}>
      <Text style={{color:textColor}}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: SIZES.radious - 10,
    padding: SIZES.padding,
    justifyContent: 'center',
    alignItems:'center'
  },
});
