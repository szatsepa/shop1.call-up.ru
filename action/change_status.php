<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include '../query/connect.php';

$sts = intval($_POST[status]);

$order = intval($_POST[order]);

mysql_query("UPDATE arch_zakaz SET `status`= $sts WHERE id = $order");

$cnt = mysql_affected_rows();

$out = array('ok'=>$cnt);

echo json_encode($out);

mysql_close();
?>
