const firstName = document.getElementById("firstname");
const userName = document.getElementById("uName");
const passWord = document.getElementById("Psswd");
const SignUpbtn = document.getElementById("SignUp-btn");

/* user registration function used to store user data in array of objects */
function SignUp() {
  var currentData = JSON.parse(localStorage.getItem("allUsers"));
  if (currentData == null) currentData = [];
  var store_username = document.getElementById("uName").value;
  var store_password = document.getElementById("Psswd").value;
  var newUser = {
    username: store_username,
    password: store_password,
  };
  localStorage.setItem("newUser", JSON.stringify(newUser));
  currentData.push(newUser);
  localStorage.setItem("allUsers", JSON.stringify(currentData));
}
/* sign in function used to validate user details from localstorage 
  if password and username matches any of stored details then user gets redirected.
  */
function SignIN() {
  var getData = JSON.parse(localStorage.getItem("allUsers"));
  console.log(getData);
  const u_name = document.getElementById("Uname-inpt").value;
  const pwd = document.getElementById("passwrd-inpt").value;

  for (i = 0; i < getData.length; i++) {
    if (u_name == getData[i].username && pwd == getData[i].password) {
      document.location.href = "index.php";
      return;
    }
  }
  console.log("failed");
  alert("Incorrect details");
}
