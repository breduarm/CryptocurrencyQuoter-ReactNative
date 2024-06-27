import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Form = () => {
  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Text style={styles.label}>Crypto moneda</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        fontSize: 22,
        marginVertical: 20,
        textTransform: 'uppercase',
    }
})

export default Form
