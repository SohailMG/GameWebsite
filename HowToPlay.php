<?php
    include_once('Common.php');
    outputHtml("HowToPlay");
    outputBannerNavigation("HowToPlay")

?>
<div class="grid-container">
    <div class="grid-item grid-item-1">
        <button id="clickmebtn" onclick=" typeWriter()">Click Me</button>
        <p id="instructions"></p>
    </div>

    <div class="grid-item grid-item-2"></div>
</div>


<?php
    outputfooter();

?>