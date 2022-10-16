import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {store} from './store';

// Components
import ActiveIndecatorScreen from './src/CoreComponents/ActiveIndecatorScreen';
import ButtonComponents from './src/CoreComponents/ButtonComponents';
import FlatListComponents from './src/CoreComponents/FlatListComponents';
import ImageComponents from './src/CoreComponents/ImageComponents';
import KeyboardAvoidingViewComponent from './src/CoreComponents/KeyboardAvoidingViewComponent';
import ModelComponents from './src/CoreComponents/ModelComponents';
import AnimationComponents from './src/CoreComponents/AnimationComponents';
import ScrollViewComponents from './src/CoreComponents/ScrollViewComponents';
import GridCard from './src/CoreComponents/GridCard';
import AirBnbScreen from './src/screens/AirBnbScreen';
import { StatusBar } from 'react-native';
const Drawer = createDrawerNavigator();
export default function App() {
  const DrawerList = [
    {
      name: 'ActiveIndecator',
      component: ActiveIndecatorScreen,
    },
    {
      name: 'Button Component',
      component: ButtonComponents,
    },
    {
      name: 'FlatListComponents',
      component: FlatListComponents,
    },
    {
      name: 'ImageComponents',
      component: ImageComponents,
    },
    {
      name: 'KeyboardAvoidingViewComponent',
      component: KeyboardAvoidingViewComponent,
    },
    {
      name: 'ModelComponents',
      component: ModelComponents,
    },
    {
      name: 'AnimationComponents',
      component: AnimationComponents,
    },
    {
      name: 'ScrollViewComponents',
      component: ScrollViewComponents,
    },
    {
      name: 'GridCard',
      component: GridCard,
    },
    {
      name:'AirBnbScreen',
      component:AirBnbScreen
    }
  ];

  return (
    <Provider store={store}>
    <StatusBar hidden/>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="AirBnbScreen"
          screenOptions={{headerShown: false}}>
          {DrawerList.map((item, index) => {
            return (
              <Drawer.Screen
                key={index}
                name={item.name}
                component={item.component}
              />
            );
          })}
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
