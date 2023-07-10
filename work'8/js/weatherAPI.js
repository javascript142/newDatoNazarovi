async function weatherForecast() {
    let longitute = document.getElementById("longitute").value;
    let latitute = document.getElementById("latitute").value;
    let result = document.getElementById("result");

    longitute = parseFloat(longitute);
    latitute = parseFloat(latitute);

    let apiData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitute}&longitude=${longitute}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`, {
        method: "GET",
    })

    let apiDataInJson = await apiData.json();

    result.innerHTML = `
    <p id="weatherInfo"> Temperature at the longitute ${longitute} and at latitute of ${latitute} is ${apiDataInJson.current_weather.temperature} Celcius.</p>
    `

}