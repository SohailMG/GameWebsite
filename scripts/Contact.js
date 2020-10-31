// form validation
// checks if input fields are empty
// if empty gives an alert else it directs to another page
function validateForm() {
  var Name = document.getElementById("name");
  var Email = document.getElementById("email");
  var Subject = document.getElementById("subject");
  var Message = document.getElementById("message");
  // an array of all fields
  var fields = [Name, Email, Subject, Message];

  if (
    Email.value == "" ||
    Name.value == "" ||
    Subject.value == "" ||
    Message.value == ""
  ) {
    alert("Please fill all fields");
    fields.forEach((element) => {
      element.style.border = "1px solid red";
    });

    return false;
  } else {
    return true;
  }
}
