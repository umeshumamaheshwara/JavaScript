// console.log("i am external js file")

// var a;
// a=10;
// console.log(a);
// var b=20;
// console.log(b);
// a=100;
// console.log(a);

// var a="hiii";
// console.log(a);

// let a;
// a=10;
// console.log(a);
// let b=20;
// console.log(b);
// a=100;
// console.log(a);

// let a="hiii";
// console.log(a);

// const a=10;
// console.log(a);
// a=100;
// console.log(a);

// var s_name=`ramesh`;
// var s_grade='A';
// var s_age=15;
// console.log(s_name,s_grade,s_age);

// var e_name='ram';
// var e_sal=29950.50;
// var e_dept="commerce";
// console.log(e_name,e_sal,e_dept);

// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a,b,c);
// }
// console.log(c);

// function add(){
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a,b,c);
// }
// add()
// console.log(c);


// var a=10;
// let b=20;
// const c=30;
// function add(){
// console.log(a+b+c);
// }
// add()
// function mul(){
//     console.log(a*b*c);
// }
// mul();

// var a=10;
// console.log(a);


// console.log(a);
// var a=10;//undefined

// console.log(b);
// let b=20;//uncaught reference error


// console.log(a);
// const a=10;//uncaught reference error


// var a=10;
// let b=20;
// const c=30;
// console.log(a);
// console.log(b);
// console.log(c);


// for(let i=1;i<=10;i++){
//     console.log(i);
    
// }

// var a=10;
// console.log(typeof a);

// var b=99.9;
// console.log(typeof b);

// let a=10;
// let b=20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

//console.log(parseFloat(res))

// let no=123456;
// let count=0;
// while(no!=0){
//     let rem=parseInt(no%10);
//     //console.log(rem);
//     count++;
//     no=parseInt(no/10);
// }
// console.log(count);

// //toFixed
// let a=31.324;
// console.log(a.toFixed(2));
// //Number.isInteger()
// let x=10;
// console.log(Number.isInteger(x));

// let y=10.9;
// console.log(Number.isInteger(y));
// //Number.isFinite()
// let m=100/2;
// console.log(Number.isFinite(m));

// let n=100/0;
// console.log(Number.isFinite(n));
// //NaN
// console.log(0/0);
// console.log(parseInt("hii"));
// console.log("helloo"*2);
// //Number.isNaN()
// let c=NaN;
// console.log(Number.isNaN(c));


// let d=10;
// console.log(typeof d);

//String

// let a='hiii';
// console.log(typeof a);

// let b="hellooo";
// console.log(typeof b);

// let c=`byeeee`;
// console.log(typeof c);

// let a=10;
// let b=20;
// console.log("addition of a and b is a+b");
// console.log(`addition of ${a} and ${b} is ${a+b}`);
// console.log("addition of"+ a +" and "+ b +" is "+(a+b));

//length
// let str="jspider";
// console.log(str.length);

// //toUppercase()
// let str1="boys";
// console.log(str1.toUpperCase());

// //toLowerCase()
// let str2="GIRLS";
// console.log(str2.toLowerCase());

// //charAt()
// let str3="jspider";
// console.log(str3.charAt(4));
// console.log(str3.charAt(6));
// console.log(str3.charAt(0));
// console.log(str3.charAt(3));


// let str4="Bengaluru";
// console.log(str4);

// let res="";
// for(let i=str4.length-1;i>=0;i--){
//     res=res+str4.charAt(i);
// }
// console.log(res);

// let str5="apple";
// for(let i=0;i<=str5.length-1;i++){
//     let ch=str5.charAt(i);
//     if(ch=='a' || ch=='e' || ch=='i' || ch=='o'|| ch=='u'){
//         console.log(ch);
        
//     }
// }

// //charCodeAt
// let str="java";
// console.log(str.charCodeAt(1));
// console.log(str.charCodeAt(0));
// //slice
// let str1="jspider";
// // console.log(str1.slice(1,5));
// console.log(str1.slice(-7,-2));
// //substring
// let str2="java";
// console.log(str2.substring(0,3));
// //substr
// let str3="rajajinagar";
// console.log(str3.substr(0,1));
// console.log(str3.substr(0,2));
// console.log(str3.substr(0,3));
// console.log(str3.substr(0,5));
// //trimstart and trimEnd
// let str4="          jspider       ";
// console.log(str4.length);

