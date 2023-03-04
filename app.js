let apiKey='0973081397681e711454ee6556c4672c';
let res;
const search=document.querySelector(".btn");
const input=document.querySelector("#search")



search.addEventListener('click', function(e){

    getWeather(input.value);
})

input.addEventListener('keyup', function(e){

    if(e.key==='Enter')
    getWeather(input.value);
})


getWeather= function(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(e=>console.log("Please give correct city name",e));
    
}


displayWeather= function(res){
    const {name}=res;
    const {icon, description}=res.weather[0];
    const {temp, humidity}=res.main;
    const wind=res.wind.speed;

    const city=document.querySelector(".city");
    const tem=document.querySelector(".temp");
    const icons=document.querySelector(".icon");
    const des=document.querySelector(".des");
    const humid=document.querySelector(".humidity");
    const winds=document.querySelector(".wind");
    console.log(description);

    city.innerText=`Weather in ${name}`;
    tem.innerText=`${temp} °C`;
    humid.innerText=`Humidity: ${humidity} %`;
    winds.innerText=`Wind: ${wind} kmph`;
    icons.src=`http://openweathermap.org/img/wn/${icon}.png`;
    des.innerText=description;

    document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" + name + "')";
}

getWeather('Denver');