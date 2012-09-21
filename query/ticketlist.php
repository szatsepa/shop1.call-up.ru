<?php

include 'connect.php';

$result = mysql_query("SELECT c.id AS uid, az.id AS `order`, az.c_number, az.`time` AS `create`, az.exe_time, c.name, c.surname, c.e_mail,c.phone  FROM `arch_zakaz` AS az, customer AS c  WHERE az.report = 0 AND az.customer = c.id");

$tmp = array();

while ($var = mysql_fetch_assoc($result)){
    array_push($tmp, $var);
}

$out = array('tickets'=>$tmp);

echo json_encode($out);

mysql_close();
?>
