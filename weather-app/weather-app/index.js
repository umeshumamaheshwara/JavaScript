async function weather(location="Bengaluru"){
    try {
       let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1f124096ad1f24ead2a042f52edd856e&units=metric`)
       let data=await res.json();

       if(res.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none"
       }
        let temp=document.querySelector(".temperature");
        let city=document.querySelector(".city");
        let humidity=document.querySelector(".humidity");
        let wind=document.querySelector(".wind")

        let img=document.querySelector(".weather img")

        if(data.weather[0].main=="Clouds"){
            img.src="./images/cloud.svg"
        }
        else if(data.weather[0].main=="Clear"){
            img.src="./images/sun.svg"
        }
        else if(data.weather[0].main=="Rain"){
            img.src="./images/rain.svg"
        }
        else if(data.weather[0].main=="Drizzle"){
            img.src="./images/snow.svg"
        }
        else if(data.weather[0].main=="Mist"){
            img.src="./images/snow.svg"
        }
        else if(data.weather[0].main=="Snow"){
            img.src="./images/snow.svg"
        }
       
        temp.innerText=`${Math.round(data.main.temp)}C`
        city.innerText=data.name;
        humidity.innerText=`${data.main.humidity}%`
        wind.innerText=`${Math.round(data.wind.speed)}km/hr`

        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
    } catch (error) {
        console.log(error);
    }
}
let btn=document.querySelector(".card header button");
btn.addEventListener("click",()=>{
    let search=document.querySelector(".card header input");
    weather(search.value)
    search.value=""
})