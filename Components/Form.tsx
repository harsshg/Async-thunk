import { View, Text,StyleSheet, Pressable, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions';
import { SafeAreaView } from 'react-native';
import styles from '../styles';
import { TextInput } from 'react-native';

const Form = () => {
  return (
<SafeAreaView style={styles.container}>
  <View style={styles.view1}>
  <Text style={styles.head}>Name</Text>
  <TextInput
  style={styles.input}
  placeholder='enter your name'
  />
  <Text style={styles.head}>Email</Text>
  <TextInput
  style={styles.input}
  placeholder='enter your Email'
  />
  <Text style={styles.head}>Age</Text>
  <TextInput
  style={styles.input}
  placeholder='enter your Age'
  />

  <TouchableHighlight style={styles.subbtn}><Text>Submit</Text></TouchableHighlight>

  </View>
 
</SafeAreaView>
  )
}

export default Form