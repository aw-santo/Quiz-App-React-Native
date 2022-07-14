import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizing</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: '600'
  },
  container: {
    paddingVertical: 25,
    justifyContent: 'center',
    flexDirection: 'row'
  }
})