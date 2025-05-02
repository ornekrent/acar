function handleSubmissionResponse() {
  // This function will be called when the iframe loads after form submission.
  // In this initial step, we are just navigating to the next page.
  // The Google Apps Script backend handles the redirect.
}

document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('bookingForm');

  bookingForm.addEventListener('submit', function(event) {
    // Basic frontend validation
    const pickupLocation = document.getElementById('pickupLocation').value.trim();
    const pickupDateTime = document.getElementById('pickupDateTime').value;
    const returnDateTime = document.getElementById('returnDateTime').value;

    if (!pickupLocation || !pickupDateTime || !returnDateTime) {
      alert('Please fill in all required fields.');
      event.preventDefault(); // Prevent the form from submitting
      return;
    }

    // You might want to store the initial booking data in local storage
    const bookingData = {
      pickupLocation: pickupLocation,
      pickupDateTime: pickupDateTime,
      returnDateTime: returnDateTime,
      driverUnder25: document.getElementById('driverUnder25').checked
    };
    localStorage.setItem('initialBooking', JSON.stringify(bookingData));

    // Set the form's action URL dynamically (though we are using a hidden iframe redirect)
    this.action = config.backendUrl;
  });
});
