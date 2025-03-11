// JavaScript to handle country and region selection dynamically

// Get references to the dropdown elements
const countrySelect = document.getElementById("country");
const regionSelect = document.getElementById("region");

// Predefined data for regions based on countries
const regionsByCountry = {
    usa: ["California", "New York", "Texas", "Florida"],
    pakistan: ["Punjab", "Sindh", "KPK", "Balochistan"],
    india: ["Delhi", "Mumbai", "Bangalore", "Kolkata"]
};

// Event listener to update the regions when a country is selected
countrySelect.addEventListener("change", function () {
    // Clear previous region options
    regionSelect.innerHTML = '<option value="" disabled selected>Select a region</option>';

    // Get selected country's regions
    const selectedCountry = countrySelect.value;
    const regions = regionsByCountry[selectedCountry] || [];

    // Populate the region dropdown
    regions.forEach(region => {
        const option = document.createElement("option");
        option.value = region.toLowerCase(); // Use lowercase for value
        option.textContent = region; // Display the region name
        regionSelect.appendChild(option);
    });
});
