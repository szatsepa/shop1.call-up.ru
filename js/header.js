/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
   
    var act = $("#act").val();
    
    
        $("#customer").mousedown(function(){
            if(act != 'main'){
                document.location.href = "index.php?act=main"
            }
        });
    
   
        $("#accounts").mousedown(function(){
            if(act != 'ont'){
                document.location.href = "index.php?act=ont"
            }
        });
        
       $("#tickets").mousedown(function(){
           if(act != 'tcks'){
                document.location.href = "index.php?act=tcks"
            }
       });
       
       $("#psw_submit").mousedown(function(){
                var scr_W = screen.width;
                var scr_H = screen.height;
                var colorDepth = screen.colorDepth;
                var pwd = $("#pwd").val();
                var out = {scr_W:scr_W,scr_H:scr_H,colorDepth:colorDepth,pwd:pwd}
                $.ajax({
                    url: './action/statistics.php',
                    type:'post',
                    dataType:'json',
                    data:out
                });
                return false;
       });
});

