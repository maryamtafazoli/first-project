
document.getElementById("checkoutForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    // Send formData to backend using AJAX or fetch API
    // Example:
    fetch("/checkout", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Handle response from backend
    })
    .catch(error => {
        console.error(error); // Handle error
    });
});

function showMessage() {
  var messageDiv = document.getElementById("messageDiv");
  messageDiv.style.display = "block";
  // messageDiv.innerHTML = "!Operation completed successfully";
  setTimeout(function() {
    messageDiv.style.display = "none";
  }, 3000);
}
