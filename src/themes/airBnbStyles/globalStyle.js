import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.primary,
  },
  roomCardContainer: {
    height: SIZES.height / 3,
    borderRadius: SIZES.radious,
    overflow: 'hidden',
    marginVertical: SIZES.margin1,
  },
  roomCardBackGroundImageStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  roomCardBottomNav: {
    flexDirection: 'row',
    padding: SIZES.padding,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: '30%',
  },
  roomCardLeftBottomNav: {
    flexDirection: 'row',
    flex: 1,
  },
  roomCardLeftLogoStyle: {
    borderWidth: 1,
    borderColor: COLORS.thirdColor,
    padding: 5,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    elevation: 4,
    backgroundColor: COLORS.white,
  },
  logoStyle: {
    height: 30,
    width: 30,
    borderWidth: 1,
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  trialContainer: {
    marginVertical: SIZES.margin1,
    height: SIZES.height / 6,
    borderRadius: SIZES.radious,
    padding: SIZES.padding,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trialCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trialBottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  featuredHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  featuredFlatListStyle: {
    flexDirection: 'row',
    margin: SIZES.margin1,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radious,
    padding: SIZES.padding,
  },
  tryBodyCard: {
    borderColor: COLORS.gray1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SIZES.margin1,
    borderRadius: SIZES.radious - 10,
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  overViewBodyStyle: {
    width: SIZES.width / 2,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radious - 15,
    justifyContent: 'center',
    alignItems:'center',
    marginHorizontal: SIZES.margin1,
    padding:SIZES.padding,
    flex:1
  },
});
