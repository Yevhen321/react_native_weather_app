import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import moment from 'moment'

import { weatherType, WeatherCondition } from '../utilities/weather-type'

interface ItemProps {
  title: string
  condition: string
  min: number
  max: number
}

const ListItem = ({ title, condition, min, max }: ItemProps) => {
  const { item, date, temp, dateTextWrapper } = styles
  const weatherCondition: WeatherCondition = condition as WeatherCondition
  const weatherInfo = weatherType[weatherCondition]
  return (
    <View style={item}>
      <Feather
        name={weatherInfo?.icon as keyof (typeof Feather)['glyphMap']}
        size={50}
        color={'white'}
      />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(title).format('dddd')}</Text>
        <Text style={date}>{moment(title).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}° ${Math.round(max)}°`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink',
  },
  temp: {
    color: '#fff',
    fontSize: 20,
  },
  date: {
    color: '#fff',
    fontSize: 15,
  },
  dateTextWrapper: {
    flexDirection: 'column',
  },
})

export default ListItem
