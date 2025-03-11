document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.getElementById("form-container");

  // Function to validate date inputs
  function validateDateInput(dateInput, feedbackMsg) {
    const value = dateInput.value;
    const datePattern = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/; // YYYYMMDD format

    if (value.length === 8) {
      if (datePattern.test(value)) {
        feedbackMsg.textContent = "Date format is correct.";
        feedbackMsg.style.color = "green";
        dateInput.style.border = "2px solid green";
      } else {
        feedbackMsg.textContent = "Invalid date format. Please use YYYYMMDD.";
        feedbackMsg.style.color = "red";
        dateInput.style.border = "2px solid red";
      }
    } else {
      feedbackMsg.textContent = "";
      dateInput.style.border = "1px solid #ccc";
    }
  }

  // Event listener for adding rows
  formContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-btn")) {
      const newSection = `
        <div class="section">
          <div class="row align-items-center mb-3 mt-3">
            <div class="col">
              <label class="form-label">WTax Type</label>
              <select class="form-select-sm form-control">
                <option value="12" selected="">Individual</option>
                <option value="13">Firm</option>
                <option value="14">Association of person</option>
                <option value="">SMC</option>
                <option value="">Private Limited</option>
                <option value="">Public Listed Company</option>
              </select>
            </div>
            <div class="col">
              <label class="form-label">WTax Code</label>
              <select class="form-select-sm form-control">
                <option value="12" selected="">Individual</option>
                <option value="13">Firm</option>
                <option value="14">Association of person</option>
                <option value="">SMC</option>
                <option value="">Private Limited</option>
                <option value="">Public Listed Company</option>
              </select>
            </div>
            <div class="col">
              <label class="form-label">W/tax ID</label>
              <input class="form-control-sm form-control" type="text" />
            </div>
            <div class="col-3">
              <label class="form-label">Exemption Applicable</label>
              <input class="form-control-sm form-control" type="text" />
            </div>
          </div>
          <div class="row align-items-center mb-3">
            <div class="col-3">
              <label class="form-label">Exemption Reference</label>
              <input class="form-control-sm form-control" type="text" />
            </div>
            <div class="col-3">
              <label class="form-label">Exemption From</label>
              <input
                class="form-control-sm form-control date-input"
                type="text"
                placeholder="YYYYMMDD"
                maxlength="8"
              />
              <span class="feedback-msg" style="color: red; font-size: 0.7em; margin-top: 5px"></span>
            </div>
            <div class="col-3">
              <label class="form-label">Exemption To</label>
              <input
                class="form-control-sm form-control date-input"
                type="text"
                placeholder="YYYYMMDD"
                maxlength="8"
              />
              <span class="feedback-msg" style="color: red; font-size: 0.7em; margin-top: 5px"></span>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="d-flex justify-content-start">
                <button class="btn btn-primary btn-sm me-2 add-btn" type="button">
                  Add
                </button>
                <button class="btn btn-danger btn-sm remove-btn" type="button">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
      formContainer.insertAdjacentHTML("beforeend", newSection);
    }

    if (e.target.classList.contains("remove-btn")) {
      const section = e.target.closest(".section");
      if (formContainer.children.length > 1) {
        section.remove();
      } else {
        alert("At least one section must remain.");
      }
    }
  });

  // Event listener for date validation
  formContainer.addEventListener("input", function (e) {
    if (e.target.classList.contains("date-input")) {
      const feedbackMsg = e.target.nextElementSibling; // Get corresponding feedback span
      validateDateInput(e.target, feedbackMsg);
    }
  });
});
