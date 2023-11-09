// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const h2Header = document.getElementById("weather-head");
h2Header.innerHTML = "February 10 Weather Forecast, Seattle";
// Change the styling of every element with class "sun" to set the color to "orange"
const everyClassSun = document.getElementsByClassName("sun");
everyClassSun[0].style.color = "orange";
everyClassSun[1].style.color = "orange";
// Change the class of the second <li> from to "sun" to "cloudy"
const liList = document.getElementsByTagName("li");
liList[1].classList.toggle('cloudy');
// OR
// liList[1].classList.replace('sun', 'cloudy');