let user = localStorage.getItem("loggedusr");
let ranking = JSON.parse(localStorage.getItem('Ranking'));

window.onload = () => {
    fillTable(ranking);
}


function fillTable(ranking) {
    console.log(ranking)
    const tablebody = document.getElementById("tableData");
    let Datahtml = "";
    Datahtml +=
        `<tr><td id="place">${"1st"}</td><td> ${ranking.User} </td><td>${ranking.Score}</td><td>${ranking.Level}</td></tr>
         <tr><td id="place">${"2nd"}</td><td> ${""} </td><td>${""}</td><td>${""}</td></tr>
         <tr><td id="place">${"3rd"}</td><td> ${""} </td><td>${""}</td><td>${""}</td></tr>`;

    console.log(Datahtml);
    tablebody.innerHTML = Datahtml;
}