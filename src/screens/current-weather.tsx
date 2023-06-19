import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { WeatherCondition, weatherType } from '../utilities/weather-type'
import RowText from '../components/row-text'
import type { Weather } from '../types/weather.type'

interface CurrentWeatherProps {
  temp: number
  feels_like: number
  temp_max: number
  temp_min: number
  weather: Weather[]
}

const CurrentWeather = ({
  temp,
  feels_like,
  temp_max,
  temp_min,
  weather,
}: CurrentWeatherProps) => {
  const {
    container,
    bodyWrapper,
    desc,
    feels,
    highlow,
    highlowWrapper,
    message,
    tempStyles,
    wrapper,
  } = styles
  const weatherCondition: WeatherCondition = weather[0].main as WeatherCondition

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={
            weatherType[weatherCondition]
              .icon as keyof (typeof Feather)['glyphMap']
          }
          size={100}
          color='white'
        />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>{`Feels like: ${feels_like}`}</Text>
        <RowText
          messageOne={`High: ${temp_max}°`}
          messageTwo={`Low: ${temp_min}°`}
          containerStyle={highlowWrapper}
          messageOneStyle={highlow}
          messageTwoStyle={highlow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyle={bodyWrapper}
        messageOneStyle={desc}
        messageTwoStyle={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  tempStyles: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highlow: {
    color: 'black',
    fontSize: 20,
  },
  highlowWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  desc: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
})

export default CurrentWeather
