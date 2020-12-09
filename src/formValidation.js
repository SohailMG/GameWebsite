/**
 * Sign-in, Sign-up and Sign-out functionality
 * user form validation and authentication
 */

// asigning variables to input fields
let firstName = document.getElementById("firstname");
let userName = document.getElementById("uName");
let passWord = document.getElementById("Psswd");
let Confirm_pw = document.getElementById("ConfPass");
let lastName = document.getElementById("lastname");
let usrEmail = document.getElementById("usrEmail");

// message alert for error checking
let Alerts2 = document.getElementById("Alerts2");

// ------------------------------- Sign-Up-------------------------------------------

/** 
user registration function used to store user data in array of objects 
*/
function SignUp() {
     let CurrentData = JSON.parse(localStorage.getItem("allUsers"));
     let newUser = document.getElementById("uName").value;
     console.log(CurrentData);
     // first statement to check all fields are not empty
     if (
          firstName.value == "" ||
          lastName.value == "" ||
          usrEmail.value == "" ||
          userName.value == "" ||
          passWord.value == "" ||
          Confirm_pw.value == ""
     ) {
          Alerts2.innerHTML = "Fill all fields";
          form.username.focus();
          return false;
     }
     // checking if username already exists
     if (CurrentData != null) {
          for (let i = 0; i < CurrentData.length; i++) {
               // checking if email entered exists
               if (usrEmail.value == CurrentData[i].usrEmail) {
                    Alerts2.innerHTML = "Email already Exists";
                    return;
               }
               // checking if username exists
               if (newUser == CurrentData[i].username) {
                    Alerts2.innerHTML = "Username already Exists";
                    return;
               }
          }
     }

     // checking if email entered is a valid email
     let validEmail = /^[\w-\.]+@([\w]+\.)+([\w-]+)/;
     if (!validEmail.test(usrEmail.value)) {
          Alerts2.innerHTML = "invalid email";
          return false;
     }
     // checking if password matches confirmation
     if (passWord.value !== Confirm_pw.value) {
          Alerts2.innerHTML = "Passwords not matching";
          return false;
     }
     // checking if password has a number
     let hasNum = /[0-9]/;
     if (!hasNum.test(passWord.value)) {
          Alerts2.innerHTML = "Password must contain atleast one number";
          return false;
     }
     // checking is password has upper case letter
     let hasUpperCase = /[A-Z]/;
     if (!hasUpperCase.test(passWord.value)) {
          Alerts2.innerHTML = "Password must contain one upper case";

          return false;

          /* 
          after error checking 
          input fields are stored into an array of objects 
        */
     } else {
          var currentData = JSON.parse(localStorage.getItem("allUsers"));
          var gameData = JSON.parse(localStorage.getItem("GameData"));
          // checking if current data and game data is empty
          if (currentData == null && gameData == null)
               (currentData = []), (gameData = []);

          var store_username = document.getElementById("uName").value;
          var store_password = document.getElementById("Psswd").value;
          var store_fname = document.getElementById("firstname").value;
          var store_lname = document.getElementById("lastname").value;
          var store_Email = document.getElementById("usrEmail").value;
          // storing new user details
          let newUser = {
               firstname: store_fname,
               lastname: store_lname,
               usrEmail: store_Email,
               username: store_username,
               password: store_password,
          };
          // setting defualt game data for each user
          let newGameData = {
               Username: store_username,
               Scores: 0,
               Levels: 0,
          };

          // storing data back into currentData array
          localStorage.setItem("newUser", JSON.stringify(newUser));
          currentData.push(newUser);
          gameData.push(newGameData);
          localStorage.setItem("allUsers", JSON.stringify(currentData));
          localStorage.setItem("GameData", JSON.stringify(gameData));
          document.location.href = "Sign-in.php";
     }
}

//  ------------------------------- Sign-In-------------------------------------------

/** 
    sign in function used to validate user details from localstorage 
    if password and username matches any of stored details then user gets redirected.
*/
function SignIN() {
     // getting array of objects of  all users
     var getData = JSON.parse(localStorage.getItem("allUsers"));
     console.log(getData);

     // getting user input values for username and password
     let u_name = document.getElementById("Uname-inpt").value;
     let pwd = document.getElementById("passwrd-inpt").value;

     let Alerts = document.getElementById("Alerts");

     // iterating through array of user objects
     for (i = 0; i < getData.length; i++) {
          // checking all fields are empty
          if (u_name == "" || pwd == "") {
               Alerts.innerHTML = "Fill all fields";
               return;
          }

          // checking if password entered matches user
          if (u_name == getData[i].username && pwd != getData[i].password) {
               document.getElementById("Alerts").innerHTML =
                    "Incorrect Password";
               return;
          }
          //   checking if username and passwords match a user in localstorage
          else if (
               u_name == getData[i].username &&
               pwd == getData[i].password
          ) {
               localStorage.setItem("loggedusr", u_name);
               localStorage.setItem("logged", "true");
               loggedusr = localStorage.getItem("loggedusr");

               document.getElementById("loggedIn").innerHTML = loggedusr;
               document.location.href = "index.php";

               return;
          }
     }
     document.getElementById("Alerts").innerHTML = "Incorrect Details";
}

//  ------------------------------- Sign-Out-------------------------------------------

/**  once called logged key is removed from localstorage */
function logOut() {
     localStorage.removeItem("logged");
}

// declaring variables for sign in, up and out buttons
let signN_btn = document.getElementById("signN");
let singP_btn = document.getElementById("signP");
let singO_btn = document.getElementById("signO");

/**  displaying username of currently logged in user
    hiding sign in and up buttons once user is logged in */
function showUser() {
     let activeUser = localStorage.getItem("logged");
     let loggedusr = localStorage.getItem("loggedusr");

     // checking if there is an active user
     if (activeUser === "true") {
          signN_btn.style.display = "none";
          singP_btn.style.display = "none";
          singO_btn.style.display = "block";
          document.getElementById("loggedIn").innerHTML = " > " + loggedusr;
     } else {
          document.getElementById("loggedIn").innerHTML = "";
     }
}
