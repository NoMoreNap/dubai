<?php
header('Access-Control-Allow-Origin: *');
require 'db.php';
require 'config.php';
require 'bot.php';
//$DB = new db($host,$user,$pass,$db);
$request = json_decode($BOT->check(), false);
//$BOT->send('test', -900685369);
ec($BOT->send('test', -900685369));
