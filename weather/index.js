//get All Ui components related weather
const getAllUiComponents = ()=>{
    return {
        country: document.getElementById("country"),
        time : document.getElementById("time"),
        date : document.getElementById("date"),
        temprature : document.getElementById("temprature"),
        image : document.getElementById("image"),
        sunrise : document.getElementById("sunrise"),
        sunset : document.getElementById("sunset"),
        pressure : document.getElementById("pressure"),
        humidity : document.getElementById("humidity"),
        min_temp : document.getElementById("min-temp"),
        max_temp : document.getElementById("max-temp"),
        visibility : document.getElementById("visibility"),
        wind_speed : document.getElementById("windspeed"),
        description : document.getElementById("description"),
    }

}

//show alert for 3 second
const showAlert = () => {
    const alertEl = document.getElementById("alert")
    alertEl.classList.toggle("hide");
    setTimeout(()=>{alertEl.classList.toggle("hide")},3000)
}

//contains detail about API
const api = {
	key: "102a4bd1a33de608218d706c2910c5d1    ",
	url: "https://api.openweathermap.org/data/2.5/weather",
}

//method for getting data from city
const getDataFromCity = (city) =>{
    fetch(`${api.url}?q=${city}&units=metric&appid=${api.key}`)
	.then(weather => {
		if(weather.ok) {
            return weather.json();
		} else {
            showAlert()
            return false;
		}
	}).then(displayWeather)
}

//method for getting time as string from date
const getTimeFromDate = (val) =>{
    const date = new Date(val*1000);
    return `${date.getHours()}:${date.getMinutes()}`
}

//method for display weather
const displayWeather = (weather) => {
    if(weather){
        const uiComponents = getAllUiComponents();
        console.log(uiComponents);
        uiComponents.country.innerText = `${weather.name} ${weather.sys.country ? ', ' + weather.sys.country : ''}`;
        uiComponents.date.innerText = new Date().toDateString();
        uiComponents.temprature.innerText = weather.main.temp;
        uiComponents.image.innerHTML = `<img src="./images/${weather.weather[0].icon}.svg" height="70px" width="70px" />`;
        uiComponents.sunrise.innerText = getTimeFromDate(new Date(weather.sys.sunrise))+" AM";
        uiComponents.sunset.innerText = getTimeFromDate(new Date(weather.sys.sunset))+" PM";
        uiComponents.pressure.innerHTML = `${weather.main.pressure} mb`;
        uiComponents.humidity.innerText = weather.main.humidity+ " %";
        uiComponents.min_temp.innerHTML = `${weather.main.temp_min}<span class=""><sup>°</sup>C</span>`;
        uiComponents.max_temp.innerHTML = `${weather.main.temp_max}<span class=""><sup>°</sup>C</span>`;
        uiComponents.visibility.innerHTML = weather.visibility / 1000 + " miles";
        uiComponents.wind_speed.innerHTML = weather.wind.speed+" mph";
        uiComponents.description.innerText = weather.weather[0].description;
    }
}


//IIFE for setting data to first time
(function() {
    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputEl = document.getElementById("input");
        getDataFromCity(inputEl.value);
        inputEl.innerHTML = "";
    });
    getDataFromCity("london");
})()

