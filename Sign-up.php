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
            <div id="nameFields">
                <li><input id="firstname" type="text" name="name" placeholder="Enter first name">First Name</li>
                <li><input id="lastname" type="text" name="name" placeholder="Enter last name">Last Name</li>
            </div>
            <li><input id="usrEmail" type="text" name="Username" placeholder="Enter Email">Email</li>
            <li><input id="uName" type="text" name="Email" placeholder="Create User Name">UserName</li>
            <li><input id="Psswd" type="passwrod" name="Password" placeholder="Create Password">Password</li>
            <li><input id="ConfPass" type="passwrod" name="Password" placeholder="Retype Password">Confirm Password
            </li>
            <li><button id="SignUp-btn" type="button" onclick="SignUp ()">Sign Up</button></li>
            <div id="Alerts2"></div>
        </ul>
    </form>
</div>

<?php
    include_once('CommonPhp/footer.php');
    outputfooter();
?>