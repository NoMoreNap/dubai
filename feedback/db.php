<?php

require "config.php";

class db {
    public $ms;
    public function __construct($host, $user, $pass, $db)
    {
       $ms = mysqli_connect($host, $user, $pass, $db);
       $this->ms = $ms;
       return $ms;
    }
    public function query($query) {
        return mysqli_query($this->ms,$query);
    }
    public function select($hash) {
        $query = "select id from mail where hash = '$hash'";
        return  mysqli_fetch_all($this->query($query), 1);

    }
    public function insert($values) {
        [$name, $phone, $mail,$date,$hash] = $values;
        $query = "insert into mail(name, phone, mail,date,hash) values ('$name','$phone','$mail','$date','$hash')";
        return $this->query($query);
    }
}
