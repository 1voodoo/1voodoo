export  function main(data, type) {
    const timeBefore = new Date(data.sys.sunrise * 1e3);
    const timeSunrise = `${timeBefore.getHours()}:${timeBefore.getMinutes()}`;
    const timeAfter = new Date(data.sys.sunset * 1e3);
    const timeSunset = `${timeAfter.getHours()}:${timeAfter.getMinutes()}`;
  
        document.querySelector('body').insertAdjacentHTML('beforeend', `  
      <div  class="container container-main">
  <div class="main-body">
    <div class="main-info" data-component >
      <div class="city">
        <span class="uppercase">${data.name}</span> 
        <span class="type">${data.weather[0].description}</span>
      </div>
      <img class="icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      <div class="temp">
        <div class="temp-value">
          <div id="tempCel">${Math.floor(data.main.temp)}</div>
          <div id="tempFar"class = "hidden">${tempFarMin(data.main.temp)}</div>
          <div class="temp-controls">
            <button id="c" class="temp-type temp-type-active">°C</button>
            <span>|</span>
            <button id="f" class="temp-type">°F</button>
          </div>
        </div>
        <div id = "bottomTemperatureCel">(min. ${Math.round(data.main.temp_min)} °C / max. ${Math.floor(data.main.temp_max)} °C)</div>
        <div id = "bottomTemperatureFar" class = "hidden">(min. ${tempFarMin(data.main.temp_min)} °F / max. ${tempFar(data.main.temp_max)} °F)</div>  
      </div>
    </div>
    <div class="info" data-component>
      <div class="info-row" data-component>
        <div class="info-row-label">Wind</div>
        <div class="info-row-value">${data.wind.speed} m/s</div>
      </div>
      <div class="info-row">
        <div class="info-row-label">Humidity</div>
        <div class="info-row-value">${data.main.humidity} %</div>
      </div>
      <div class="info-row">
        <div class="info-row-label">Pressure</div>
        <div class="info-row-value"> ${data.main.pressure} mb</div>
      </div>
      <div class="info-row">
        <div class="info-row-label">Clound</div>
        <div class="info-row-value">${data.clouds.all} %</div>
      </div>
      <div class="info-row">
        <div class="info-row-label">Sunrise</div>
        <div class="info-row-value">${timeSunrise}</div>
      </div>
      <div class="info-row">
        <div class="info-row-label">Sunset</div>
        <div class="info-row-value">${timeSunset}</div>
      </div>
      <div class="info-row">
        <div class="info-row-label">Visibility</div>
        <div class="info-row-value">${data.visibility/1000} km</div>
      </div>
      <div class="info-row">
        <div class="info-row-label">Rain</div>
        <div class="info-row-value">${(data.rain) ? (data.rain['1h']) : '-'} mm</div>
      </div>
    </div>
  </div>
  </div>
      `);
      
  }
  export function toggleButtons() {
  
    const f = document.getElementById("f");
    const c = document.getElementById("c");
    const tempFar = document.getElementById("tempFar");
    const tempCel = document.getElementById("tempCel");
    const bottomTemperatureCel = document.getElementById("bottomTemperatureCel");
    const bottomTemperatureFar = document.getElementById("bottomTemperatureFar");
  
    f.addEventListener("click", () => {
    
        f.classList.add("temp-type-active");
        c.classList.remove("temp-type-active");
        tempFar.classList.remove("hidden");
        tempCel.classList.add("hidden");
        bottomTemperatureCel.classList.add("hidden");
        bottomTemperatureFar.classList.remove("hidden"); 
        
    });
    c.addEventListener("click", () => {
    
        f.classList.remove("temp-type-active");
        c.classList.add("temp-type-active");
        tempFar.classList.add("hidden");
        tempCel.classList.remove("hidden");
        bottomTemperatureCel.classList.remove("hidden");
        bottomTemperatureFar.classList.add("hidden");
    
    })
  }
  export function clearAll() {
    document.querySelector('.container-main')?.remove();
    document.querySelector('.container-forecast')?.remove();
  }
  
  const tempFar = function (c) {
    return Math.round((c * 9/5)+32);
  }
  
  const tempFarMin = function (c) {
  return Math.floor((c * 9/5)+32);
  
}