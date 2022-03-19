let weatherBody = document.getElementById('weather-body');

let form = document.getElementById('form');



//adding event listener to the submit button

form.addEventListener('submit', getWeather);



//adding classlist

let cityNameDisplay = document.createElement('p')

cityNameDisplay.classList.add('city')


let temperature = document.createElement('p')

temperature.classList.add('temperature')


let feelsLike = document.createElement('p')

feelsLike.classList.add('feelslike')


let windSpeed = document.createElement('p')

windSpeed.classList.add('wind')


let description = document.createElement('p')

description.classList.add('description')



//function the submit button is to perform


function getWeather(e){

     e.preventDefault();

         let location = document.getElementById('input').value;

        //connecting to open weather's api

           fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3b04aa32e54287d1e7043a69ae8a5310`)

            .then(response => response.json())

            .then(data => { 
                
   //          console.log(data)

            if(data.name){
              addCityName(data.name)
              addTemperature(data.main.temp)
              addFeelsLike(data.main.feels_like)
              addWindSpeed(data.wind.speed)
              addDescription(data.weather[0].main)
                }
            else{
                alert('Please enter city / ZIP code or something went wrong!')
            }

            
            })

   
}


function addCityName(cityName){

//    console.log(cityName)

    cityNameDisplay.textContent = cityName

    weatherBody.appendChild(cityNameDisplay)
}


function addTemperature(temp){

 //   console.log(temp)

    temperature.textContent = Math.trunc(temp-273.15) + '°c'

    weatherBody.appendChild(temperature)

}


function addFeelsLike(temp){

    feelsLike.textContent = 'feels like' + Math.trunc(temp-273.15) + '°c'
  
  //  console.log(temp)

    weatherBody.appendChild(feelsLike)
}


function addWindSpeed(wind){

    windSpeed.innerHTML = '<i class="fas fa-wind"></i>' + wind + 'm/s'

 //   console.log(wind)

    weatherBody.appendChild(windSpeed)
}


function addDescription(desc){

 //   console.log(desc)

    description.textContent = desc    

    weatherBody.appendChild(description)
}










