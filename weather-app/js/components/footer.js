export function footer(value) {
    document.querySelector('body').insertAdjacentHTML('beforeend', `
      <div class="container container-forecast" data-component="">
        <div class="container-title">${value.list.length}-days forecast</div>
        <div class="forecast">
        </div>
      </div>
    `)
  }
  
  export function getForecastItem(value, item){
    value.list.forEach(item => {
      document.querySelector('.forecast').insertAdjacentHTML('beforeend',`
    <div class="forecast-item">
    <div class="fotecast-item-date">${forecastDay(item)}</div>
          <div class="fotecast-item-type">${item.weather[0].description}</div>
          <img class="forecast-item-icon" src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png"></img>
          <div class="forecast-item-temp">${Math.floor(item.temp.min)} °C /  ${Math.round(item.temp.max)} °C</div>
        </div>
    `)
  });
  }
  
  function forecastDay(item){
    const date = new Date(item.dt * 1e3);
    const dateDay = `${date.toString().slice(0, 3)}`;
    return dateDay
  }