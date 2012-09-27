<?php
    $title .= " - билеты.";
?>
<div id="cust_list">
    
    <table class="dat" id="t_list" border="1">
        <thead>
            <th class="dat">Id</th>
            <th class="dat">Ф.И.О.</th>
            <th class="dat">E-mail</th>
            <th class="dat">Телефон</th>
            <th class="dat">Номер билета</th>
            <th class="dat">Дата</th>
            <th class="dat">Номер в тираже</th>
            <th class="dat">Принят</th> 
            <th class="dat">ID в тираже</th> 
            <th class="dat"></th> 
        </thead>
        <tbody>

        </tbody>
    </table>
 </div>
<div id="view_t">
    <p id="cid"></p>
    <p id="t_num"></p> 
    <p id="f_A"></p>
    <p id="f_B"></p>
    <p id="f_C"></p>
    <p id="em"></p>
    <span id="v_back">Вернутся</span>
    <span id="ch_status">
<!--        Изменить статус-->
        <select id="s_status">
            <option value="0" selected>Изменить статус</option>
            <option value="4">Проигрыш</option>
            <option value="5">Выигрыш</option>
        </select>
        <br/>
    </span>
    
</div>
