<?php
        include_once('CommonPhp/MainTags.php');
        include_once('CommonPhp/HeaderNavigation.php');
        outputHtml("Home Page");
        outputHeaderNav("Home")
?>

<div class="formContainer">
    <form class="forms">
        <h1>Sign Up</h1>
        <ul class="signUpform">
            <li><input id="firstname" type="text" name="User name" placeholder="Enter Name">Name</li>
            <li><input id="uName" type="text" name="User name" placeholder="Create User Name">UserName</li>
            <li><input id="Psswd" type="passwrod" name="Password" placeholder="Create Password">Password</li>
            <li><input id="ConfPass" type="passwrod" name="Password" placeholder="Retype Password">Confirm Password</li>
            <li><button id="SignUp-btn" type="button" onclick="SignUp ()">Sign Up</button>
            </li>
        </ul>
    </form>
</div>

<?php
    include_once('CommonPhp/footer.php');
    outputfooter();
?>