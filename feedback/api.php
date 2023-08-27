<?php
header('Access-Control-Allow-Origin: *');
require 'db.php';
require 'config.php';
$DB = new db($host,$user,$pass,$db);

if (!isset($_POST['name']) or !isset($_POST['phone']) or !isset($_POST['mail'])) {
    http_response_code(400);
    echo json_encode(array('res' => false ));
}
$name = $_POST['name'];
$phone = $_POST['phone'];
$mail = $_POST['mail'];
if ($DB->insert([$name,$mail,$phone])) {
    http_response_code(200);
    echo json_encode(array('res' => true ));
} else {
    http_response_code(400);
    echo json_encode(array('res' => false ));
}
