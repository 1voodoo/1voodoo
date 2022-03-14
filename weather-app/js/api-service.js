export const API_KEY = "77e6357de04b316c0513d9b0a53f44c8";
export const API_KEY_SECOND = '58b6f7c78582bffab3936dac99c31b25';
export const location = crd => fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&appid=${API_KEY_SECOND}`);
export const locationForcast = crd => fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&cnt=7&appid=${API_KEY_SECOND}`);
export const mainBlock = city => fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
export const forcastBlock = city =>  fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${API_KEY_SECOND}`);