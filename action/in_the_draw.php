<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include '../query/connect.php';

$order = intval($_POST[order]);

$query = "SELECT c. `e_mail`, ag.`artikul` FROM `arch_goods` AS ag, `customer` AS c WHERE ag.`zakaz`= $order AND c.`id` = ag.`customer`";

$result = mysql_query($query);

$tmp = '';

$row = 0;

while($var = mysql_fetch_row($result)){
    $tmp .= substr($var[1], 1).' ';
    $email = $var[0];
    $row++;
}

$time = gmmktime();

rtrim($tmp);

$out = array('ticket'=>$tmp,'email'=>$email,'time'=>$time);

mysql_query("UPDATE arch_zakaz SET `report` = 1,`status` = 2 WHERE id=$order");

$out['report'] = mysql_affected_rows();

echo json_encode($out); 

mysql_close();


?>
