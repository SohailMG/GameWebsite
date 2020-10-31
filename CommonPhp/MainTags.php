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
    <link rel="stylesheet" href="styles/Index.css">
    <link rel="stylesheet" href="styles/RegistForms.css">
    <link rel="stylesheet" href="styles/Game.css">
    <link rel="stylesheet" href="styles/Contact.css">
    <link rel="stylesheet" href="styles/HowToPlay.css">
    <link rel="stylesheet" href="styles/LeaderBoard.css">
    </head>
    <body>';
}