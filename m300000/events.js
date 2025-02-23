let btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
    console.log("hiii i am addeventlistener");
    
})

let btn1=document.querySelector("#btn1")
let div=document.querySelector("#c")
let body=document.querySelector("body")
// console.log(body);

btn1.addEventListener("mouseover",()=>{
    div.style.backgroundColor="hotpink"
    // body.style.backgroundColor="goldenrod"
    document.body.style.backgroundColor="black"
})