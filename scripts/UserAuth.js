/* 
this script contains sign in and sign up functions 
used to store user data and authenticate user input
*/

// asigning variables to input fields
const firstName = document.getElementById("firstname");
const userName = document.getElementById("uName");
const passWord = document.getElementById("Psswd");
const Confirm_pw = document.getElementById("ConfPass");

/* user registration function used to store user data in array of objects */
function SignUp() {
  // first statement to check all fields are not empty
  if (
    firstName.value == "" ||
    userName.value == "" ||
    passWord.value == "" ||
    Confirm_pw.value == ""
  ) {
    alert("fill all fields");
    // checking is password matches confirmation
  } else if (passWord.value !== Confirm_pw.value) {
    alert("not matching");
    /*after error checking 
    input fields are stored into an array of objects */
  } else {
    var currentData = JSON.parse(localStorage.getItem("allUsers"));
    if (currentData == null) currentData = [];

    var store_username = document.getElementById("uName").value;
    var store_password = document.getElementById("Psswd").value;
    var store_name = document.getElementById("firstname").value;
    // storing new user details
    var newUser = {
      name: store_name,
      username: store_username,
      password: store_password,
    };
    // storing data back into currentData array
    localStorage.setItem("newUser", JSON.stringify(newUser));
    currentData.push(newUser);
    localStorage.setItem("allUsers", JSON.stringify(currentData));
  }
}
/* sign in function used to validate user details from localstorage 
        if password and username matches any of stored details then user gets redirected.
*/

function SignIN() {
  var getData = JSON.parse(localStorage.getItem("allUsers"));
  console.log(getData);
  const u_name = document.getElementById("Uname-inpt").value;
  const pwd = document.getElementById("passwrd-inpt").value;
  // iterating through arr of objects to check is input = value
  for (i = 0; i < getData.length; i++) {
    if (u_name == getData[i].username && pwd == getData[i].password) {
      document.location.href = "index.php";
      return;
    }
  }
  console.log("failed");
  alert("Incorrect details");
}
