import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {imageList} from '../dummyData';
import {COLORS, SIZES} from '../themes/color';
import {leftIcon, rightIcon} from '../themes/icon';

const {width, height} = Dimensions.get('screen');

const ITEM_WIDTH = width * 0.75;
const ITEM_HEIGHT = height * 0.9;

export default function ImageComponents() {
  const [currentViewableItem, setCurrentViewableItem] = useState(0);
  const ref = useRef(null);
  const currentViewableItemIndex = useRef(0);
  const viewConfigRef = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  });
  const onViewCallBack = useCallback(({viewableItems}) => {
    currentViewableItemIndex.current = viewableItems[0].index;

    // console.log(currentViewableItemIndex.current)
    // setCurrentViewableItem(viewableItems[0].index);
    // return;
  }, []);

  useEffect(() => {
    ref?.current?.scrollToIndex({
      index: currentViewableItemIndex.current,
      animated: true,
      viewPossition: 0,
    });
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <ImageBackground
        style={styles.backgroundImageStyle}
        source={{uri: item.download_url}}
        resizeMethod="auto"
        blurRadius={30}>
        <FastImage
          style={{width: 200, height: 200}}
          source={{
            uri: item.download_url,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        {/*<Image source={{uri: item.download_url}} style={styles.imageStyle} />*/}
        <Text>{currentViewableItemIndex.current}</Text>
      </ImageBackground>
    );
  };

  const leftHandlerPress = () => {
    if (parseInt(currentViewableItemIndex.current) === 0) return;
    currentViewableItemIndex.current =
      parseInt(currentViewableItemIndex.current) - 1;
    ref?.current?.scrollToIndex({
      index: currentViewableItemIndex.current,
      animated: true,
      viewPossition: 0,
    });
  };
  const rightHandlerPress = () => {
    if (parseInt(currentViewableItemIndex.current) === imageList.length - 1)
      return;
    currentViewableItemIndex.current =
      parseInt(currentViewableItemIndex.current) + 1;
    ref?.current?.scrollToIndex({
      index: currentViewableItemIndex.current,
      animated: true,
      viewPossition: 0,
    });
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.nextPreContainer}>
        <TouchableOpacity
          onPress={leftHandlerPress}
          style={styles.iconContainer}>
          <Image source={leftIcon} style={styles.arrowIconStyle} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={rightHandlerPress}
          style={styles.iconContainer}>
          <Image source={rightIcon} style={styles.arrowIconStyle} />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        pagingEnabled
        ref={ref}
        initialScrollIndex={currentViewableItemIndex.current}
        data={imageList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        // onViewableItemsChanged={onViewCallBack}
        // viewabilityConfig={viewConfigRef.current}
        maxToRenderPerBatch={5}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageStyle: {
    height: ITEM_HEIGHT,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: ITEM_WIDTH,
    height: 300,
    borderRadius: 20,
  },
  nextPreContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    position: 'absolute',
    bottom: width / 1,
    zIndex: 1,
  },
  iconContainer: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding - 5,
    borderRadius: SIZES.radious,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIconStyle: {
    height: 20,
    width: 20,
  },
});
