// JavaScript to enable or disable the tax reference input field based on selection

// Get references to the dropdown and input field
const taxableSelect = document.getElementById("taxable");
const taxReferenceInput = document.getElementById("taxReference");

// Event listener for the dropdown selection change
taxableSelect.addEventListener("change", function () {
    // Check the selected value
    if (taxableSelect.value === "yes") {
        taxReferenceInput.disabled = false; // Enable the input field
    } else {
        taxReferenceInput.disabled = true;  // Disable the input field
        taxReferenceInput.value = "";      // Clear the input value
    }
});
