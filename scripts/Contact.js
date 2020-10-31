// form validation
// checks if input fields are empty
// if empty gives an alert else it directs to another page
function validateForm() {
  var Name = document.getElementById("name");
  var Email = document.getElementById("email");
  var Subject = document.getElementById("subject");
  var Message = document.getElementById("message");

  if (
    Email.value   == "" ||
    Name.value    == "" ||
    Subject.value == "" ||
    Message.value == ""
  ) {
    alert("Please fill all fields");
    return false;
  } else {
    return true;
  }
}
