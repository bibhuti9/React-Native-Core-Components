import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {SIZES} from '../themes/color';

export default function ButtonComponents() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraphStyle}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
      <Button title="Save" style={styles.buttonStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SIZES.margin1 + 10,
    borderWidth:1,
  },
  paragraphStyle: {
    marginVertical: SIZES.margin1,
  },
  buttonStyle: {
    width: 400,
  },
});
