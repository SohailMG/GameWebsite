<?php
    include('Common.php');
    outputhtmlTemp("HowToPlay");
    outputBannerNavigation("HowToPlay")

?>
<div class="grid-container">
    <div class="grid-item grid-item-1">
        <button onclick="typeWriter()">Clickme</button>
        <p id="demo"></p>
        <p id="demo2"></p>
    </div>

    <div class="grid-item grid-item-2"></div>
</div>


<?php
    outputfooter();

?>