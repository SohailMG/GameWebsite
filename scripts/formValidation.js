/* 
          this script contains sign in and sign up functions 
          used to store user data and authenticate user input
     */

// asigning variables to input fields
let firstName = document.getElementById("firstname");
let userName = document.getElementById("uName");
let passWord = document.getElementById("Psswd");
let Confirm_pw = document.getElementById("ConfPass");
let lastName = document.getElementById("lastname");
let usrEmail = document.getElementById("usrEmail");

let Alerts2 = document.getElementById("Alerts2");

/* user registration function used to store user data in array of objects */
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

        /* after error checking 
        input fields are stored into an array of objects */
    } else {
        var currentData = JSON.parse(localStorage.getItem("allUsers"));
        var gameData = JSON.parse(localStorage.getItem("GameData"));
        if (currentData == null && gameData == null) gameData = [];
        currentData = [];

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

/* 
    sign in function used to validate user details from localstorage 
    if password and username matches any of stored details then user gets redirected.
*/
function SignIN() {
    // getting array of objects of  all users
    var getData = JSON.parse(localStorage.getItem("allUsers"));
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
    document.getElementById("Alerts").innerHTML = "Incorrect Details";
}

// once called logged key is removed from localstorage
function logOut() {
    localStorage.removeItem("logged");
}

// declaring variables for sign in, up and out buttons
let signN_btn = document.getElementById("signN");
let singP_btn = document.getElementById("signP");
let singO_btn = document.getElementById("signO");

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
    } else {
        document.getElementById("loggedIn").innerHTML = "";
    }
};
