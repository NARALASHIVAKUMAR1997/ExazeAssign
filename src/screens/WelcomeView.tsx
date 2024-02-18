
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import { useAppDispatch } from '../redux/hooks';
import { updateName } from '../redux/user.name.slice';


const WelcomeView = ({navigation}: {navigation: any}): JSX.Element => {
    
  const dispatch = useAppDispatch();

  const [name, enterName] = useState('');

  const handleContinue = () => {
    dispatch(updateName(name));
    navigation.navigate('ButtonView');
  };

  return (
    <View style= {styles.container}>
      <TextInput style={styles.inputStyle}
        placeholder="Enter your name"
        value={name}
        onChangeText={enterName}
      />
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        marginBottom: 20,
    }
})

export default WelcomeView;
