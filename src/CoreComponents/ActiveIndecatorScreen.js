import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Spinner from '../common/Spinner';
import {COLORS} from '../themes/color';
export default function ActiveIndecatorScreen() {
  const [animating, setAnimating] = useState(true);

  return (
    <View style={styles.container}>
      <Spinner
        color={COLORS.black}
        text={'Loading...'}
        animating={animating}
      />
      <TouchableOpacity>
        <Text>from Parent</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: COLORS.black,
  },
});
