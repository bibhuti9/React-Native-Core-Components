import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS} from '../themes/color';

export default function Spinner({
  size = 'large',
  text = 'Loading',
  color = COLORS.primary,
  animating = true,
  position = 'center',
}) {
  return (
    <View
      style={[
        styles.indecatorContainerStyle,
        {
          display: animating ? 'flex' : 'none',
          backgroundColor: color != '' ? color : '',
          justifyContent: position,
        },
      ]}>
      <ActivityIndicator size={size} />
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  indecatorContainerStyle: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    zIndex: 1,
    opacity: 0.5,
  },
  textStyle: {
    alignSelf: 'center',
  },
});
