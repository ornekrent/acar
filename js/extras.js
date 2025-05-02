document.addEventListener('DOMContentLoaded', () => {
  const currentBookingData = JSON.parse(localStorage.getItem('currentBooking'));

  if (!currentBookingData || !currentBookingData.selectedVehicleId) {
    alert('No vehicle selected. Please go back and select a vehicle.');
    window.location.href = 'vehicle-selection.html';
  }
});
