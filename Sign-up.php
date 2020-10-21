<?php
        include('Common.php');
        outputhtmlTemp("Home Page");
        outputBannerNavigation("Home")
?>

<div class="formContainer">
        <div class="forms">
            <h1>Sign Up</h1>
                <ul class="signUpform">
                    <li><input type="text" name="User name" placeholder="Enter Name">Name</li>
                    <li><input type="text" name="User name" placeholder="Create User Name">UserName</li>
                    <li><input type="passwrod" name="Password" placeholder="Create Password">Password</li>
                    <li><input type="passwrod" name="Password" placeholder="Retype Password">Confirm Password</li>
                    <li><button class="Submitbtn" onclick="myfunction()">Sign Up</button></li>
                </ul>
        </div>
    </div>

<?php
    outputfooter();
?>