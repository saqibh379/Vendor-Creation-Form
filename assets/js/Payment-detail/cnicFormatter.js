// Get the CNIC input field
const cnicInput = document.getElementById("cnicInput");

// Event listener to handle user input
cnicInput.addEventListener("input", function () {
    // Allow only numbers (digits) and remove any non-numeric characters
    let value = cnicInput.value.replace(/[^0-9]/g, "");

    // Format the input as XXXXX-XXXXXXX-X
    if (value.length > 5) {
        value = value.slice(0, 5) + "-" + value.slice(5);
    }
    if (value.length > 12) {
        value = value.slice(0, 13) + "-" + value.slice(12);
    }

    // Limit input to CNIC format length
    cnicInput.value = value.slice(0, 15);
});

// Event listener to handle backspace behavior properly
cnicInput.addEventListener("keydown", function (e) {
    if (e.key === "Backspace") {
        // Prevent deletion of hyphens and remove the character before them
        const value = cnicInput.value;
        if (value.endsWith("-")) {
            cnicInput.value = value.slice(0, -1); // Remove trailing hyphen
        }
    }
});

// Prevent non-numeric key presses
cnicInput.addEventListener("keypress", function (e) {
    // Allow only numeric keys
    if (e.key < "0" || e.key > "9") {
        e.preventDefault();
    }
});
