const apiKey="3caf4de369f50e322a17a0f242656ebc";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchInp=document.querySelector('.search input');
const SearchBtn=document.querySelector('.search button');

async function weatherCheck(city)
{
    const res=await fetch(apiURL + city + `&appid=${apiKey}`);
    if(res.status===404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else
    {
    const data=await res.json();
    console.log(data)
const temp=document.querySelector(".temp");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const place=document.querySelector(".city");
const icon=document.querySelector(".weather-icon");
temp.innerHTML=Math.round(data.main.temp) + "°C";
place.innerHTML=data.name;
wind.innerHTML=data.wind.speed + ' km/hr';
humidity.innerHTML=data.main.humidity +"%"
if(data.weather[0].main==='Clouds')
{
icon.src="images/clouds.png"
}
else if(data.weather[0].main==='Clear')
{
    icon.src="images/clear.png"
}
else if(data.weather[0].main==='Drizzle')
{
    icon.src="images/drizzle.png"
}
else if(data.weather[0].main==='Mist')
{
    icon.src="images/mist.png"
}
else if(data.weather[0].main==='Rain')
{
    icon.src="images/rain.png"
}
else if(data.weather[0].main==='Snow')
{
    icon.src="images/snow.png"
}
document.querySelector(".error").style.display="none";
document.querySelector(".weather").style.display="block";

}
}
SearchBtn.addEventListener('click',()=>
{

    weatherCheck(SearchInp.value);
})
