/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    
    var id_row = 0;
    
    var order = 0;
    
    $.ajax({
        url:'./query/ticket_draws.php',
        type:'post',
        dataType:'json',
        success:function(data){
            if(data['tickets']){
                $("#cust_list").css('display', 'block');
                $("#t_list > tbody").empty();
                var n = 0;
                $.each(data['tickets'], function(){
                    $("#t_list > tbody").append('<tr id="r_'+this['order']+'"><td class="dat">'+this['order']+'</td><td class="dat">'+this['surname']+' '+this['name']+' '+'</td><td class="dat">'+this['e_mail']+'</td><td class="dat">'+this['phone']+'</td><td class="dat">'+this['c_number']+'</td><td class="dat">'+this['create']+'</td><td class="dat">'+this['ticket_no']+'</td><td class="dat">'+this['period_date']+'</td><td class="dat">'+this['period_id']+'</td><td class="dat"><a class="view_this" name="'+this['order']+'">Просмотреть.</a></td><td class="dat"></tr>')
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
    
    $("#t_list tbody tr").live('click',function(){
        $("#t_list tbody tr").css('background-color','inherit');
        var row_id = this.rowIndex;
        id_row = this.rowIndex - 1;
        $("#t_list > tbody > tr:eq("+(row_id-1)+")").css('background-color', '#ececfc');
    });
    
    $(".view_this").live('click',function(){
        order = this.name;
        $.ajax({
            url:'./query/view_order.php',
            type:'post',
            dataType:'json',
            data:{order:order},
            success:function(data){
                $("#view_t").css('display','block');
                $("#cid").text($("#t_list tbody tr:eq("+id_row+") td:eq(1)").text());
                $("#t_num").text("Номер "+$("#t_list tbody tr:eq("+id_row+") td:eq(6)").text()+" от "+$("#t_list tbody tr:eq("+id_row+") td:eq(7)").text()+" ID - "+$("#t_list tbody tr:eq("+id_row+") td:eq(8)").text());
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
    
    $("#s_status").change(function(){
        
        var sts = this.options[this.selectedIndex].value;
        $.ajax({
            url:'./action/change_status.php',
            type:'post',
            dataType:'json',
            data:{order:order,status:sts},
            success:function(data){
                if(data['ok'] == 1){
                    $("#t_list > tbody > tr:eq("+id_row+")").remove();
                    $("#view_t").css('display','none'); 
                    $("#cust_list").css('display', 'block');
                }
            },
            error:function(data){
                console.log(data['responseText']);
            }
        });
    });
    
});

