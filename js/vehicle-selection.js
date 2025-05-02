document.addEventListener('DOMContentLoaded', () => {
  const vehicleListElement = document.getElementById('vehicleList');
  const initialBookingData = JSON.parse(localStorage.getItem('initialBooking'));

  if (!initialBookingData) {
    alert('No booking details found. Please start over.');
    window.location.href = 'index.html';
    return;
  }

  // Simulate fetching available vehicles (replace with your actual data source or logic)
  const availableVehicles = [
    { id: 'economy', name: 'Economy Car', description: 'Great for city trips', price: '$30/day' },
    { id: 'compact', name: 'Compact Car', description: 'Fuel efficient and comfortable', price: '$40/day' },
    { id: 'suv', name: 'SUV', description: 'Spacious and powerful', price: '$60/day' },
    { id: 'luxury', name: 'Luxury Sedan', description: 'Premium comfort and style', price: '$100/day' }
  ];

  availableVehicles.forEach(vehicle => {
    const listItem = document.createElement('li');
    listItem.classList.add('vehicle-item');
    listItem.innerHTML = `
      <h3>${vehicle.name}</h3>
      <p>${vehicle.description}</p>
      <p>Price: ${vehicle.price}</p>
      <button onclick="selectVehicle('${vehicle.id}', '${vehicle.name}')">Select</button>
    `;
    vehicleListElement.appendChild(listItem);
  });
});

function selectVehicle(vehicleId, vehicleName) {
  const bookingData = JSON.parse(localStorage.getItem('initialBooking')) || {};
  bookingData.selectedVehicleId = vehicleId;
  bookingData.selectedVehicleName = vehicleName;
  localStorage.setItem('currentBooking', JSON.stringify(bookingData));
  window.location.href = 'extras.html';
}
