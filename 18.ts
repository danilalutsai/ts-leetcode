// https://leetcode.com/problems/convert-the-temperature/

function convertTemperature(celsius: number): number[] {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.8 + 32;
  return [kelvin, fahrenheit];
};

console.log(convertTemperature(36.50));
