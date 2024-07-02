import React, { PropsWithChildren } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Quotation from '../adapters/entities/Quotation';

type QuotationComponentProps = PropsWithChildren<{
    quotation: Quotation;
}>

const QuotationComponent = ({quotation}: QuotationComponentProps): React.JSX.Element | null => {

  if (!quotation.isValidQuotation()) return null;

  return (
    <View style={[styles.text, styles.result]}>
      <Text style={styles.text}>
        <Text style={styles.span}>{quotation.price}</Text>
      </Text>
      <Text style={styles.text}>
        Highest price of the day: {' '}
        <Text style={styles.span}>{quotation.highPriceDay}</Text>
      </Text>
      <Text style={styles.text}>
        Lowest price of the day: {' '}
        <Text style={styles.span}>{quotation.lowPriceDay}</Text>
      </Text>
      <Text style={styles.text}>
        Variation on the last hours: {' '}
        <Text style={styles.span}>{quotation.lastDayVariaton} % </Text>
      </Text>
      <Text style={styles.text}>
        Last update: {' '}
        <Text style={styles.span}>{quotation.lastUpdate}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    backgroundColor: '#5E49E2',
    padding: 20,
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 38,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});

export default QuotationComponent;
