import { StyleSheet } from "react-native";
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions';
import babelConfig from "./babel.config";

let styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'

  },
  view1:{
    height:hp(30),
    width:wp(85),
    backgroundColor:'rgba(173, 173, 173, 0.17)',
    borderRadius:hp(3),
    objectFit:'cover',
    alignItems:'center',
    gap:3
  },
  head:{
   fontSize:fp(2),

  },
  input:{
    borderWidth:1,
    width:wp(60),
    fontSize:fp(2)
  },
  subbtn:{
    padding:2,
    borderWidth:1,
    marginTop:5,
    borderRadius:3
  }

});
export default styles;