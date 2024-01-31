function addweather(){
  const city = document.getElementById('searchbox').value;
  const imageId = document.getElementById('image');


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ea49855041073db8b7fb4f74c03260a&units=imperial`,{
    method:'GET'
  })
  .then(response => {
    if (response.status === 404) {
        alert('City not found');
      }
    if (!response.ok){
        throw new Error(`HTTP error! status ${response.status}`);
    }
    return response.json();
    })
    .then(result => {
        console.log(result)
        //Log the result to the console 
        console.log(result);
        document.getElementById('temp').innerHTML =result.main.temp + "°F";
        document.getElementById('city').innerHTML = result.name;
        document.getElementById('humidity').innerHTML = result.main.humidity + "%";
        document.getElementById('wind').innerHTML = result.wind.speed + " km/h ";
    
    const weatherconditions = result.weather[0].main;
       switch(weatherconditions){
        case 'Clear':
            imageId.src = "images/sun.png";
            break;
          default:
        case 'Clouds':
            imageId.src = "images/clouds.png";
            break;
        case 'Rain':
            imageId.src = "images/drizzle.png";
            break;
        case 'Snow':
            imageId.src = "images/snow.png";
            break;
        case 'Storm':
            imageId.src = "images/storm.png";
            break;
        case 'Mist':
                imageId.src = "images/mist.png";
                break;
        
       }
      function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    } 
    
    
       
    })

       .catch(error => console.error('Error: ', error));
    }

           
    
        


