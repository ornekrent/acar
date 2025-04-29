document.getElementById("rentalForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const jsonData = Object.fromEntries(data.entries());

  try {
    const res = await fetch("YOUR_WEB_APP_URL_HERE", {
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.text();
    document.getElementById("responseMsg").textContent = result;
    form.reset();
  } catch (err) {
    document.getElementById("responseMsg").textContent = "Error submitting form.";
    console.error(err);
  }
});