// str4=str4.trimEnd();
// console.log(str4.length);

// str4=str4.trimStart();
// console.log(str4.length);
// //trim
// let str5="          javascript        ";
// console.log(str5.length);
// str5=str5.trim();
// console.log(str5.length);
// //concat
// let str6="java";
// let str7="script";
// let str8="jspider"
// let a=str6.concat(" ",str7," ",str8);
// console.log(a);


// let str="rajajinagar";
// console.log(str.replace('a','b'));
// console.log(str.replaceAll("a",'b'));

// let str1="mejestic";
// console.log(str1.includes("e"));
// console.log(str1.includes("z"));

// let str2="umeshannaaaaaa";
// console.log(str2.indexOf('a'));
// console.log(str2.lastIndexOf('a'));

// let str3="5";
// // console.log(str3.padStart(5,'0'));
// console.log(str3.padEnd(4,'0'));

// let str4="jspider";
// console.log(str4.startsWith('j'));
// console.log(str4.startsWith('k'));

// console.log(str4.endsWith('r'));
// console.log(str4.endsWith('z'))

// let str5="nitya";
// console.log(str5.search('y'))

// let str6="koramangala";
// let a=str6.split("");
// console.log(a)

// let str7="jspider rajajinagar";
// let b=str7.split(" ")
// console.log(b)

//boolean
// let str="hii";
// let str1="heloo";
// let str2="hii"
// console.log(str==str1);//false
// console.log(str==str2);//true
// //undefined
// let a=10;
// console.log(a);//10

// let b;
// console.log(b);//undefined
// //typeOf
// console.log(typeof null);//object

// console.log(typeof undefined);//undefined

// console.log(typeof 10);//number
// console.log(typeof "hoi");//string
// console.log(typeof true);//boolean
// //BigInt
// let no=1234567;
// console.log(typeof no);//number

// let no1=12356789n;
// console.log(typeof no1);//bigint

// let no2=BigInt(12345678);
// console.log(typeof no2);//bigint

// let no3=BigInt("123456789");
// console.log(typeof no3);//bigint
// //Symbol
// let s="foo";
// let s1="foo";
// console.log(s==s1);//true

// let sym=Symbol("foo");
// let sym1=Symbol("foo")
// console.log(sym==sym1);//false
// console.log(sym);

// //loosly equals(==) and 
// // strictly equals(===)
// let x="10";
// console.log(typeof x);//string

// let y=10;
// console.log(typeof y);//number

// console.log(x==y);//true
// console.log(x===y);//false

// let m="50";
// let n="50";
// console.log(m===n);//true


//typecasting
//implicit type casting
// let a="5";
// console.log(typeof a);
// let b=a+10;
// console.log(b);;
// console.log(typeof b);

// let x="5";
// let y=x*5;
// console.log(y);
// console.log(typeof y);

//explicit typecasting
// let c=100;
// console.log(c);
// console.log(typeof c);

// let d=String(c);
// console.log(d);
// console.log(typeof d);

// let no=prompt("enter the value")
// // console.log(no);
// // console.log(typeof no);
// let no1=prompt("enter the second value")
// let x=Number(no);
// let y=Number(no1)
// console.log(x+y);

// let a=Number(prompt("enter the first value"));
// console.log(typeof a);
// let b=Number(prompt("enter second value"))
// console.log(typeof b);
// let c=a+b;
// console.log(c);

// function add(){
//     let a=10;
//     let b=20;
//     let res=a+b;
//     console.log(res);
// }
// add()

// function circle(){
//     let pi=3.142;
//     let r=5;
//     let res=pi*r*r;
//     console.log(res);
    
// }
// circle();


// function num()
// {
//     for(let i=0;i<11;i++)
// console.log(i);
//     }
// num();

// function num1()
// {
//     for(let i=10;i>=1;i--){
//         console.log(i);
//     }
// }
// num1();

// function number(){
//     for(let i=1;i<=10;i++)
//     {
//        if(i%2==0){
//         console.log(i);
//         }
//     }
// }
// number();

