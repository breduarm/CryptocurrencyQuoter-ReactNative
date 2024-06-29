import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.header}> Crypto currency Quoter </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'ios' ? 16 : 8,
        fontFamily: 'Lato-Black',
        backgroundColor: '#5949E2',
        paddingBottom: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#FFFFFF',
        marginBottom: 30,
    },
});

export default Header;
