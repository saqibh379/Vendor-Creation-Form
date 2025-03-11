 document.addEventListener("DOMContentLoaded", () => {
      const dateInput = document.getElementById("dateInput-1");
      const feedbackMsg = document.getElementById("feedbackMsg-1");

      dateInput.addEventListener("input", () => {
        const value = dateInput.value;
        const datePattern = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/; // YYYYMMDD format

        if (value.length === 8) {
          if (datePattern.test(value)) {
            feedbackMsg.textContent = "Date format is correct.";
            feedbackMsg.style.color = "green";
            dateInput.style.border = "2px solid green";
          } else {
            feedbackMsg.textContent =
              "Invalid date format. Please use YYYYMMDD.";
            feedbackMsg.style.color = "red";
            dateInput.style.border = "2px solid red";
          }
        } else {
          feedbackMsg.textContent = "";
          dateInput.style.border = "1px solid #ccc";
        }
      });
    });