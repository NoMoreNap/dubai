<?php
header('Access-Control-Allow-Origin: *');
require 'db.php';
require 'config.php';
require 'bot.php';
$DB = new db($host,$user,$pass,$db);

if (!isset($_POST['name']) or !isset($_POST['phone']) or !isset($_POST['mail'])) {
    http_response_code(400);
    echo json_encode(array('res' => false ));
    return;
}
$ids = [5410669297,756656853,5019257519];
$name = $_POST['name'];
$phone = $_POST['phone'];
$mail = $_POST['mail'];
$hash = md5(time().rand(0,9999999));
$date = date('Y M D H:i', time());
if ($DB->insert([$name,$phone,$mail,$date,$hash])) {
    $id = $DB->select($hash)[0]['id'];
    $str = "Имя:    `$name`\nТелефон:    `$phone`\nПочта:   `$mail`\nID:    `$id`";
    foreach ($ids as $id) {
        $BOT->send($str, $id);
    }
    http_response_code(200);
    echo json_encode(array('res' => true ));
} else {
    http_response_code(400);
    echo json_encode(array('res' => false ));
}
