import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SIZES} from '../themes/color';

export default function GridCard() {
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* Body */}
      {/* Footer */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fad673',
    height: SIZES.height, // 760
    width: SIZES.width, //360
  },
});
