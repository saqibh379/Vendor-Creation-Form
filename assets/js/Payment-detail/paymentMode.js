// Get references to the mode of payment dropdown and the dependent fields
const paymentMode = document.getElementById("paymentMode");
const fieldsToDisable = [
    // document.getElementById("paymentTerm"),
    document.getElementById("bankName"),
    document.getElementById("branchAddress"),
    document.getElementById("bankIBAN"),
    document.getElementById("accountHolder"),
    document.getElementById("chequeTitle"),
     document.getElementById("bankKey")
];

// Function to enable or disable fields based on selected mode of payment
function toggleFields() {
    if(paymentMode.value === "cash") {
        // Disable all dependent fields when "Cash" is selected
        fieldsToDisable.forEach(field => {
            field.disabled = true;
            field.value = ""; // Clear the value of disabled fields
        });
    } else {
        // Enable all dependent fields for other payment modes
        fieldsToDisable.forEach(field => {
            field.disabled = false;
        });
    }
}

// Add event listener to the mode of payment dropdown
paymentMode.addEventListener("change", toggleFields);

// Initial call to set the correct state on page load
toggleFields();
