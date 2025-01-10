document.getElementById('flight-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form data
    const flightNumber = document.getElementById('flight-number').value;
    const departureAirport = document.getElementById('departure-airport').value;
    const arrivalAirport = document.getElementById('arrival-airport').value;
    const flightDate = document.getElementById('flight-date').value;
  
    // Display output
    const output = `
      Flight Number: ${flightNumber} <br>
      Departure Airport: ${departureAirport} <br>
      Arrival Airport: ${arrivalAirport} <br>
      Flight Date: ${flightDate}
    `;
  
    document.getElementById('output').innerHTML = output;
  });
  