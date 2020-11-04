// this function used when play game button is pressed
// the screen changes to the main screen
var screen_one = document.getElementById("startScreen");
var screen_two = document.getElementById("selectionScreen");

function startGame() {
    screen_one.style.display = "none";
    screen_two.style.display = "block";
}
// game review function to store user comments and display them
function submitComment() {
    var comment = document.getElementById("comment").value;
    var comments = document.getElementById("comments");

    localStorage.setItem("review", "true");
    localStorage.setItem("reviews", comment);

    showComments = localStorage.getItem("reviews");
    comments.innerHTML = showComments;
    document.getElementById("comment").value = "";
}
