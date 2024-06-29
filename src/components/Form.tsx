import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const Form = () => {
  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);

  useEffect(() => {
    getCryptoCurrency();
  }, []);

  const getCryptoCurrency = async () => {
    const url =
      'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    const result = await axios.get(url);
    setCryptoCurrencies(result.data.Data);
  };

  const quotePrice = () => {
    
  }

  return (
    <View>
      <Text style={styles.label}>Currency</Text>
      <Picker
        itemStyle={{height: 120}}
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
      <Picker
        selectedValue={cryptoCurrency}
        onValueChange={(itemSelected: string) => {
          setCryptoCurrency(itemSelected);
        }}>
        <Picker.Item label="- Select -" value="" />
        {cryptoCurrencies.map(crypto => (
          <Picker.Item
            key={crypto.CoinInfo.Id}
            label={crypto.CoinInfo.FullName}
            value={crypto.CoinInfo.Name}
          />
        ))}
      </Picker>

      <TouchableHighlight style={styles.btnQuote} onPress={() => {
        quotePrice();
      }}>
        <Text style={styles.btnQuoteText}>Quote</Text>
      </TouchableHighlight>
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
  btnQuote: {
    backgroundColor: '#5E49E2',
    height: 40,
    justifyContent: 'center',
    marginTop: 24,
  },
  btnQuoteText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Form;
