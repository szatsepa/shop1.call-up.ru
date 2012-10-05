<?php

/*
 * rewrited by arcady.1254@gmail.com 16.9.2011
 */


// Просто комменты

$attributes = array();

$attributes = array_merge($_GET,$_POST,$_COOKIE); 

if(!isset($_SESSION)){  

    session_start();  
}

//print_r($attributes);
//
$days_name = array('вс','пн','вт','ср','чт','пт','сб');
$month_name = array('янв','февр','март','апр','май','июнь','июль','авг','сент','окт','ноя','дек');

$dayofweek = date("w");

if($dayofweek > 3){
        $delta = (6 - $dayofweek)+4;
        
    }else{
        $delta = 3-$dayofweek;
    }

$next_draw  = mktime(0, 0, 0, date("m")  , date("d")+$delta, date("Y"));
$month = intval(date(m,$next_draw));
$str_next_draw = date("d-$month_name[$month]-Y",$next_draw);   
 



$_SESSION[res] = "shop1.call-up.ru/";

include './main/classes.php';
include ("./query/connect.php");
include ("./func/quotesmart.php");

if(isset ($_SESSION[auth]) && $_SESSION[auth] > 0){
   include './query/checkauth.php';
}

switch ($attributes[act]) { 
    
    case 'main':
        include './main/header.php';
        include './main/customerlist.php';
        include './main/footer.php';
        break;
    
    case 'ont':
        include './main/header.php';
        include './main/accountlist.php';
        include './main/footer.php';
        break; 
    
    case 'tcks':
        include './main/header.php';
        include './main/ticketlist.php';
        include './main/footer.php';
        break;
    
    case 'draw':
        $title .= " - билеты.";
        include './main/header.php';
        include './main/ticket_draws.php';   
        include './main/footer.php';
        break;
    
    case "authentication":
       include "./query/authentication.php";     
    break;
        
      case "logout":
        include "./action/logout.php";
    break;


default :

    header("location:index.php?act=main");
   
}

mysql_close();

?>
