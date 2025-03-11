// Get references to the mode of payment dropdown and the dependent fields
const garmentMode = document.getElementById("Garment-Mode");
const fieldsToDisable = [
   
    document.getElementById("gender"),
    document.getElementById("fabric"),
    document.getElementById("cmt")
 
];

// Function to enable or disable fields based on selected mode of payment
function toggleFields() {
    if (garmentMode.value === "no-garment") {
        // Disable all dependent fields when "no-garment" is selected
        fieldsToDisable.forEach(field => {
            field.disabled = true;
            field.value = " "; // Clear the value of disabled fields
        });
    } else {
        // Enable all dependent fields for other payment modes
        fieldsToDisable.forEach(field => {
            field.disabled = false;
        });
    }
}

// Add event listener to the mode of payment dropdown
garmentMode.addEventListener("change", toggleFields);

// Initial call to set the correct state on page load
toggleFields();
