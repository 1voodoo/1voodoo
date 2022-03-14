import { footer } from "./components/footer.js";
import { getForecastItem } from "./components/footer.js";
import { clearAll } from "./components/main.js";
import { location } from "./api-service.js";
import { locationForcast } from "./api-service.js";
import { mainBlock } from "./api-service.js";
import { forcastBlock } from "./api-service.js";
import { toggleButtons } from "./components/main.js";

const button  = document.getElementById("button-saerch");
const input = document.getElementById("input-search")
const errorText = document.querySelector(".error") ;
const loader = document.querySelector(".loader");
const buttonGeolocation = document.getElementById("button-geolocation");

buttonGeolocation.addEventListener("click", async () => {
    input.value  = "";
    errorText.classList.add('hidden');
    clearAll();
    startLoader();
    disabledButtonInputOnn();

        async function success(pos) {
            try {
                const crd = pos.coords;
                const inquiry= await location(crd);
                const answer = await inquiry.json();
                main(answer);
                
                const inquiryDays = await locationForcast(crd);
                const answers = await inquiryDays .json();
                footer(answers);
                getForecastItem(answers);
                toggleButtons();

            } 
            
            catch (error) {
                errorText.classList.remove('hidden');
           
            } 
            
            finally {
                stopLoader();
                disabledButtonInputOff();
                
            
            }
        
        
        }
    
    navigator.geolocation.getCurrentPosition(success); 

});

button.addEventListener("click", async () => {
    const city = input.value;
    disabledButtonInputOnn();
    startLoader();
    clearAll();
    errorText.classList.add('hidden');
    
    try {
       
        const inquiry = await mainBlock(city);
        const answer = await inquiry.json();
        main(answer);
        
        const inquiryDays = await forcastBlock(city);
        const answers = await inquiryDays .json();
        footer(answers);
        getForecastItem(answers);
        toggleButtons();
        
    } catch (error) {
        errorText.classList.remove('hidden');
       
      } finally {
        stopLoader();
        disabledButtonInputOff();
        
        
      }
      
  input.value  = "";  

});

function startLoader() {
    loader.classList.remove("hidden");
}

function stopLoader() {
    loader.classList.add("hidden");
}

function disabledButtonInputOnn() {
    button.disabled = true;
    input.disabled = true;
}

function disabledButtonInputOff() {
    button.disabled = false;
    input.disabled = false;
}

function updateDate (){
  const dateNow = document.querySelector('.date');
  let date = new Date();
  let dateDay = date.getDate();
  let dateMonth = date.getMonth() + 1;
  let dateYear = date.getFullYear();
  dateNow.innerHTML = `${dateDay}.${dateMonth}.${dateYear}`;
}

updateDate ()