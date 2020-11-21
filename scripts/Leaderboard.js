let user = localStorage.getItem("loggedusr");
let showBtn = document.getElementById("showTable");
let userScores = JSON.parse(localStorage.getItem("Ranking"));

let allUsers = JSON.parse(localStorage.getItem("allUsers"));

// fillTable populates the leaderboard with all users and their scores

function fillTable() {
    let GameData = JSON.parse(localStorage.getItem("GameData"));
    const tablebody = document.getElementById("tableData");
    let Datahtml = "";

    for (let i = 0; i < GameData.length; i++) {
        Datahtml += `<tr><td id="place">${i + 1}</td><td> ${
            GameData[i].Username
        }</td>
        <td>${GameData[i].Scores}</td><td>${GameData[i].Levels}</td></tr>`;

        console.log(Datahtml);
        tablebody.innerHTML = Datahtml;
    }
}
showBtn.onclick = () => {
    fillTable();
};
