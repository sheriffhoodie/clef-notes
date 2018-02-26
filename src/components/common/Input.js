import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({label, value, onChangeText,
  placeholder, secureTextEntry, autoFocus, keyboardType, multiline}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
        multiline={multiline}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="#939393"
        autoFocus={autoFocus}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    color: 'white',
    fontWeight: 'bold'
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
