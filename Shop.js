document.getElementById("buynow").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var contact = document.getElementById("contact").value;
  var product = document.getElementById("product").value;
  
  // You can implement sending data to WhatsApp and email here
  // For demonstration purposes, we'll just log the data to the console
  console.log("Name: " + name);
  console.log("Contact: " + contact);
  console.log("Product: " + product);
  
  // You can redirect the user to the contact page after submitting the form
  // window.location.href = "contact.html";
});