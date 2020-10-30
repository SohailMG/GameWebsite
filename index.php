<!-- php functions to output html template and navbar -->
<?php
        include_once('Common.php');
        outputHtml("Home Page");
        outputBannerNavigation("Home")
?>
<!-- sign in and sign up buttons layout -->

<main>
    <!-- left side of home page layout -->
    <div class="box1">
        <h1>Welcome to Memory Master</h1>
        <div class="questions">
            <ul>How good is your visual memory?</ul>
            <ul>How many numbers can you remember in a short amount of time?</ul>
            <ul> Test your memory strength and become the Memory Master</ul>
        </div>
    </div>
    <!-- right side ,logo of the game -->
    <div class="box2">
    </div>
</main>


<?php
    include_once('footer.php');
    outputfooter();
?>