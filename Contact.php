<!DOCTYPE html>
<?php
    include('Common.php');
    outputhtmlTemp("Contact Page");
    outputBannerNavigation("Contact")

?>
<div class="contact-Form">
    <div class="left-side">
        <h1>Get in touch</h1>
        <p>Get in touch by either filling the form on the right or visit social media links below</p>
        <div class="medialinks">
            <div class="facebook-icon"></div>
            <div class="twitter-icon"></div>
            <div class="instagram-icon"></div>
            <div class="github-icon"></div>
        </div>
        <div class="phoneNum">
            <h1>+44-0794376512</h1>
        </div>
    </div>
    <div class="right-side">
        <h1>Contact Form</h1>
        <div class="formlist">
            <ul>
                <li><input type="text" name="name" placeholder="Enter Name"></li>
                <li><input type="text" name="Email" placeholder="Enter Email address"></li>
                <li><input type="text" name="Subject" placeholder="Enter Subject"></li>
                <li><textarea name="Message" id="message" cols="30" rows="10" placeholder="Enter message..."></textarea>
                </li>
                <li><button class="formSubmit" onclick="Submitform()">Submit</button></li>
            </ul>
        </div>
    </div>
</div>

<?php
    include('Common.php');
    outputfooter();

?>