// function odd()
// {
//     for (let i=1;i<=10;i++)
//     {
//         if(i%2!=0)
//         {
//             console.log(i);
//              }
//          }
//     }
// odd()

// function count(){
//     let count1=0;
//     for(let i =1; i<=10; i++){
//         count1++;
//     }
//     console.log(count1);
// }
// count();
//  function sum()
//  {
//     let sum1=0;
//     for(let i=0;i<=10;i++){
//         sum1=sum1+i;
//     }
//     console.log(sum1);
//  }
//  sum();


// function  add(){
//     let a=10;
//     let b=20;
//     let res=a+b;
//     console.log(res);
// }
// add()

// function add1(a,b){
//     let res=a+b;
//     console.log(res);
// }
// add1(10,20)
// add1(100,200)
// add1(1000,2000)

// let no=Number(prompt("enter the first value"));
// let no1=Number(prompt("enter the second value"))
// function add2(a,b){
//     let res=a+b;
//     console.log(res);
// }
// add2(no,no1)

// function add(a,b){
//     let res=a+b;
//     console.log(res);
// }
// add(Number(prompt("enter the first value")),Number(prompt("enter the second value")))

// function sub(){
//     let a=20;
//     let b=10;
//     let res=a-b;
//     return res;
// }
// let a=sub()
// console.log(a);

// console.log(sub());

// function sub(a,b){
//     let res=a-b;
//     return res;
// }
// console.log(sub(Number(prompt("enter the first value")),Number(prompt("enter the second value"))));


//functin hoisting
// console.log("*****starts****");

// add()

// console.log("*****ends*****");
// function add(){
//     console.log("hiiii jspider");
// }

//this keyword
// var a=30;
// function add(){
//     var a=10;
//     console.log(a);//o/p:10
//     console.log(this.a);//o/p:30
// }
// add()

//print function name
// function add(){
//     console.log("hiii bangalore");
    
// }
// add()
// console.log(add);

//arrow function

// let a=()=>console.log("hiiii");
// a()

// let b=()=>{
//     console.log("heloooo");
//     console.log("byeee");
// }
// b()

// let c=x=>{console.log(x)}
// c(10)

// let d=(a,b)=>{
//     console.log(a,b);
// }
// d(10,20)

// let e=_=>{
//     console.log("umeshanna");
// }
// e()

// add()
// function add(){
//     console.log("hiii");
// }

// a()
// let a=()=>{
//     console.log("i am a arrow function");
// }

// let a=()=>{
// let no=5;
// let fact=1;
// for(let i=no;i>=1;i--){
//     fact=fact*i;
// }
// console.log(fact);
// }
// a()

// let b=no=>{
// let fact = 1;
// for(let i=no;i>=1;i--){
//     fact=fact*i;
// }
// console.log(fact);
// }
// b(6)

// let c=()=>{
//     let no=5;
//     let fact=1;
//     for(let i=no;i>=1;i--){
//         fact=fact*i;
//     }
//     return fact;
// }
// let d=c()
// console.log(d);
// console.log(c());



// function a(b){
//  let a=10;
//  let c=20;
//  b()
//  let res=a+c;
//  console.log(res);
// }
// a(b)
// function b(){
//     console.log("hey i am function b");
// }

// function even(factorial){
//     for(let i=1;i<=5;i++){
//         if(i%2==0){
//             factorial(i)
//         }
//     }
// }
// even(factorial)
// function factorial(no){
//     let fact=1;
//     for(let i=no;i>=1;i--){
//         fact=fact*i; 
//     }
//     console.log(fact);
// }

// let a=10;
// let b=20;
// console.log(a+b);
// function add(sub){
// let a=10;





// let b=20;
// sub();
// let res=a+b;
// console.log(res);
// }
// add(sub)
// function sub(){
//  let x=30;
//  let y=20;
//  let res=x-y;
//  console.log(res);
//   }

//nested function
// function add(){
//     let a=10;
    
//     function sub(){
//         let b=20;
//         console.log(b);
//         console.log(a);
//     }
//     sub()
// }
// add()

//function return a function
// function a(){
//     console.log("i am function a");
//     function b(){
//         console.log("i am function b");
//         function c(){
//             console.log("i am function c");
            
