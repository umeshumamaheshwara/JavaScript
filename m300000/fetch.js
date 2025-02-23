// fetch("https://api.github.com/users")
// .then((y)=>y.json())
// .then((x)=>x.map((a)=>{
//     let userdiv=document.createElement("div");
//     let userlogin=document.createElement("h1")
//     let userid=document.createElement("h1");
//     let userimg=document.createElement("img");

//     userlogin.innerText=a.login;
//     userid.innerText=a.id;
//     userimg.src=a.avatar_url;

//     userdiv.append(userlogin,userid,userimg);

//     document.body.append(userdiv)

// }))
// .catch((err)=>console.log(err))


async function fetchdata(){
   let data=await fetch("https://api.github.com/users")
    // console.log(data);
    let finaldata= await data.json();
   console.log(finaldata);
}
fetchdata()


