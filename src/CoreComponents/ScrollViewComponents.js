import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {menu} from '../dummyData';

export default function ScrollViewComponents() {
  const [menus, setMenus] = useState(menu);

  const renderItem = (value, index) => {
    return (
      <View key={value._id} style={{
        height:40,
        borderWidth:1,
        padding:10
      }}>
        <Text>{value.mname}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView
      onScroll={(event)=>{
        console.log(event.nativeEvent.contentOffset.y)
      }}
        stickyHeaderIndices={[0]}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        contentOffset={{x: 10, y: 10}}
        decelerationRate={'fast'}
        invertStickyHeaders={true}
>
        {menus.map((value, index) => renderItem(value, index))}
        <ScrollView horizontal={true}>
          <Text>Second Scroll View</Text>
          <FlatList
            data={menus}
            keyExtractor={item => {
              return item._id;
            }}
            renderItem={({item}) => {
              return <Text>Demo</Text>;
            }}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
