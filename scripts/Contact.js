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

  /* checking if each field is empty
  empty fields will have red border
  and green for filled ones,
  function excutes when returns true 
*/

  if (
    Email.value == "" ||
    Name.value == "" ||
    Subject.value == "" ||
    Message.value == ""
  ) {
    fields.forEach((element) => {
      if (element.value == "") {
        element.style.border = "1px solid red";
      } else {
        element.style.border = "1px solid green";
      }
    });

    return false;
  } else {
    return true;
  }
}
