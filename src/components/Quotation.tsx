import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Quotation = ({quotation}) => {
  if (Object.keys(quotation).length === 0) return null;

  return (
    <View style={styles.result}>
      <Text style={styles.text}>
        <Text style={styles.span}>{quotation.PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        Highest price of the day: {' '}
        <Text style={styles.span}>{quotation.HIGHDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Lowest price of the day: {' '}
        <Text style={styles.span}>{quotation.LOWDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Variation on the last hours: {' '}
        <Text style={styles.span}>{quotation.CHANGEPCT24HOURS} % </Text>
      </Text>
      <Text style={styles.text}>
        Last update: {' '}
        <Text style={styles.span}>{quotation.LASTUPDATE}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {},
  text: {},
  price: {},
  span: {},
});

export default Quotation;
