import React from 'react'
import { View, Text, StyleSheet, TextStyle } from 'react-native'
import { Feather } from '@expo/vector-icons'

interface IconTextProps {
  iconName: keyof (typeof Feather)['glyphMap']
  iconColor: string
  bodyText: string
  bodyTextStyles: TextStyle
}

const IconText = ({
  iconName,
  iconColor,
  bodyText,
  bodyTextStyles,
}: IconTextProps) => {
  const { container, textTheme } = styles
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
  },
})
export default IconText
