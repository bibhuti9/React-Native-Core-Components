import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../themes/color';

export default function Separator({color}) {
  return <View style={[styles.separatorStyle, {borderColor: color}]}></View>;
}
const styles = StyleSheet.create({
  separatorStyle: {
    marginVertical: SIZES.margin1,
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth - 0.1,
  },
});
