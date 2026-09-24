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

// Convert to Fahrenheit
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

// Calculate the total of all temperature values in Fahrenheit
function calculateTotalInFahrenheit(data) {
  const total = data.reduce((sum, item) => {
    
    const fahrenheitValue = item.unit === 'C' 
      ? (item.value * 9 / 5) + 32 
      : item.value;
      
    return sum + fahrenheitValue;
  }, 0);

  return Math.round(total * 100) / 100;
}

const totalFahrenheit = calculateTotalInFahrenheit(temperatureData);
console.log(`Total Fahrenheit: ${totalFahrenheit}°F`);

 // Calculate the total of all temperature values in Celsius
function calculateTotalInCelsius(data) {
  const total = data.reduce((sum, item) => {
    
    const celsiusValue = item.unit === 'F' 
      ? (item.value - 32) * 5 / 9 
      : item.value;
      
    return sum + celsiusValue;
  }, 0);

  return Math.round(total * 100) / 100;
}

const totalCelsius = calculateTotalInCelsius(temperatureData);
console.log(`Total Celsius: ${totalCelsius}°C`);


 // Average Temperatures
const averageFahrenheit = totalFahrenheit/30;
console.log(`Average Fahrenheit: ${averageFahrenheit}°F`);

const averageCelsius =  totalCelsius/30
console.log(`Average Celsius: ${averageCelsius}°C`);
