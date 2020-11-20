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
            <div class="allfields">
                First Name: <input id="firstname" type="text" name="name" placeholder="Enter first name">

                Last Name:<input id="lastname" type="text" name="name" placeholder="Enter last name">

                Email: <input id="usrEmail" type="text" name="Email" placeholder="Enter Email">
                Username:<input id="uName" type="text" name="Username" placeholder="Create User Name">
                Password:<input id="Psswd" type="Password" name="Password" placeholder="Create Password">
                Confirm Password:<input id="ConfPass" type="Password" name="Password" placeholder="Retype Password">
            </div>


            <li><button id="SignUp-btn" type="button" onclick="SignUp ()">Sign Up</button></li>
            <div id="Alerts2"></div>
        </ul>
    </form>
</div>

<?php
    include_once('CommonPhp/footer.php');
    outputfooter();
?>