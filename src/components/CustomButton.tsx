// CustomButton.js

import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  PanResponder,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const BUTTON_WIDTH = Dimensions.get('screen').width - 48;

const CustomButton = ({onPress, style}: {onPress: () => void, style: any}) => {
  console.log("dhwjdhd", style);

  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, style]}>
      <Text style={style.backgroundColor !== '#56b3fd'? styles.buttonText : styles.customBtnTextColor }>Press me</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    borderColor: 'gray',
    alignItems: 'center',
    flexDirection: 'row',
    width: BUTTON_WIDTH,
  },
  buttonText: {
    color: '#56b3fd',
    fontWeight: 'bold',
    fontSize: 16,
  },
  customBtnTextColor: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomButton;
