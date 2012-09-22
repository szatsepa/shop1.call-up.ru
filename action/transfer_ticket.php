<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//order:ticket_no:period_date:period_id:

include '../query/connect.php';

$order = intval($_POST[order]);

$pid = intval($_POST[period_id]);

mysql_query("UPDATE arch_zakaz SET ticket_no = '$_POST[ticket_no]', period_id = $pid, period_date = '$_POST[period_date]'");

$out = array('ok'=>NULL);

if(mysql_affected_rows())$out['ok']=1;

echo json_encode($out);

mysql_close();
?>
