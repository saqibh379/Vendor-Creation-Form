let sectionCount = 1;

function initializePaymentSection(sectionId) {
    const paymentMode = document.getElementById(`paymentMode${sectionId}`);
    const fieldsToDisableOnCash = [
        document.getElementById(`bankKey${sectionId}`),
        document.getElementById(`bankName${sectionId}`),
        document.getElementById(`branchAddress${sectionId}`),
        document.getElementById(`bankIBAN${sectionId}`),
        document.getElementById(`accountHolder${sectionId}`),
        document.getElementById(`chequeTitle${sectionId}`),
        // document.getElementById(`paymentTermCreditMemo${sectionId}`),
        document.getElementById(`bankCountry${sectionId}`)
    ];
    const cnicField = document.getElementById(`cnic${sectionId}`);

    function toggleFields() {
        if (paymentMode.value === "cash") {
            fieldsToDisableOnCash.forEach(field => {
                field.disabled = true;
                field.value = ""; // Clear disabled fields
            });
            cnicField.disabled = false;
        } else {
            fieldsToDisableOnCash.forEach(field => {
                field.disabled = false;
            });
            cnicField.disabled = true;
            cnicField.value = ""; // Clear CNIC field for non-cash
        }
    }

    paymentMode.addEventListener("change", toggleFields);
    toggleFields(); // Set initial state
}

document.getElementById('addPaymentBtn').addEventListener('click', function () {
    sectionCount++;
    const paymentContainer = document.getElementById('paymentContainer');

    const newDiv = document.createElement('div');
    newDiv.classList.add('payment-div');
    newDiv.id = `paymentSection${sectionCount}`;
    newDiv.innerHTML = `
       <div class="row" style="margin-bottom: 24px;">
            <div class="col">
                <label class="form-label">Mode of Payment<span style="color: var(--bs-red)">*</span></label>
                <select class="form-select-sm form-control payment-mode" id="paymentMode${sectionCount}" style="border-radius: 2px;">
                    <option value="cash" selected>Cash</option>
                    <option value="cheque">Cheque</option>
                    <option value="bankTransfer">Online Transfer</option>
                </select>
            </div>
            <div class="col">
                <label class="form-label">Bank Key<span style="color: var(--bs-red)">*</span></label>
                <select class="form-select-sm form-control" id="bankKey${sectionCount}" style="border-radius: 2px;">
                    <option value="AB00" selected>AB00 - ALLIED BANK LTD (IBFT)

                    </option>
                    <option value="AB01">AB01 - ALLIED BANK

                    </option>
                    <option value="AB28">AB28 - Allied Bank Limited
                    </option>
                </select>
            </div>
            <div class="col">
                <label class="form-label">Bank Name</label>
                <input id="bankName${sectionCount}" class="form-control-sm form-control" type="text" style="border-radius: 3px;">
            </div>
            <div class="col">
                <label class="form-label">Branch Address<span style="color: var(--bs-red)">*</span></label>
                <input id="branchAddress${sectionCount}" class="form-control-sm form-control" type="text" style="border-radius: 3px;">
            </div>
        </div>
        <div class="row" style="margin-bottom: 24px;">
            <div class="col">
                <label class="form-label">A/c Holder Name<span style="color: var(--bs-red)">*</span></label>
                <input id="accountHolder${sectionCount}" class="form-control-sm form-control" type="text" style="border-radius: 3px;">
            </div>
            <div class="col">
                <label class="form-label">Bank IBAN Reference<span style="color: var(--bs-red)">*</span></label>
                <input id="bankIBAN${sectionCount}" class="form-control-sm form-control" type="text" style="border-radius: 3px;">
            </div>
            <div class="col">
                <label class="form-label">Bank Country<span style="color: var(--bs-red)">*</span></label>
                    <select class="form-select-sm form-control" id="bankCountry${sectionCount}" style="border-radius: 2px;">
                        <option value="AD" selected>AD - Andorra
    
                        </option>
                        <option value="AE">AE - Utd.Arab Emir.

                        </option>
                        <option value="CN">CN - China

    
                        </option>
                    </select>
            </div>
            <div class="col">
                <label class="form-label">Title On Cheque<span style="color: var(--bs-red)">*</span></label>
                <input id="chequeTitle${sectionCount}" class="form-control-sm form-control" type="text" style="border-radius: 3px;">
            </div>
        </div>
        <div class="row" style="margin-bottom: 24px;">
            
            <div class="col-3">
                <label class="form-label">CNIC<span style="color: var(--bs-red)">*</span></label>
                <input id="cnic${sectionCount}" class="form-control-sm form-control" type="text" style="border-radius: 3px;">
            </div>
           



            
            <!-- Commenting payment term and credit memo code 
            
            <div class="col-3">
                <label class="form-label">Payment Term</label>
                <select class="form-select-sm form-control" id="paymentTerms${sectionCount}" style="border-radius: 2px;">
                    <option value="NT00" selected>NT00 - Payable immediately Due net

                    </option>
                    <option value="NT08">NT08 - within 8 days Due net
                    </option>
                    <option value="NT15">NT15 - within 15 days Due net

                    </option>
                </select>
            </div>
            <div class="col-3">
                <label class="form-label">Payment Terms (Credit Memo)</label>
                <select class="form-select-sm form-control" id="paymentTermCreditMemo${sectionCount}" style="border-radius: 2px;">
                    <option value="NT00" selected>NT00 - Payable immediately Due net

                    </option>
                    <option value="NT08">NT08 - within 8 days Due net
                    </option>
                    <option value="NT15">NT15 - within 15 days Due net

                    </option>
                </select>
            </div>

-->



        </div>
        <div class="d-flex justify-content-end">
            <button class="btn btn-danger remove-payment" type="button" style="margin-left: 10px;">Remove</button>
        </div>
    `;

    paymentContainer.appendChild(newDiv);
    initializePaymentSection(sectionCount);

    const removeBtn = newDiv.querySelector('.remove-payment');
    removeBtn.addEventListener('click', function () {
        newDiv.remove();
    });
});

initializePaymentSection(sectionCount);
