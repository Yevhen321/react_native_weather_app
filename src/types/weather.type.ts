interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface WeatherData {
  city: {
    coord: Coord
    country: string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
  }
  cnt: number
  cod: string
  list: ListTypes[]
}

export interface ListTypes {
  clouds: { all: number }
  dt: number
  dt_txt: string
  main: Main
  weather: Weather[]
  wind: {
    deg: number
    gust: number
    speed: number
  }
}
