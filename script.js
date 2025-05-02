document.getElementById("rentalForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  fetch(CONFIG.GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: data
  })
  .then(response => {
    if (response.ok) {
      window.location.href = CONFIG.REDIRECT_AFTER_SUBMIT;
    } else {
      alert("Something went wrong. Please try again.");
    }
  })
  .catch(error => {
    console.error("Error!", error.message);
    alert("Error submitting form.");
  });
});
