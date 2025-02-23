let h1=document.querySelector("#main");
let inc=document.querySelector("#inc")
let res=document.querySelector("#reset");
let dec=document.querySelector("#dec")

let counter=0;
function increment(){
    counter++;
    h1.innerText=counter;
}
function reset(){
    counter=0;
    h1.innerText=counter;
}
function decrement(){
    counter--;
    h1.innerText=counter;
}
inc.addEventListener("click",increment);
res.addEventListener("click",reset)
dec.addEventListener("click",decrement)