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
    /* after error checking 
        input fields are stored into an array of objects */
  } else {
    var currentData = JSON.parse(localStorage.getItem("allUsers"));
    if (currentData == null) currentData = [];

    var store_username = document.getElementById("uName").value;
    var store_password = document.getElementById("Psswd").value;
    var store_name = document.getElementById("firstname").value;
    // storing new user details
    let newUser = {
      name: store_name,
      username: store_username,
      password: store_password,
    };
    // storing data back into currentData array
    localStorage.setItem("newUser", JSON.stringify(newUser));
    currentData.push(newUser);
    localStorage.setItem("allUsers", JSON.stringify(currentData));
    document.location.href = "Sign-in.php";
  }
}

/* 
    sign in function used to validate user details from localstorage 
    if password and username matches any of stored details then user gets redirected.
*/
function SignIN() {
  // getting array of objects of  all users
  const getData = JSON.parse(localStorage.getItem("allUsers"));
  console.log(getData);

  // getting user input values for username and password
  const u_name = document.getElementById("Uname-inpt").value;
  const pwd = document.getElementById("passwrd-inpt").value;

  // iterating through arr of objects to check if input equal to  existing password
  for (i = 0; i < getData.length; i++) {
    if (u_name == getData[i].username && pwd == getData[i].password) {
      localStorage.setItem("loggedusr", u_name);
      localStorage.setItem("logged", "true");
      var loggedusr = localStorage.getItem("loggedusr");

      document.getElementById("loggedIn").innerHTML = loggedusr;
      document.location.href = "index.php";

      return;
    }
  }
  alert("Incorrect details");
}

// once called logged key is removed from localstorage
function logOut() {
  localStorage.removeItem("logged");
}

// declaring variables for sign in, up and out buttons
const signN_btn = document.getElementById("signN");
const singP_btn = document.getElementById("signP");
const singO_btn = document.getElementById("signO");

/* displaying username of currently logged in user
    hiding sing in and up buttons once user is logged in */
window.onload = () => {
  let activeUser = localStorage.getItem("logged");
  let loggedusr = localStorage.getItem("loggedusr");

  // checking if there is an active user
  if (activeUser === "true") {
    signN_btn.style.display = "none";
    singP_btn.style.display = "none";
    singO_btn.style.display = "block";
    document.getElementById("loggedIn").innerHTML = loggedusr;
    document.getElementById("current-user").innerHTML = loggedusr;
    // showComments = localStorage.getItem('review');
    // comments.innerHTML = showComments;
    // document.getElementById("comments").style.display = "block";
  } else {
    document.getElementById("loggedIn").innerHTML = "";
  }
};
