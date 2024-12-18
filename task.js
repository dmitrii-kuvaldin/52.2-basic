// https://get.geojs.io/v1/ip/geo.json
// киньте fetch по адресу и получите данные по широте, долготе и городу
// cсылки на api в чате zoom

// ! до 10-10

async function loadWeather() {
  const res = await fetch('https://get.geojs.io/v1/ip/geo.json')
  const data = await res.json()
  const { city, latitude, longitude } = data
  // сделайте fetch запрос по адресу:
  // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
  // вам нужно заменить координаты в строке на данные выше
  // получите данные погоды: температуру, скорость ветра и.т.д
  // также заберите weathercode - он вам понадобится

  // ! 10:50
  // перерыв 15 минут
  // 11:05 - встречаемся

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  )
  const weatherData = await weatherRes.json()

  const { current_weather_units, current_weather } = weatherData
  const { temperature, windspeed, weathercode } = current_weather

  console.log(temperature, windspeed, weathercode)

  // напишите функцию расшифровщик для кода погоды
  // выведите данные на странице, используйте current_weather_units
  // задеплойте на git pages
  // скиньте ссылку на код и на деплой

  // ! до конца занятия


}

loadWeather()