//         }
//         return c
//     }
//  return b
// }
// a()()()

//IIFE
// (function (){
//     console.log("i am anonymous function");
// })
// ()

//function with expression
// let a=function (){
//     console.log("i am function with expression");
// }
// a()

//first class function   
// let b=function add(){
//     console.log("i am named function");
// }
// b()

//array declaration
//by using new operator
// let arr=new Array();
// //array initialization
// arr[0]=10;
// arr[1]=20;
// arr[2]=30;
// //array utilization
// console.log(arr);
// //to find length of the array
// console.log(arr.length);
// //array re-initialization
// arr[1]=40;
// console.log(arr);
// //copy array from one variable to another variable
// //by using literal way
// let brr=[100,200,300,400]
// let crr=brr;
// console.log(brr);
// console.log(crr);


// let arr=[10,20,30,40,50];
// console.log(arr);
// arr.push(60);
// console.log(arr);
// arr.push(70,80,90)
// console.log(arr);

// let brr=[100,200,300,400];
// console.log(brr);
// brr.unshift(500)
// console.log(brr);
// brr.unshift(600,700,800);
// console.log(brr);
// brr.pop();
// console.log(brr);
// brr.pop();
// console.log(brr);

// let crr=[10,20,30,40,50];
// console.log(crr);
// crr.shift();
// console.log(crr);
// crr.shift()
// console.log(crr);

// let arr=[10,20,30,40,50];
// console.log(arr.slice(0,3));
// console.log(arr.slice(-4,-1));
// console.log(arr);

// let a=arr.splice(0,3,"hiii","heloooo","bye")
// console.log(a);
// console.log(arr);

//map
// let arr=[10,20,30,40];
// let a=arr.map((element,index,array)=>{
//     return element+" "+ index+" "+ array;
// })
// console.log(a);

//filter
// let arr=[5,4,3,2,1]
// let b=arr.filter((element,index,array)=>{
//     return(element%2==0);
// })
// console.log(b);

//reduce
// let arr=[10,20,30,40]
// let a=arr.reduce((accu,ele,index,array)=>{
//     return accu+ele;
// })
// console.log(a);

//reverse
// let arr=[10,20,30,40];
// let b=arr.reverse();
// console.log(b);

//join
// let str="jspider rajajinagar";
// let str1=str.split(" ");
// console.log(str1);
// let a=str1.join(" ")
// console.log(a);

//sort
// let fruits=['mango','grapes','orange','banana'];

// console.log(fruits.sort());

// let arr=[50,30,40,20,10];
// console.log(arr.sort((a,b)=>{return a-b}));
// console.log(arr.sort((a,b)=>{return b-a}));

//foreach

// let arr=[100,200,300,400];
// let a=arr.forEach((element,index,array)=>{
//    return(element+" "+index+" "+array);
    
// })
// console.log(a);

// let b=arr.map((element,index,array)=>{
//     return(element);
    
// })
// console.log(b);

//some
// let age=[12,10,15,19,2];
// console.log(age.some((ele)=>{
//     return ele>18;
// }));

//every
// let age=[20,21,22,23,46,56];
// console.log(age.every((ele)=>{
//     return ele>18;
// }));

// let age1=[7,18,45,63,99];
// console.log(age1.every((ele)=>{
//     return ele>18
// }));

//includes
// let girls=['nitya','uma','ramya','suma'];
// console.log(girls.includes('ramya'));
// console.log(girls.includes("sheela"));

//indexOf
// let boys=['sumukh','mukesh','manoj','chinna','mukesh'];
// console.log(boys.indexOf('mukesh'));
//lastIndexof

// console.log(boys.lastIndexOf('mukesh'));

//concat
// let a=['darshan'];
// let b=['pavitragowda']
// let vijayalaxmi=a.concat(b)
// console.log(vijayalaxmi);


//object
//new operator

// let obj=new Object();
// console.log(obj);

// obj.name="sheela";
// console.log(obj);

// obj.age=16;
// console.log(obj);

// obj.gender="female";
// console.log(obj);

//literal way
// let a={
//     id:100,
//     ename:"sheela",
//     edept:"testing"
// }
// console.log(a);

