import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  RefreshControl,
  Animated,
  StatusBar,
} from 'react-native';

import {COLORS, SIZES} from '../themes/color';
import Spinner from '../common/Spinner';

export default function FlatListComponents() {
   console.log(SIZES.width)
  const [menus, setMenus] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const [spinner, setSpinner] = useState(true);
  const [currentPossition, setCurrentPossitino] = useState([]);
  const [bottomAnimateValue, setBottomAnimateValue] = useState(
    new Animated.Value(0),
  );
  const fetchData = () => {
    fetch(
      'https://bibhuti-foodies-backend.herokuapp.com/restuarent/fetchAllMenus',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          offSet: offSet,
        }),
      },
    )
      .then(response => {
        return response.json();
      })
      .then(({Data}) => {
        setSpinner(false);
        setMenus([...menus, ...Data]);
      });
  };
  useEffect(() => {
    fetchData();
  }, [offSet]);

  const handleLoadMore = () => {
    setSpinner(true);
    setOffSet(offSet + 1);
  };

  const handlerSpinner = () => {
    return (
      <Spinner animating={spinner} text={''} color={''} position={'flex-end'} />
    );
  };

  const bottomAnimatedHandler = () => {
    Animated.timing(bottomAnimateValue, {
      toValue: 0,
      duration: 850,
      useNativeDriver: true, // Add this line
    }).start();
    console.log('onBegin Start Stop');
  };

  const bottomAnimatedHandlerStart = () => {
    Animated.timing(bottomAnimateValue, {
      toValue: 300,
      duration: 850,
      useNativeDriver: true, // Add this line
    }).start();
  };

  const bottomAnimateStyle = {
    transform: [
      {
        translateY: bottomAnimateValue,
      },
    ],
  };

  const renderItem = ({item, index, separators}) => {
    return (
      <View key={index} style={styles.card}>
        <View>
          <Image
            source={{uri: item.restuarentInfo.mimages[0]}}
            style={styles.imageStyle}
          />
          <View style={styles.qtyStyle}>
            <Text numberOfLines={2}>{item.restuarentInfo._id}</Text>
          </View>
        </View>
        <View style={styles.infoCard}>
          <Text style={{}}>{item.mdesc}</Text>
          <Text>{item.restuarentInfo.mqty}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* Vertical */}
      <Animated.FlatList
        data={menus}
        extraData={menus}
        horizontal
        pagingEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: StatusBar.currentHeight || 42,
        }}
        ListEmptyComponent={handlerSpinner}
        getItemLayout={(menus, index) => ({
          length: menus.length,
          offset: menus.length * index,
          index,
        })}
        contentInset={{top: 10}}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        renderItem={renderItem}
      />
      {/* Horizontal */}

      <Animated.View style={[styles.bottomStyle, bottomAnimateStyle]}>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        {spinner ? (
          <TouchableOpacity>{handlerSpinner()}</TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Text>Orders</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity>
          <Text>Profiles</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: SIZES.width,
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  imageStyle: {
    width: SIZES.width * 0.9,
    height: 220,
    borderRadius: SIZES.radious,
  },
  qtyCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 100,
    height: 50,
    borderTopRightRadius: SIZES.radious,
    borderBottomLeftRadius: SIZES.radious,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  infoCard: {
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'space-between',
  },
  loadMoreButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.primary,
  },
  bottomStyle: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    width: SIZES.width / 1.2,
    height: 50,
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radious,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
