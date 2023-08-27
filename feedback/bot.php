<?php
require 'tg.php';
require 'config.php';
$BOT = new tg($API,$token);

//$request = json_decode($BOT->check(), false);
//
//$update_id = end($request->result)->update_id;

//if ($request->ok) {
//    $messages = json_decode($BOT->check($update_id),false)->result;
//    foreach ($messages as $mes) {
//        if ($update_id <= $mes->update_id) {
//            $update_id  = $mes->update_id;
//            if ($mes->message->text === 'привет') {
//                $BOT->send('И тебе привет');
//            }
//        }
//    }
//}
//while (true) {
//    sleep(1);
//    if ($request->ok) {
//        $messages = json_decode($BOT->check($update_id),false)->result;
//       foreach ($messages as $mes) {
//// print_r($new_update_id.' - 1'." | ".$update_id.' - 2'."\n");
//            if ($update_id < $mes->update_id) {
//                $update_id  = $mes->update_id;
//                echo mb_strtolower($mes->message->text, 'UTF-8');
//
//                switch (strtolower($mes->message->text)) {
//                    case 'пинг':
//                    {
//                        $BOT->send('понг');
//                        break;
//                    }
//                }
//            }
//        }
//    }
//}

function ec($text) {
    echo '<pre>';
    var_dump($text);
    echo '</pre>';
}
