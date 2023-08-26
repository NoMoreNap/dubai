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
    public function insert($values) {
        [$name, $phone, $mail] = $values;
        $query = "insert into mail(name, phone, mail) values ('$name','$phone','$mail')";
        return $this->query($query);
    }
}
