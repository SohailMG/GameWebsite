<?php
        include('Common.php');
        outputhtmlTemp("Home Page");
        outputBannerNavigation("Home")
?>

        <div class="SignInForm"></div>
            <h1>Sign-In</h1>
            <form action="Index.php">
                <div class="inputs">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required>
                    
                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="pwd" required>

                    <button type="submit">Sign-In</button>
                    <input type="checkbox"> checked="checked"> Remember me 
                </div>

                <div class="container" style="background-color:#f1f1f1">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot<a href="#">password?</a></span>
                </div>
            </form>
<?php
    outputfooter();
?>