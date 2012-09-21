<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include 'connect.php';

$order = intval($_POST[order]);

$query = "SELECT ag.`artikul`, c.`e_mail` FROM `arch_goods` AS ag, `customer` AS c WHERE ag.`zakaz`= $order AND c.`id` = ag.`customer`";

$result = mysql_query($query);

$tmp_a = $tmp_b = $tmp_c ='';

$row = 0;

while($var = mysql_fetch_row($result)){
    if($row < 5)$tmp_a .= substr($var[0], 1)."; ";
    if($row >4 && $row < 15)$tmp_b .= substr($var[0], 1)."; ";  
    if($row >14)$tmp_c .= substr($var[0], 1)."; ";
    $em = $var[1];
    $row++;
}


$out = array('a'=>$tmp_a,'b'=>$tmp_b,'c'=>$tmp_c, 'email'=>$em);

echo json_encode($out);

mysql_close()
?>
