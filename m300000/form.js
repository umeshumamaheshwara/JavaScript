let fname=document.querySelector("#fname");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let cpassword=document.querySelector("#cpassword")

let fnameerror=document.querySelector("#fnameerror");
let emailerror=document.querySelector("#emailerror");
let passworderror=document.querySelector("#passworderror");
let cpassworderror=document.querySelector("#cpassworderror");

let btn=document.querySelector("#btn")

btn.addEventListener("click",(e)=>{
e.preventDefault();
if(fname.value.trim().length==0){
    fnameerror.innerText="please enter first name"
}
if(email.value.trim().length==0){
    emailerror.innerText="please enter the email"
}
if(password.value.trim().length==0){
    passworderror.innerText="please enter the password"
}
else if(password.value.trim().length<8){
    passworderror.innerText="password should consist of atleast 8 character"
}
if(password.value!==cpassword.value){
    cpassworderror.innerText="invalid username or password"
}
if(fname.value.trim().length>0&&email.value.trim().length>0&&password.value===cpassword.value){
    alert("form validation is successfully done")
}
})