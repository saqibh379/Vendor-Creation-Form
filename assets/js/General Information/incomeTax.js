// JavaScript to enable or disable the Income Tax input field

// Get references to the dropdown and input field
const incomeTaxSelect = document.getElementById("incomeTaxSelect");
const incomeTaxField = document.getElementById("incomeTaxField");

// Event listener for the dropdown selection change
incomeTaxSelect.addEventListener("change", function () {
    if (incomeTaxSelect.value === "yes") {
        incomeTaxField.disabled = false; // Enable the input field
    } else {
        incomeTaxField.disabled = true;  // Disable the input field
        incomeTaxField.value = "";      // Clear the input value
    }
});
