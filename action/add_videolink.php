<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


include '../query/connect.php';

$lnk = $_POST[vl];

$dt = $_POST[dt];

mysql_query("INSERT INTO draw (date_draw,video_link) VALUES ('$dt','$lnk')");

$out = array('ok'=>  mysql_insert_id(),'vl'=>$lnk); 

echo json_encode($out);

mysql_close();
?>
