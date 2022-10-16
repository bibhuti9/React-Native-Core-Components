import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const COLORS = {
  gray1: '#e6e6e6',
  primary: '#25082f',
  secondary: '#6369d1',
  thirdColor: '#ec4a79',

  white: '#fff',
  black: '#000',
};

export const SIZES = {
  padding: 10,
  margin1: 10,
  radious: 20,
  width,
  height,
};

export const textSize = {
  h1: 30,
  h2: 25,
  h3: 20,
  h4: 15,
  h5:13
};

export const commonStyle = {
  textBoldB: {
    fontSize: textSize.h3,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  textBoldW: {
    fontSize: textSize.h3,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  baseText: {
    fontSize: textSize.h3,
  },
  smallText:{
    fontSize:textSize.h4,
  },
  iconStyle:{
    width:25,
    height:25
  }
};
