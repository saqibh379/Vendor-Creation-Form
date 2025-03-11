    $(document).ready(function () {
        const relatedData = {
            "Item 1": ["Related 1.1", "Related 1.2", "Related 1.3"],
            "Item 2": ["Related 2.1", "Related 2.2"],
            "Item 3": ["Related 3.1", "Related 3.2"],
            "Item 4": ["Related 4.1", "Related 4.2"],
            "Item 5": ["Related 5.1", "Related 5.2"]
        };

        // Initialize Bootstrap Select
        $('.selectpicker').selectpicker();

        // Function to update related items dropdown
        function updateRelatedDropdown(selectedItems) {
            const relatedDropdown = $('#related-dropdown');
            relatedDropdown.empty(); // Clear previous options
            const uniqueRelatedItems = new Set(); // Set to keep track of unique related items

            // Loop through selected items and add unique related items
            selectedItems.forEach(item => {
                if (relatedData[item]) {
                    relatedData[item].forEach(related => {
                        uniqueRelatedItems.add(related); // Add unique related items to Set
                    });
                }
            });

            // Add unique related items to dropdown
            Array.from(uniqueRelatedItems).forEach(option => {
                relatedDropdown.append(new Option(option, option));
            });

            // Refresh the dropdown to reflect the changes
            relatedDropdown.selectpicker('refresh');
        }

        // Update first column selection and text area
        $('#item-list').on('changed.bs.select', function () {
            const selectedItems = $(this).val();
            $('#selected-items').val(selectedItems ? selectedItems.join(', ') : '');
            
            // Update related dropdown based on selected items
            updateRelatedDropdown(selectedItems);
        });

        // Update second column selection and text area
        $('#related-dropdown').on('changed.bs.select', function () {
            const selectedRelatedItems = $(this).val();
            $('#related-items').val(selectedRelatedItems ? selectedRelatedItems.join(', ') : '');
        });
    });