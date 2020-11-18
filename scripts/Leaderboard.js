let user = localStorage.getItem("loggedusr");
let showBtn = document.getElementById("showTable");
let userScores = JSON.parse(localStorage.getItem('Ranking'));


function fillTable(userScores) {
    console.log(userScores)
    const tablebody = document.getElementById("tableData");
    let Datahtml = "";
    Datahtml +=
        `<tr><td id="place">${"1st"}</td><td> ${userScores.User} </td><td>${userScores.Score}</td><td>${userScores.Level}</td></tr>
         <tr><td id="place">${"2nd"}</td><td> ${""} </td><td>${""}</td><td>${""}</td></tr>
         <tr><td id="place">${"3rd"}</td><td> ${""} </td><td>${""}</td><td>${""}</td></tr>`;

    console.log(Datahtml);
    tablebody.innerHTML = Datahtml;
}
showBtn.onclick = () => { fillTable(userScores) }