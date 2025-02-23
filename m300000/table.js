let table=document.createElement("table");
console.log(table);
let tr=document.createElement("tr")
console.log(tr);
table.append(tr)
let td=document.createElement("td")
console.log(td);
tr.append(td)
td.innerText="siddaramaiah";
document.body.appendChild(table)
td.style.border="2px solid red"
td.style.backgroundColor="yellow"
td.style.color="hotpink"



