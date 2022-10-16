import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from '../themes/airBnbStyles/globalStyle';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import {
  airbnb,
  giftBox,
  rightArrow,
  rightIcon,
  roomBackgroundImage,
  setting,
  target,
} from '../themes/icon';
import {COLORS, commonStyle, SIZES, textSize} from '../themes/color';
import Separator from '../common/Separator';
import TouchableOpacityComponents from '../common/TouchableOpacityComponents';
import {category, menuTenData} from '../dummyData';

export default function AirBnbScreen() {
  const featuredFlatList = ({item, index}) => {
    return (
      <View key={String(index)} style={styles.featuredFlatListStyle}>
        <Image source={{uri: item.cicon}} style={commonStyle.iconStyle} />
        <Text
          style={
            (commonStyle.smallText,
            {
              color: COLORS.black,
              alignSelf: 'center',
              marginHorizontal: SIZES.padding,
            })
          }>
          {item.cname}
        </Text>
      </View>
    );
  };
  const OverViewFlatListCard = ({item, index}) => {
    console.log(item);
    return (
      <View key={String(index)} style={styles.overViewBodyStyle}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Image
            source={{uri: item.restuarentInfo.mimages[0]}}
            style={[styles.iconStyle, {marginHorizontal: 5}]}
          />
          <Text numberOfLines={1}>{item.restuarentInfo.mname}</Text>
        </View>
        <View style={{flex: 2, marginVertical: SIZES.margin1}}>
          <Text numberOfLines={4}>{item.restuarentInfo.mdesc}</Text>
        </View>
      </View>
    );
  };
  const RoomCard = () => {
    return (
      <View style={styles.roomCardContainer}>
        <ImageBackground
          style={styles.roomCardBackGroundImageStyle}
          source={roomBackgroundImage}>
          <View style={styles.roomCardBottomNav}>
            <View style={styles.roomCardLeftBottomNav}>
              <View style={styles.roomCardLeftLogoStyle}>
                <Image source={airbnb} style={styles.logoStyle} />
              </View>
              <View
                style={{
                  marginHorizontal: SIZES.margin1,
                }}>
                <Text style={commonStyle.textBoldB}>AirBnb</Text>
                <Text style={commonStyle.smallText}>Wel Come To Out House</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={setting} style={styles.iconStyle} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  const TrialCard = () => {
    return (
      <LinearGradient
        style={styles.trialContainer}
        colors={[COLORS.thirdColor, COLORS.secondary]}
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}>
        <View style={styles.trialCardHeader}>
          <View style={styles.roomCardLeftBottomNav}>
            <View style={styles.roomCardLeftLogoStyle}>
              <Image source={giftBox} style={styles.logoStyle} />
            </View>
            <View
              style={{
                marginHorizontal: SIZES.margin1,
              }}>
              <Text style={commonStyle.textBoldW}>Free Trial</Text>
              <Text style={commonStyle.smallText}>expired</Text>
            </View>
          </View>
          <View>
            <TouchableOpacityComponents
              width={90}
              textColor={COLORS.secondary}
              text={'Upgrade'}
              color={COLORS.white}
            />
          </View>
        </View>
        <Separator color={COLORS.white} />
        <View style={styles.trialBottomNav}>
          <Text style={(commonStyle.smallText, {color: COLORS.white})}>
            See Benifit
          </Text>
          <TouchableOpacity>
            <Image source={rightIcon} style={commonStyle.iconStyle} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  };
  const FeaturedCard = () => {
    return (
      <View style={{marginVertical: SIZES.margin1}}>
        <View style={styles.featuredHeader}>
          <Text style={(commonStyle.baseText, {color: COLORS.white})}>
            Complete Your Profile
          </Text>
          <Text style={(commonStyle.smallText, {color: '#d68a5e'})}>
            5 Steps Left
          </Text>
        </View>
        <FlatList
          data={category}
          horizontal
          contentContainerStyle={{marginVertical: SIZES.margin1}}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item._id}
          renderItem={featuredFlatList}
        />
      </View>
    );
  };
  const TryCard = () => {
    return (
      <View>
        <Text style={(commonStyle.baseText, {color: COLORS.white})}>
          My Test
        </Text>
        <View style={styles.tryBodyCard}>
          <View style={{marginVertical: SIZES.padding}}>
            <Text style={(commonStyle.textBoldW, {color: COLORS.white})}>
              <Image source={target} style={{width: 20, height: 20}} />
              value fit test
            </Text>
            <Text style={{color: COLORS.gray1, fontSize: textSize.h5}}>
              not completed
            </Text>
          </View>
          <TouchableOpacityComponents
            width={'100%'}
            textColor={COLORS.white}
            color={COLORS.secondary}
            text={'Start Test'}
          />
        </View>
      </View>
    );
  };
  const OverViewCard = () => {
    return (
      <View style={{marginVertical: SIZES.margin1}}>
        <View style={styles.featuredHeader}>
          <Text style={(commonStyle.baseText, {color: COLORS.white})}>
            Overview
          </Text>
        </View>
        <FlatList
          data={menuTenData}
          horizontal
          contentContainerStyle={{marginVertical: SIZES.margin1}}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item._id}
          renderItem={OverViewFlatListCard}
        />
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* RoomCard */}
        <RoomCard />
        {/* TrialCard */}
        <TrialCard />
        {/* FeaturedCard */}
        <FeaturedCard />
        {/* TryCard */}
        <TryCard />
        {/* OverViewCard */}
        <OverViewCard />
      </View>
    </ScrollView>
  );
}
