<?php
    include_once('Common.php');
    outputHtml("Leaderboard");
    outputBannerNavigation("Leaderboard")

?>
<div class="grid-container2">
    <div class="grid-item score-table">
        <table class="table-container">

            <thead>
                <tr>
                    <th>Place</th>
                    <th>Username</th>
                    <th>Level</th>
                    <th>score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>2</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>3</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>4</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>5</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="grid-item highest-score">
        <h1>Highest Level</h1>
        <div class="showLevel">7
        </div>
    </div>

    <div class="grid-item user-name">
        <h1>User name</h1>
    </div>
</div>


<?php
    outputfooter();

?>