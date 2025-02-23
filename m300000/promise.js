let promise=new Promise((resolve,reject)=>{
    if(5<3){
        resolve("suceessfull")
    }
    else{
        reject("fail")
    }
})
.then((msg)=>{
    console.log(msg);
    
})
.catch((msg)=>{
    console.log(msg);
    
})