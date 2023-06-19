import React from 'react'
import { Text, View, StyleSheet, TextStyle, ViewStyle } from 'react-native'

interface RowTextProps {
  messageOne: string
  messageTwo: string
  containerStyle: ViewStyle
  messageOneStyle: TextStyle
  messageTwoStyle: TextStyle
}

const RowText = ({
  messageOne,
  messageTwo,
  containerStyle,
  messageOneStyle,
  messageTwoStyle,
}: RowTextProps) => {
  return (
    <View style={containerStyle}>
      <Text style={messageOneStyle}>{messageOne}</Text>
      <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    color: 'black',
    fontSize: 20,
  },
  messageOneStyle: {
    flexDirection: 'row',
    gap: 8,
  },
  messageTwoStyle: {
    flexDirection: 'row',
    gap: 8,
  },
})

export default RowText
