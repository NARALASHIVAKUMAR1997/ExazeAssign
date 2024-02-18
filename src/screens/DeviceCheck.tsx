import React, { useEffect } from 'react';
import { View, Text, NativeModules, StyleSheet, Alert } from 'react-native';
import { useAppSelector } from '../redux/hooks';


interface EmulatorCheckModule {
  isEmulator(callback: (isEmulator: boolean) => void): void;
}

const {EmulatorCheckModule} = NativeModules as {
  EmulatorCheckModule: EmulatorCheckModule;
};

const DeviceCheck = ({navigation}: {navigation: any}): JSX.Element => {
  const name = useAppSelector(state => state.user.name);

  useEffect(() => {
    EmulatorCheckModule.isEmulator((isEmulator: boolean) => {
      let title = 'Emulator/Simulator Detected';
      let message = 'This app is running on an emulator/simulator.';

      if (isEmulator != undefined && !isEmulator) {
        title = 'Physical Device Detcted';
        message = 'This app is Running on a real device.';
      }

      // Consolidate Alert logic to reduce redundancy
      Alert.alert(
        title,
        message,
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{name}!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default DeviceCheck;



