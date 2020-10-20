<?php
        include('Common.php');
        outputhtmlTemp("Home Page");
        outputBannerNavigation("Home")
?>
    <!-- Sing in form -->
    <div class="formContainer">
        <div class="SignInform">
            <h1>Sign In</h1>
                <ul class="formlist">
                    <li><input type="text" name="User name" placeholder="User Name"></li>
                    <li><input type="passwrod" name="Password" placeholder="Password"></li>
                    <li><button class="Submitbtn" onclick="myfunction()">Sign In</button></li>
                    <li>Forget Password?</li>
                </ul>
        </div>
    </div>
    <script>
        function myfunction(){
            document.location.href="index.php";
        }
    </script>



<?php
    outputfooter();
?>