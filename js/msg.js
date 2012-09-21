/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    var msg = "message - "+$("#msg").val()+";";
    var email = "email - "+$("#email").val()+";";
    var gmt = "time - "+$("#timestamp").val()+";";
    $("#soob").html("<p>"+msg+"</p><p>"+email+"</p><p>"+gmt+"</p>"); 
});

