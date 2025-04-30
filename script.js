document.getElementById("rentalForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const jsonData = Object.fromEntries(data.entries());

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbxl3gll-inuSdMsC-BFWwEs3-9AgHU2rwO50L5m4wMzVWw-CyNVQVd7gyRc6ALfAuLP/exec", {
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
