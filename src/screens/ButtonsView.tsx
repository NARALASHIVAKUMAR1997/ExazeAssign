import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomButton from '../components/CustomButton';
import {useAppSelector} from '../redux/hooks';
import SwipeableButton from '../components/SwipeableButton';

const ButtonView = ({navigation}: {navigation: any}) => {
  const name = useAppSelector(state => state.user.name);

  const handleSlideAction = () => {
     navigation.navigate('DeviceCheck');
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{name}!</Text>
      </View>

      <View style={{flex: 0.5, justifyContent: 'flex-end'}}>
        <Text style={{color: '#a6b600', fontSize: 16, fontWeight: 'bold'}}>
          4 variations of a button
        </Text>
      </View>

      <View style={{justifyContent: 'space-around', flex: 0.4}}>
        <CustomButton
          onPress={() => console.log('Button pressed')}
          style={{backgroundColor: null}}
        />

        <CustomButton
          onPress={() => console.log('Button pressed')}
          style={{backgroundColor: '#30434b'}}
        />

        <CustomButton
          onPress={() => console.log('Button pressed')}
          style={{backgroundColor: '#56b3fd'}}
        />

        <SwipeableButton onSwipe={handleSlideAction} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1925',
  },
  userInfoContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#eee',
    borderBottomLeftRadius: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ccc',
  },
  userName: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Optional: Align items at the center vertically
    width: '100%', // Ensure the view takes full width
    paddingHorizontal: 20, // Optional: Add horizontal padding for spacing
  },
});

export default ButtonView;
