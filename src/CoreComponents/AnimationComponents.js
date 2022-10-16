import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

export default function AnimationComponents() {
  const ref = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(ref, {
      toValue: 300,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyles = {
    transform: [{translateY: ref}],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});
