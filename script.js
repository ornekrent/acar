document.getElementById("rentalForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbxl3gll-inuSdMsC-BFWwEs3-9AgHU2rwO50L5m4wMzVWw-CyNVQVd7gyRc6ALfAuLP/exec", {
    method: "POST",
    body: data
  })
  .then(response => {
    if (response.ok) {
      window.location.href = "thankyou.html";
    } else {
      alert("Something went wrong. Please try again.");
    }
  })
  .catch(error => {
    console.error("Error!", error.message);
    alert("Error submitting form.");
  });
});
