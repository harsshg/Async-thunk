import { StyleSheet } from 'react-native';

import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fp
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: 'rgba(255, 0, 0, 0.79)',
  },

  container2: {
    marginTop: 50,
    alignItems: 'center',
  },

  header: {

    color: 'white',
    fontSize: fp(4),
    fontWeight: 500,
    marginBottom:15,
  
  },

  pageview1: {
    margin: 8,
    height: hp(38),
    width: wp(88),
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    padding: 10,
    borderWidth: 4,
    borderRadius: 30,
    borderColor: 'rgba(0, 0, 0, 0.27)',
  },

  img: {
    width: wp(40),
    height: hp(20),
    marginRight: 10,
  },

  prdctdetails: {
    marginTop: hp(1),
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    padding: hp(1),
    borderRadius: hp(2),
  },
  txtbx: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: fp(2.01),
    fontWeight: '500',
  },

  txtbx2: {
    color: 'red',
    fontWeight: '500',
    fontSize: fp(2),
  },
});
export default styles;
