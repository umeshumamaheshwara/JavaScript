let a=document.querySelector("#a");
let b=document.querySelector("#b");
let c=document.querySelector("#c");

a.addEventListener("click",()=>{
    console.log("parent element");
    
},true)
b.addEventListener("click",(e)=>{
    console.log("child element");
    e.stopPropagation();
},true)
c.addEventListener("click",()=>{
    console.log("grand child element");
    
},true)