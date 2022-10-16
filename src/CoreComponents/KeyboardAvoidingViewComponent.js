import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Pressable,
  Button,
  Dimensions,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');
export default function KeyboardAvoidingViewComponent() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.card}>
        <TextInput style={styles.textInputStyle} />
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
          console.log('from button')
        }}>
          <Text>CLick</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  card: {
    padding: 10,
  },
  textInputStyle: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    color: '#000',
    marginVertical: 20,
    borderRadius: 10,
    width:width/1.4
  },
  buttonStyle: {
    width: width / 1.5,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
  },
});
