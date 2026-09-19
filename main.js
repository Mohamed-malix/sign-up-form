
document.querySelector('.submit').addEventListener('click', (e) => {
    e.preventDefault();
    addElements();
})


function addElements(){

    let passwd = document.querySelector('#passwd');
    let passcom= document.querySelector('#comfirm');

    checkPasswd(passwd, passcom);
}


function checkPasswd(passwd, passcom){

    console.log(passcom.value);
    console.log(passwd.value);

    if(passwd.value!==passcom.value){
    alert('The password and comfirm password must be the same');
    }
    else{
        alert('The registration was successful!');
    }

}

