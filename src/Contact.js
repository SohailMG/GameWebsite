/* website window resolution is 1422.22 x 520 */
/*  
form validation
checks if input fields are empty
if empty, gives an alert else it directs to confirmation page 
*/

// declaring consts for form input fields
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Subject = document.getElementById("subject");
const Message = document.getElementById("message");

const arrFields = [Name, Email, Subject, Message];

/** 
  checking if each field is empty.
  empty fields will have red border
  and green for filled ones.
  function excutes when returns true 
*/
function validateForm() {
     // an array of all fields
     var fields = arrFields;

     if (
          Email.value == "" ||
          Name.value == "" ||
          Subject.value == "" ||
          Message.value == ""
     ) {
          fields.forEach((element) => {
               if (element.value == "") {
                    element.style.border = "1px solid red";
                    console.log("yesssss");
               } else {
                    element.style.border = "1px solid green";
               }
          });

          return false;
     } else {
          return true;
     }
}
