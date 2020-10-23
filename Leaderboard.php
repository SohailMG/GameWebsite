<?php
    include('Common.php');
    outputhtmlTemp("Leaderboard");
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
        <div class="grid-item highest-score">highest score</div>
        <div class="grid-item user-name">user name</div>
    </div>


<?php
    include('Common.php');
    outputfooter();

?>