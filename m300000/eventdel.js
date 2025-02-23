// let li=document.querySelector(".list-items:nth-child(1)")
// let li1=document.querySelector(".list-items:nth-child(2)")

// li.addEventListener("click",()=>{
//     li.style.backgroundColor="red"
// })

// li1.addEventListener("click",()=>{
//     li1.style.backgroundColor="red"
// })

// let li2=document.querySelector(".list-items:nth-child(3)")
// li2.addEventListener("click",()=>{
//     li2.style.backgroundColor="red"
// })

// let li3=document.querySelector(".list-items:nth-child(4)")
// li3.addEventListener("click",()=>{
//     li3.style.backgroundColor="red"
// })
// let ul=document.querySelector("ul")
// let li4=document.createElement("li")
// ul.append(li4);
// li4.innerText="REACT";
// li4.style.listStyleType="none"
// li4.setAttribute("class","list-items")

//event delegation

let ul=document.querySelector("ul")

ul.addEventListener("click",(e)=>{
    if(e.target.matches(".list-items")){
        e.target.style.backgroundColor="green"
    }
})

let li=document.createElement("li")
ul.append(li)
li.innerText="REACT";
li.style.listStyleType="none"
li.setAttribute("class","list-items")