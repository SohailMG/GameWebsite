const firstName = document.getElementById("firstname");
const userName = document.getElementById("uName");
const passWord = document.getElementById("Psswd");
const button = document.getElementById("Submitbtn");

// user registration function
// stores input fields in localstorage as JSON format
button.onclick = function () {
  const Uname = userName.value;
  const passwd = passWord.value;
  const fname = firstName.value;

  if (passwd && Uname && fname) {
    const userData = { PassWord: passwd, FirstName: fname };
    localStorage.setItem(Uname, JSON.stringify(userData));
    
    var getData = localStorage.getItem(Uname);
    var showData = JSON.parse(getData);

    document.location.href="index.php";
  }
}