//constructor fonction
// function add(id,name){
// this.id=id;
// this.name=name;
// }
// let b=new add(100,"sheela");
// console.log(b);

//by using class
// class Sample{
//     constructor(id,name){
//         this.id=id;
//         this.name=name;
//     }
// }
// let c=new Sample(200,"sheela");
// console.log(c);

//crud opreation

// let a={
//     id:100,
//     name:"raj",
//     address:"tumkur"
// }
// console.log(a);
// //syntax to create or insert
// //objectname.property=value;
// a.age=25;
// console.log(a);

// //read or retrive
// //syntax
// //console.log(objectname.property)
// console.log(a.id);

// //update or modify
// //syntax
// //objectname.property=value;
// a.name="jonny";
// console.log(a);

// //delete
// //syntax
// //delete(objectname.property)
// delete(a.age);
// console.log(a);



// let obj={
//     id:100,
//     name:"lalli",
//     age:22
// }
//freeze and isFrozen
// Object.freeze(obj)
// console.log(Object.isFrozen(obj));
// console.log(obj);
// obj.address="tumkur"
// console.log(obj);
// console.log(obj.name);
// obj.id=200;
// console.log(obj);
// delete(obj.id);
// console.log(obj);

//seal and isSealed
// Object.seal(obj)
// console.log(Object.isSealed(obj));

// obj.address="bangalore";
// console.log(obj);
// console.log(obj.id);
// obj.id=200;
// console.log(obj);
// delete(obj.id);
// console.log(obj);

//object.keys
// console.log(Object.keys(obj));
// for(items in obj){
//     console.log(items);
    
// }

//object.values
// console.log(Object.values(obj));

//object.entries

// console.log(Object.entries(obj));


//assign
// let obj={
//     id:100,
//     name:"lalli"
// }
// let obj1={
//     id:200,
//     name:"putta"
// }
// console.log(obj);

// Object.assign(obj,obj1)
// console.log(obj);

//groupBy
// let fruits=[
//     {name:"apple",price:130},
//     {name:"banana",price:40},
//     {name:"cherry",price:420}
// ]

// function callback({price}){
//     return price>100?"ok":"low"
// }

// let res=Object.groupBy(fruits,callback);
// console.log(res);

// let arr=[10,'hii',null,undefined,true,()=>{console.log("hellooo")
// },{id:100,name:"raj"}];
// arr.map((ele)=>{
//     console.log(ele);
// })
// arr[5]()
// console.log(arr[6].id);

// let obj=[{id:100},{id:200},{id:300},{id:400}];

// obj.map((x)=>{
//     console.log(x.id);
// })

// let fun=[()=>{console.log("hiiii")},()=>{console.log("hellooo")},()=>{console.log("byeee")}]
// fun.map((x)=>{
//     x()
// })

// let obj={
//     id:100,
//     name:"ram",
//     data:function add(){
//         console.log(this.id);
//         },
//     data1:()=>{
//         console.log(this.id);
        
//     }
// }
// obj.data()
// obj.data1()

// let obj={
//     id:100,
//     name:"ram",
//     skills:['java','web','sql']
// }
// console.log(obj.id);
// console.log(obj.skills[0]);
// obj.skills.map((x)=>{
//     console.log(x);
// })

//object destructuring
// let a={
//     id:100,
//     name:"ram"
// }
// console.log(a.id);
// console.log(a.name);

// let {id,name}=a;
// console.log(id,name);
// // console.log(name);

// //nested object

// let obj={
//     id:100,
//     frontend:{
//         lang:"react",
//         backend:{
//             lang:"java"
//         }
//     }
// }
// console.log(obj.frontend.backend.lang);
// let {lang}=obj.frontend.backend;
// console.log(lang);

let date=new Date();
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

console.log(Math.PI);
console.log(Math.sqrt(4));
console.log(Math.cbrt(8));
console.log(Math.ceil(10.3));
console.log(Math.floor(10.9));
console.log(Math.max(10,20,30,40));
console.log(Math.min(10,20,30,40));
console.log(Math.round(10.6));

let otp=parseInt(Math.random()*10000)
let no=Number(prompt(`enter the above otp ${otp}`))
if(otp===no){
    console.log("login successfull");
}else{
    console.log("login failed");
}







































































































































































