

function submitForm(){
    let passwd = document.querySelector('#passwd');
    let passcom= document.querySelector('#comfirm');

     if(passwd.value!==passcom.value){

         alert('The password and comfirm password must be the same');
         return false;
    }
    else{
        alert('The registration was successful!');
        
        return true;
    }

}
