import {View, Text, TextInput} from 'react-native';

export const Input = () => {
  return (
    <TextInput
      placeholder="Search places"
      style={{
        backgroundColor: 'gray',
        width: '100%',
        borderRadius: 100,
        paddingHorizontal: 16,
      }}
    />
  );
};
