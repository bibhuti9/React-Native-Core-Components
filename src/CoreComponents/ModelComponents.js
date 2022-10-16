import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');
export default function ModelComponents() {
  const [modalHendler, setModalHendler] = useState(true);
  const onPressHendler = () => {
    setModalHendler(!modalHendler);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Modal animationType="fade" visible={modalHendler} transparent={true}>
          <View style={styles.modelMaincontainer}>
            <View style={styles.modelContainer}>
              {/*Header*/}
              <View style={styles.modelHeader}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>Billing Price</Text>
                </View>
                <TouchableOpacity
                  onPress={onPressHendler}
                  style={styles.closeButtonStyle}>
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
              {/*Body*/}
              <View style={styles.modelBody}>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </View>
              {/*Gooter*/}
              <View style={styles.modelFooter}>
                <TouchableOpacity
                  style={[styles.fotterButtonStyle, {backgroundColor: '#fff'}]}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.fotterButtonStyle, {backgroundColor: 'pink'}]}>
                  <Text>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelMaincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelContainer: {
    width: width / 1.4,
    height: height / 2,
    backgroundColor: 'pink',
    borderRadius: 10,
    elevation: 5,
    padding: 5,
  },
  modelHeader: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
  },
  closeButtonStyle: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    borderBottomLeftRadius: 20,
  },
  modelBody: {
    borderWidth: 1,
    flex: 5,
  },
  modelFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  fotterButtonStyle: {
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    width: 80,
    height: 40,
  },
});
