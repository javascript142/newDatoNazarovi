async function Submit() {
    let lon = document.getElementById("lon").value ;
    let lat = document.getElementById("lat").value;
    let result = document.getElementById("result");

    lon = parseFloat(lon);
    lat = parseFloat(lat);

    let date = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`, {
        method: 'GET',
    });


    let dataapi = await date.json();


    result.innerHTML =
     `<p>lot is ${lon} and lat is ${lat} and ${dataapi.current_weather.temperature} yep`;


    

}
async function tbilisiAPI(){
    let georgia = document.getElementById('georgia').value;
    let result = document.getElementById('result');


    georgia = parseFloat(georgia);
    let date = await fetch(`https://geocode.maps.co/search?q=${georgia}`,{
        method: 'GET',
    });
  
    let api = await date.json();
    console.log(api);
    result.innerHTML = `<h2> wacher in this country is  ${api.windspeed}</h2> `

    

    if (api.windspeed > 20) {
        `<h2> wind speed is ${api.windspeed}</h2> <img src="https://www.vhv.rs/file/max/21/219037_wind-png.png">`
    } 
}