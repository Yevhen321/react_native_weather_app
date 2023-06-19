import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native'

import ListItem from '../components/list-item'
import type { ListTypes } from '../types/weather.type'

interface UpcomingWeatherProps {
  list: ListTypes[]
}

const UpcomingWeather = ({ list }: UpcomingWeatherProps) => {
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/background.avif')}
        style={image}
      >
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <ListItem
              title={item.dt_txt}
              condition={item.weather[0].main}
              min={item.main.temp_min}
              max={item.main.temp_max}
            />
          )}
          keyExtractor={(_, index) => index.toLocaleString()}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },
  image: {
    flex: 1,
  },
})

export default UpcomingWeather
