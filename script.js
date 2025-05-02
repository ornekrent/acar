document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");

  function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  form.addEventListener("submit", function (e) {
    const pickupDate = new Date(form.pickupDate.value);
    const returnDate = new Date(form.returnDate.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (pickupDate < today) {
      showToast("Pickup date cannot be in the past.");
      e.preventDefault();
      return;
    }

    if (returnDate <= pickupDate) {
      showToast("Return date must be after the pickup date.");
      e.preventDefault();
      return;
    }
  });
});

function formSubmitted() {
  const active = document.activeElement;
  if (active && active.tagName === "IFRAME") {
    window.location.href = "thankyou.html";
  }
}
