<?php
/*
Ouputs the common main tags of the website
and the title of each page 
*/
function outputHtml($PageTitle){
echo '<!DOCTYPE html>
    <html>
    <head>
    <title>' . $PageTitle . '</title>
    <link rel="stylesheet" href="style.css">
    </head>
    <body>';
}