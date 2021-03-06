<!DOCTYPE html>
<?php
include_once('CommonPhp/MainTags.php');
include_once('CommonPhp/HeaderNavigation.php');
outputHtml("Contact Page");
outputHeaderNav("Contact")

?>
<div class="contact-Form">
    <!-- contact form left side structure -->
    <div class="left-side">
        <h1>Get in touch</h1>
        <p>Get in touch by either filling the form on the right or visit social media links below</p>
        <!-- social media clickable images -->
        <div class="medialinks">
            <div class="facebook-icon">
                <a href="https://www.facebook.com/"><img src="Images/facebook.png" alt=""></a>
            </div>
            <div class="twitter-icon">
                <a href="https://twitter.com/">
                    <img src="Images/twitter.png" alt="">
                </a>
            </div>
            <div class="instagram-icon">
                <a href="https://www.instagram.com/">
                    <img src="Images/instagram.jpg" alt="">
                </a>
            </div>
            <div class="github-icon">
                <a href="https://github.com/SohailMG">
                    <img src="Images/Github.png" alt="">
                </a>
            </div>
        </div>
    </div>
    <!-- right side contact form layout -->
    <div class="right-side">
        <h1>Contact Form</h1>
        <!-- added onsubmit function to validate form fields -->
        <form onsubmit=" return validateForm()" class=" formlist" action="mailSent.php">
            <ul>
                <li><input id="name" type=" text" name="name" placeholder="Enter Name"></li>
                <li><input id="email" type=" text" name="Email" placeholder="Enter Email address"></li>
                <li><input id="subject" type=" text" name="Subject" placeholder="Enter Subject"></li>
                <li><textarea id="message" name="Message" cols="30" rows="10" placeholder="Enter message..."></textarea>
                </li>
                <li><button id="formSubmit" type="submit">Submit</button></li>
            </ul>
        </form>
    </div>
</div>

<?php
include_once('CommonPhp/footer.php');
outputfooter();
?>