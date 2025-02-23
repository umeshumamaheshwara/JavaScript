// let h1=document.getElementById("h1");
// console.log(h1);
// h1.style.color="red";

// let li=document.getElementsByClassName("list-items");
// console.log(li);
// console.log(Array.isArray(li));
// li[0].style.color="green"
// li[1].style.backgroundColor="hotpink"

// for(let i=0;i<li.length;i++){
//     li[i].style.color="red"
// }

// let li=document.getElementsByTagName("li")
// console.log(li);
// console.log(Array.isArray(li));
// let arr=Array.from(li);
// console.log(Array.isArray(arr));

// arr[0].style.color="yellow"
// for(let i=0;i<arr.length;i++){
//     arr[i].style.color="goldenrod"
// }

// let list=document.querySelector("li")
// console.log(list);
// list.style.backgroundColor="green"

// let list1=document.querySelectorAll(".list-items")
// console.log(list1);
// list1[0].style.color="white"

// for(let i=0;i<list1.length;i++){
//     list1[i].style.backgroundColor="aqua"
// }


let li=document.createElement("li")
console.log(li);
let ul=document.querySelector("#ul")
console.log(ul);
ul.append(li)
// li.innerText="REACTJS"
// li.textContent="RUBY"
// li.innerHTML="PERL"
// li.innerHTML=`<h1>AI&ML</h1>`
// li.innerText=`<h1>DATA SCIENCE</h1>`
li.innerText="RUBY"
li.style.listStyleType="none"
// li.setAttribute("class","list-items")
// console.log(li.getAttribute("class"));
// li.removeAttribute("class")

// li.className="list-items"
li.classList.add("list-items")
console.log(li.classList.contains("list-items"));
li.classList.remove("list-items")









