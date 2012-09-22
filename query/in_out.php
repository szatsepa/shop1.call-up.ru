<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$tmp = explode(':', $_POST[message]);

$a = $tmp[0];

$b = $tmp[1];

$c = $tmp[2];

$num_ticket = numOrder();

$p_date = date("Y-m-d H:i:s");

$p_id = rand(1, 999);

$str_out = "<response><ticket_no>$num_ticket</ticket_no><period_date>$p_date</period_date><period_id>$p_id</period_id><A>$a</A><B>$b</B><C>$c</C></response>";

echo $str_out;


function numOrder(){
    $str = '';
            for($ii = 0;$ii<4;$ii++){
                for($i=0;$i<3;$i++){
                    $tmp = rand(0, 9);
                    $str .= $tmp;
                }
            if($ii != 3)$str .= ' ';          
            }

            return $str;
}
?>
