const form = document.querySelector("#booking-form");
const arrival = document.querySelector("#arrival-date");
const departure = document.querySelector("#departure-date");
const feedback = document.querySelector("#booking-feedback");

// Require the departure date to be after the arrival date.
function validateDates() {
  const invalid = arrival.value && departure.value && departure.value <= arrival.value;
  departure.setCustomValidity(invalid ? "Departure date must be after arrival date." : "");
}

arrival.addEventListener("input", validateDates);
departure.addEventListener("input", validateDates);

// Show a demo notice instead of sending form data.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateDates();
  if (!form.reportValidity()) return;

  feedback.textContent =
    "This demo does not send an inquiry or confirm a booking. Please contact the hostel directly to make arrangements.";
});
