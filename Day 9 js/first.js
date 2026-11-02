//==============================================function method==================================================================
// function myintro(){
//     console.log("Hello i am Anand Lashkan");
//     console.log("i am learning JavaScript");
// }
//  myintro();
// ========parameters
//  function myName(msg,n){
//     console.log(msg,n);
//  }
//  myName("Anand Lashkan", 8827758558);

// function add(x,y){
//    console.log(x+y);
   

// }
// add(10,8);
// add(5,8);

//==================Arrow function======================================

// const add = (a,b) =>{
//     console.log(a+b);
// }
// add(8,9);


// const mul = (a,b) =>{
//     console.log(a*b);
// }
// mul(7,5);

// const add = (a,b)=>{
//     return a+b;
// };
//  let sum = add(10,10);
//  console.log(sum  )

// const mul=(a,b)=>{
//     return a*b;
// };

// let ans = mul(5,9);
// console.log(ans);


///=====================practice Quation====================================

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//       if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//         count++;
//       }
// }
// console.log(count);
// }


// const countvowels =(str)=>{
//      let count = 0;
//     for(const char of str){
//       if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//         count++;
//       }
// }
// return count;
// }
///================================forEach loop ==========================================================
// let fruits =["Apple","Mango","banana"];
//  const result = fruits.forEach(function(fal) {
//   return fal;
// });
// console.log(result);


// let nums = [67,89,16,8];

//  let number =nums.map((num) =>{

//     return num*num;
// });
// console.log(number);  

//================return====================================

// function multi (a,b){
//     return a*b;
// }
// let ans = multi(5,9);
// console.log(ans);
// function add(a,b){
//     return a+b;
// }
// let answer =add(10,200);
// console.log(answer);

////=============================Runtime Errors================================

// function name(text){
//     console.log("My Name " + text );

// }

// name("Anand Lashkan")
// name("Ankit Patidar")
// name("Krishna Patidar")

// function add (a,b){
//     console.log(a+b);
// }

// add(5,6)
// function add (a,b){
//     console.log(a+b);
// }

// let result = add(4,5)
// console.log(result)


// function add (a,b){
//    return a+b
// }
// let val = add(10,320)
// console.log(val)


// let name = ""
// if (name){
//     console.log("welcome "+ name)

// }else{
//     console.log("Yes this is empty")
// }


// let marks =80;

// if (marks >= 90  && marks<=100 ){
//     grade ="Pass"
    
// } else if (marks>=70 && marks<=90){
//     grade="Pass B"
// }else if (marks>=50 && marks<=70){
//     grade= "Pass C"
// }else if (marks>=33 && marks<=50){
//     grade="Pass D"
// }else if(marks>=0 && marks<=33){
//     grade="FAIL"
// }
// console.log("accordind to yours marks, your grade was: ", grade);



function MyAge(age){
    if (age >=18){
        return "Vote"
    }else  {
        return "Note Vote"
    }
}

console.log(MyAge(18))
console.log(MyAge(6))
console.log(MyAge(57))
console.log(MyAge(17))