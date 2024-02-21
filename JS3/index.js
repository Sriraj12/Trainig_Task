const checkbox =( selected ) =>{
    var select = document.getElementsByName('click');
    for(var i = 0; i < select.length; i++){
        if(select[i].type == 'checkbox'){
            if(selected === 'check'){
                select[i].checked = true;
            }
            if(selected === 'unchecked'){
                select[i].checked = false;
            }
            if(selected === 'swap'){
                select[i].checked = !(select[i].checked);
            }
        }
    }
}