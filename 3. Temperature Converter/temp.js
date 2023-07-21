window.addEventListener("load", function() {
    var convertBtn = document.getElementById("convertBtn");
    convertBtn.addEventListener("click", convertTemperature);

    displayCurrentDateTime();

    setInterval(displayCurrentDateTime, 1000);
});

function convertTemperature() {
    var temperatureInput = document.getElementById("temperature");
    var unit1Input = document.getElementById("unit1");
    var unit2Input = document.getElementById("unit2");
    var resultSpan = document.getElementById("result");

    var temperature = parseFloat(temperatureInput.value);
    var unit1 = unit1Input.value;
    var unit2 = unit2Input.value;
    
    var convertedTemperature = "";

    if (isNaN(temperature)) {
        resultSpan.innerText = "Invalid input. Please enter a number.";
        return;
    }

    if (unit1 === "celsius" && unit2 === "kelvin" )
    {
        convertedTemperature = temperature + 273.15;
        resultSpan.innerText = "Converted temperature: " + convertedTemperature.toFixed(2) + " K (Kelvin)";
    }
    else if(unit1 === "celsius" && unit2 === "celsius" )
    {
        convertedTemperature = temperature ;
        resultSpan.innerText = "Converted temperature: " + convertedTemperature.toFixed(2) + " °C (Celsius)";
    }
    else if(unit1 === "celsius" && unit2 === "fahrenheit" )
    {
        convertedTemperature = ((temperature * 9) / 5) + 32;
        resultSpan.innerText = "Converted temperature: " + convertedTemperature.toFixed(2) + " °F (Fahrenheit)";
    }
    else if(unit1 === "kelvin" && unit2 === "celsius" )
    {
        convertedTemperature = temperature - 273.15;
        resultSpan.innerText = "Converted temperature: " + convertedTemperature.toFixed(2) + " °C (Celsius)";
    }
    else if(unit1 === "kelvin" && unit2 === "kelvin" )
    {
        convertedTemperature = temperature ;
        resultSpan.innerText = "Converted temperature: " + convertedTemperature.toFixed(2) + " K (Kelvin)";
    }
    else if(unit1 === "kelvin" && unit2 === "fahrenheit" )
    {
        convertedTemperature = (temperature - 273.15) * 9/5 + 32 ;
        resultSpan.innerText = "Converted temperature: " + convertedTemperature.toFixed(2) + " °F (Fahrenheit)";
    }
    else if(unit1 === "fahrenheit" && unit2 === "fahrenheit" )
    {
        convertedTemperature = temperature
        resultSpan.innerText = "Converted temperature: " + convertedTemperature.toFixed(2) + " °F (Fahrenheit)";
    }
    else if(unit1 === "fahrenheit" && unit2 === "celsius" )
    {
        convertedTemperature = 5/9 * (temperature-32);
        resultSpan.innerText = "Converted temperature: " + convertedTemperature.toFixed(2) + " °C (Celsius)";
    }
    else if(unit1 === "fahrenheit" && unit2 === "kelvin" )
    {
        convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        resultSpan.innerText = "Converted temperature: " + convertedTemperature.toFixed(2) + " K (Kelvin)";
    }
    
    
}

function displayCurrentDateTime() {
    var dateTimeBtn = document.getElementById("dateTimeBtn");
    var currentDate = new Date().toLocaleDateString();
    var currentTime = new Date().toLocaleTimeString();

    dateTimeBtn.innerText = "Date: " + currentDate + " | Time: " + currentTime;
}
