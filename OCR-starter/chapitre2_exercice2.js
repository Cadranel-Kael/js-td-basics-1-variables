// Celsius - Fahrenheit
// (cel * 1.8) + 32 = fer
// (fer - 32) x .5556 = cel

//CEL -> FER

// const cel = 40;
// const fer = (cel * 1.8) + 32;
//
// console.log(`${cel}°C est ${fer}°F`)

//FER -> CEL

const fer = 32;
const cel = (fer - 32) * 0.5556;

console.log(`${fer}°F est ${cel}°C`)