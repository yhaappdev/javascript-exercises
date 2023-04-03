const convertToCelsius = function(temp) {
  const value = (temp - 273.15);
  return Math.round(value * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  const value = (temp + 273.15);
  return Math.round(value * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
