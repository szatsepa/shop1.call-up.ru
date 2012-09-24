/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    
    var id_row = 0;
    
    var order = 0;
    
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
    
    $("#v_back").mousedown(function(){
        $("#view_t").css('display','none');
        $("#cust_list").css('display', 'block'); 
    });
    
    $(".view_this").live('click',function(){
        var order = this.name;
        $.ajax({
            url:'./query/view_order.php',
            type:'post',
            dataType:'json',
            data:{order:order},
            success:function(data){
                $("#view_t").css('display','block');
                $("#cid").text($("#t_list tbody tr:eq("+id_row+") td:eq(1)").text());
                $("#f_A").text(data['a']);
                $("#f_B").text(data['b']);
                $("#f_C").text(data['c']);
                $("#em").text(data['email']);
                $("#cust_list").css('display', 'none');
            },
            error:function(data){
                console.log(data['responseText']);
            }
        });
    });
    
    $(".go_game").live('click',function(){
        order = this.name;
        $.ajax({
            url:'./action/in_the_draw.php',
            type:'post',
            dataType:'json',
            data:{order:order},
            success:function(data){
                if(data){
                    ticketOut(data);
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
        id_row = this.rowIndex - 1;
        $("#t_list > tbody > tr:eq("+(row_id-1)+")").css('background-color', '#ececfc');
    });
    
    function ticketOut(data){
        $.ajax({
            url:'./query/in_out.php',
            type:'post',
            dataType:'xml',
            data:{message:data['ticket'],time:data['time'],username:data['email']},
            success:function(data){
                $(data).find("response").each(function(){
                    var out = {order:order,ticket_no:$(this).find("ticket_no").text(),period_date:$(this).find("period_date").text(),period_id:$(this).find("period_id").text()};
                     transferTicket(out);
                });
            },
            error:function(data){
                console.log(data['responseText']);
            }
          
        });
        return false;
    }
    function transferTicket(out){
        $.ajax({
            url:'./action/transfer_ticket.php',
            type:'post',
            dataType:'json',
            data:out,
            success:function(data){
               if(data['ok']==1){
                   $("#t_list > tbody > tr:eq("+id_row+")").remove();
               }
            },
            error:function(data){
                console.log(data['responseText']);
            }
        });
    }

});

