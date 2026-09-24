const temperatureData = [
  { value: 32, unit: 'F' }, { value: 25, unit: 'C' }, 
  { value: 70, unit: 'F' }, { value: 18, unit: 'C' }, 
  { value: 80, unit: 'F' }, { value: 15, unit: 'C' },
  { value: 72, unit: 'F' }, { value: 28, unit: 'C' }, 
  { value: 68, unit: 'F' }, { value: 20, unit: 'C' }, 
  { value: 75, unit: 'F' }, { value: 23, unit: 'C' },
  { value: 82, unit: 'F' }, { value: 30, unit: 'C' }, 
  { value: 65, unit: 'F' }, { value: 22, unit: 'C' }, 
  { value: 77, unit: 'F' }, { value: 26, unit: 'C' },
  { value: 78, unit: 'F' }, { value: 24, unit: 'C' }, 
  { value: 73, unit: 'F' }, { value: 21, unit: 'C' }, 
  { value: 79, unit: 'F' }, { value: 27, unit: 'C' },
  { value: 71, unit: 'F' }, { value: 19, unit: 'C' }, 
  { value: 74, unit: 'F' }, { value: 17, unit: 'C' }, 
  { value: 76, unit: 'F' }, { value: 29, unit: 'C' },
];

 // Convert to Celcius
function convertToCelsiusStrings(data) {
  return data.map(item => {
    const celsiusValue = item.unit === 'F' 
      ? (item.value - 32) * 5 / 9 
      : item.value;
    
    const roundedValue = Math.round(celsiusValue * 100) / 100;
    return `${roundedValue}°C`;
  });
}

console.log(convertToCelsiusStrings(temperatureData));

// Convert to Fahreheit
function convertToFahrenheitStrings(data) {
  return data.map(item => {
    const fahrenheitValue = item.unit === 'C' 
      ? (item.value * 9 / 5) + 32 
      : item.value;
    
    const roundedValue = Math.round(fahrenheitValue * 100) / 100;
    return `${roundedValue}°F`;
  });
}

console.log(convertToFahrenheitStrings(temperatureData));
