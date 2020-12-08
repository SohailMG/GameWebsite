// on window load function to show rankings and logged user
window.onload = () => {
     // showuser displays the currently logged user in every window
     // showUser is called from formValidation.js
     showUser();
     fillTable();
};

let user = localStorage.getItem("loggedusr");
let showBtn = document.getElementById("showTable");
let userScores = JSON.parse(localStorage.getItem("Ranking"));

let allUsers = JSON.parse(localStorage.getItem("allUsers"));

/**
 *  fill table checks for window location then
 *  retrieve user score and level and creates table row
 *  of username, level and score
 */
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
          for (let i = 0; i < GameData.length; i++) {
               Datahtml += `<tr><td id="place">${i + 1}</td><td> ${
                    GameData[i].Username
               }</td>
             <td>${GameData[i].Levels}</td><td>${GameData[i].Scores}</td></tr>`;

               tablebody.innerHTML = Datahtml;
          }
     }
}
