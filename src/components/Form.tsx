import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Form = () => {
  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');

  return (
    <View>
      <Text style={styles.label}>Currency</Text>
      <Picker
        selectedValue={currency}
        onValueChange={(itemSelected: string) => {
          setCurrency(itemSelected);
        }}>
        <Picker.Item label="- Select -" value="" />
        <Picker.Item label="United Stated Dollar (USD)" value="USD" />
        <Picker.Item label="Mexican Peso (MXN)" value="MXN" />
        <Picker.Item label="Euro (EUR)" value="EUR" />
        <Picker.Item label="British Pound (GBP)" value="GBP" />
      </Picker>
      <Text style={styles.label}>Crypto currency</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    fontSize: 22,
    marginVertical: 20,
    textTransform: 'uppercase',
  },
});

export default Form;
