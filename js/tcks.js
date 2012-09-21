/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    
    $.ajax({
        url:'./query/ticketlist.php',
        type:'post',
        dataType:'json',
        success:function(data){
            if(data['tickets']){
                $("#cust_list").css('display', 'block');
                $("#t_list > tbody").empty();
                var n = 0;
                $.each(data['tickets'], function(){
                    $("#t_list > tbody").append('<tr id="r_'+this['order']+'"><td class="dat">'+this['order']+'</td><td class="dat">'+this['surname']+' '+this['name']+' '+'</td><td class="dat">'+this['e_mail']+'</td><td class="dat">'+this['phone']+'</td><td class="dat">'+this['c_number']+'</td><td class="dat">'+this['create']+'</td><td class="dat"><a class="go_game" name="'+this['order']+'">Отправить.</a></td><td class="dat"><a class="view_this" name="'+this['order']+'">Просмотреть.</a></td><td class="dat"></tr>')
                    n++;
                });
            }
        },
        error:function(data){
            console.log(data['responseText']);
        }
    });
    
    $(".go_game").live('click',function(){
        var order = this.name;
        $.ajax({
            url:'./action/in_the_draw.php',
            type:'post',
            dataType:'json',
            data:{order:order},
            success:function(data){
                console.log(data);  
                if(data){
                    document.write('<form action="index.php?act=msg" method="post"><input type="hidden" name="msg" value="'+data['ticket']+'"/><input name="email" type="hidden" value="'+data['email']+'"><input name="gmt" type="hidden" value="'+data['time']+'"></form>');
                    document.forms[0].submit();
                }
            },
            error:function(data){
                document.write(data['responseText']);
            }
        });
    });
    
    $("#t_list tbody tr").live('click',function(){
        $("#t_list tbody tr").css('background-color','inherit');
        var row_id = this.rowIndex;
        $("#t_list > tbody > tr:eq("+(row_id-1)+")").css('background-color', '#ececfc');
    });
    
    function goNaHuy(data){
        console.log(data);
        $.ajax({
            url:'index.php?act=getmsg',
            type:'post',
            data:{msg:data['ticket'],email:data['email'],gmt:data['time']}
        });
    }

});

