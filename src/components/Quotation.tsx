import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Quotation = ({quotation}) => {
  if (Object.keys(quotation).length === 0) return null;

  return (
    <View>
      <Text>{quotation.price}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default Quotation;
