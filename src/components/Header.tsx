import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.header}> Crypto currency </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'ios' ? 16 : 8,
        fontFamily: 'Lato-Black',
    },
});

export default Header;
