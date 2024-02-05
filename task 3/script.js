function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var inputUnit = document.getElementById('inputUnit').value;
    var outputUnit = document.getElementById('outputUnit').value;
    var resultElement = document.getElementById('result');
    var result;

    if (isNaN(temperature)) {
      result = "Please enter a valid number.";
    } else {
      switch (inputUnit) {
        case 'celsius':
          result = convertFromCelsius(temperature, outputUnit);
          break;
        case 'fahrenheit':
          result = convertFromFahrenheit(temperature, outputUnit);
          break;
        case 'kelvin':
          result = convertFromKelvin(temperature, outputUnit);
          break;
        default:
          result = "Please select a valid input unit.";
          break;
      }
    }
    
    resultElement.textContent = result;
  }

  function convertFromCelsius(temperature, outputUnit) {
    switch (outputUnit) {
      case 'celsius':
        return temperature + "°C";
      case 'fahrenheit':
        return (temperature * 9/5) + 32 + "°F";
      case 'kelvin':
        return temperature + 273.15 + " K";
      default:
        return "Please select a valid output unit.";
    }
  }

  function convertFromFahrenheit(temperature, outputUnit) {
    switch (outputUnit) {
      case 'celsius':
        return (temperature - 32) * 5/9 + "°C";
      case 'fahrenheit':
        return temperature + "°F";
      case 'kelvin':
        return (temperature - 32) * 5/9 + 273.15 + " K";
      default:
        return "Please select a valid output unit.";
    }
  }

  function convertFromKelvin(temperature, outputUnit) {
    switch (outputUnit) {
      case 'celsius':
        return temperature - 273.15 + "°C";
      case 'fahrenheit':
        return (temperature - 273.15) * 9/5 + 32 + "°F";
      case 'kelvin':
        return temperature + " K";
      default:
        return "Please select a valid output unit.";
    }
  }