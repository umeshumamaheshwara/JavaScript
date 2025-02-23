let btn=document.querySelector("#btn");

function random(){
    let color="#";
    for(let i=0;i<6;i++){
        color=color+parseInt(Math.random()*10)
        console.log(color);
        
    }
    document.body.style.backgroundColor=color;
}

btn.addEventListener("click",random)