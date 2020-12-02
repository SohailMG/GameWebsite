window.onload = () => {
    // whichPage()
    showUser();
    fillTable();
    };

function fillTable() {
    // storing url of leader'sboard page
    let lbPath = "http://localhost:8888/Leaderboard.php";

    let GameData = JSON.parse(localStorage.getItem("GameData"));
    const tablebody = document.getElementById("tableData");
    let loggedusr = localStorage.getItem("loggedusr");
    let Datahtml = "";

    // checking if current page is leaderboard
    if (lbPath == document.URL) {
            document.getElementById("current-user").innerHTML = loggedusr;
            for (let i = 0; i < GameData.length; i++) 
            {
                    Datahtml += `<tr><td id="place">${i + 1}</td><td> ${
                            GameData[i].Username
            }</td>
             <td>${GameData[i].Levels}</td><td>${GameData[i].Scores}</td></tr>`;

                    tablebody.innerHTML = Datahtml;
            }

    }
}

// showUser, shows the currently logged user in everypage
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