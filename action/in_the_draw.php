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
    $tmp .= substr($var[1], 1);
    if($row == 4 OR $row == 14)$tmp .= " ";
    $email = $var[0];
    $row++;
}

$time = gmmktime();

$out = array('ticket'=>$tmp,'email'=>$email,'time'=>$time);

echo json_encode($out);

mysql_close();
?>
