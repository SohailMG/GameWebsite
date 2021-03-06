<?php
    include_once('CommonPhp/MainTags.php');
    include_once('CommonPhp/HeaderNavigation.php');
    outputHtml("Leaderboard");
    outputHeaderNav("Leaderboard")

?>
<!-- Grid containig ranking table,
box to show username and another to show highest level  -->
<div class="grid-container2">
    <div class="grid-item score-table">
        <!--table of all fields used for scoreboard -->
        <table id="table-container">

            <thead>
                <tr>
                    <th>Place</th>
                    <th>Username</th>
                    <th>Level</th>
                    <th>score</th>
                </tr>
            </thead>
            <tbody id="tableData">

            </tbody>
        </table>
    </div>
    <!-- highest score of player displays here -->
    <div class="grid-item highest-score">
        <h1>Highest Level</h1>
        <div class="showLevel">7
        </div>
    </div>
    <!-- current logged in username shows here -->
    <div class="grid-item user-name">
        <h1 id="current-user"></h1>
    </div>
</div>


<?php
    include_once('CommonPhp/footer.php');
    outputfooter();
?>