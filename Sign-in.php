<?php
        include_once('CommonPhp/MainTags.php');
        include_once('CommonPhp/HeaderNavigation.php');
        outputHtml("Home Page");
        outputHeaderNav("Home")
?>
<!-- Sing in form -->
<div class="formContainer">
    <div class="forms">
        <h1>Sign In</h1>
        <ul class="signInform">
            <li><input id="Uname-inpt" type="text" name="User name" placeholder="User Name"></li>
            <li><input id="passwrd-inpt" type="passwrod" name="Password" placeholder="Password"></li>
            <li><button id="SignIn-btn" type="button" onclick="SignIN()">Sign In</button></li>
            <div id="Alerts"></div>
        </ul>
    </div>
</div>



<?php
    include_once('CommonPhp/footer.php');
    outputfooter();
?>