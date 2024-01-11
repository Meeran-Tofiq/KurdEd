import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextField = ({ autoCapitalize, placeholder, secureTextEntry, extraStyles }) => {
  const [text, setText] = useState('');

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  return (
    <View>
      <TextInput
        onChangeText={handleTextChange}
        value={text}
        style={[styles.input, extraStyles]}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 53,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10
  },
});

export default TextField;
