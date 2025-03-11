function addContactField(event) {
  event.preventDefault();

  const container = document.getElementById("contact-container");

  // Create a new div for the contact field
  const newField = document.createElement("div");
  newField.className = "d-flex flex-row align-items-xl-center mt-2";
  newField.style.width = "100%";

  // Create the input field
  const inputField = document.createElement("input");
  inputField.className = "form-control-sm form-control";
  inputField.type = "number";
  inputField.placeholder = "Enter phone number";

  // Create the remove button
  const removeButton = document.createElement("a");
  removeButton.href = "#";
  removeButton.style.marginLeft = "10px";
  removeButton.style.fontSize = "24px";
  removeButton.style.color = "red";
  removeButton.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
        fill="currentColor"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z"
        fill="red"
      ></path>
    </svg>
  `;
  removeButton.onclick = function (e) {
    e.preventDefault();
    container.removeChild(newField);
  };

  // Append the input field and remove button to the new div
  newField.appendChild(inputField);
  newField.appendChild(removeButton);

  // Append the new div to the container
  container.appendChild(newField);
}
