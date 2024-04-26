const log = document.querySelector('#login');
const reg = document.querySelector('#register');
const btn = document.querySelector('#btn');
console.log(register)


function login(){
    log.style.right= "0px";
    reg.style.right ="450px";
    btn.style.right ="0"
}


function register(){
    log.style.right= "-450px";
    reg.style.right ="0";
    btn.style.right ="110px"
}