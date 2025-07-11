function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

while (true) {
  let choice = prompt("Temperature Conversion Menu:\n1. Fahrenheit to Celsius\n2. Celsius to Fahrenheit\n3. Exit");

  if (choice === "1") {
    let f = parseFloat(prompt("Enter temperature in Fahrenheit:"));
    let c = fahrenheitToCelsius(f);
    alert(`${f}°F is equal to ${c.toFixed(2)}°C`);
  } else if (choice === "2") {
    let c = parseFloat(prompt("Enter temperature in Celsius:"));
    let f = celsiusToFahrenheit(c);
    alert(`${c}°C is equal to ${f.toFixed(2)}°F`);
  } else if (choice === "3") {
    alert("Goodbye!");
    break;
  } else {
    alert("Invalid choice. Please try again.");
  }
}
