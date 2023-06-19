import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import CurrentWeather from '../screens/current-weather'
import UpcomingWeather from '../screens/upcoming-weather'
import City from '../screens/city'
import type { WeatherData } from '../types/weather.type'

const Tab = createBottomTabNavigator()

interface TabsProps {
  weather: WeatherData
}

const Tabs = ({ weather }: TabsProps) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'lightblue',
        },
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato',
        },
      }}
    >
      <Tab.Screen
        name={'Current'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      >
        {() => (
          <CurrentWeather
            feels_like={weather?.list[0].main.feels_like}
            temp={weather?.list[0].main.temp}
            temp_max={weather?.list[0].main.temp_max}
            temp_min={weather?.list[0].main.temp_min}
            weather={weather?.list[0].weather}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name={'Upcoming'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      >
        {() => <UpcomingWeather list={weather?.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      >
        {() => (
          <City
            name={weather?.city.name}
            population={weather?.city.population}
            sunrise={weather?.city.sunrise}
            sunset={weather?.city.sunset}
            country={weather?.city.country}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs
