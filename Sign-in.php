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
            <li><input type="text" name="User name" placeholder="User Name"></li>
            <li><input type="passwrod" name="Password" placeholder="Password"></li>
            <li><button class="Submitbtn" onclick="myfunction()">Sign In</button></li>
            <li>Forget Password?</li>
        </ul>
    </div>
</div>



<?php
    include_once('CommonPhp/footer.php');
    outputfooter();
?>