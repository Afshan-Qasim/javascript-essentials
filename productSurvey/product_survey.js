// --- Function Definition ---

/**
 * Reads user input from form fields, displays it in a designated area,
 * and shows a thank-you alert.
 */
function submitFeedback() {
  // 1. Get current values from the input fields *inside* the function
  const username = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const job = document.getElementById("job").value;
  const designation = document.getElementById("designation").value;
  const productType = document.getElementById("productType").value;
  const feedback = document.getElementById("feedbackText").value;

  // 2. Display the retrieved values in the corresponding HTML elements
  document.getElementById("userName").innerHTML = username;
  document.getElementById("userAge").innerHTML = age;
  document.getElementById("userEmail").innerHTML = email;
  document.getElementById("userJob").innerHTML = job;
  document.getElementById("userDesignation").innerHTML = designation;
  document.getElementById("userProductChoice").innerHTML = productType;
  document.getElementById("userFeedback").innerHTML = feedback;

  // 3. Make the user info display section visible
  document.getElementById("userInfo").style.display = "block";

  // 4. Show the confirmation alert *after* processing
  alert("Thank you for your valuable feedback");
}

// --- Event Listener Setup ---

// Get the submit button element
const submitButton = document.getElementById("submitBtn");

// Check if the button exists before assigning the event handler
if (submitButton) {
  // Assign the submitFeedback function to the button's click event
  submitButton.onclick = submitFeedback;
} else {
  console.error("Error: Submit button with ID 'submitBtn' not found.");
}

// Add an event listener to the whole document to listen for key presses
document.addEventListener("keydown", function (event) {
  // Check if the key pressed was 'Enter'
  if (event.key === "Enter") {
    // Optional: You might want to prevent default form submission
    // if your elements are inside a <form> tag.
    // event.preventDefault();

    // Call the submitFeedback function
    submitFeedback();
  }
});
