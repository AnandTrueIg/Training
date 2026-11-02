////========================================================Scopes==================================================

////============================Global Scope=================================

// let name = "Anand"
// function Name(){
//     console.log(name)
// }
// Name()

//=============================Function Scope================================


// function Name(){
//     let name ="Anand"
//     console.log(name)
// }
// Name()

////============================Block Scope===================================

// {
//     let age = 22
//     console.log(age)

// }

////=========================Function Expression==============================

// let add =function(a,b){
//     return a+b

// }
//  console.log(add(10,30))

 ///##

//  let name = function(){
//     console.log("Anand")
//  }
//  name()

///===========================Array Function=====================================

// let add = (a,b)=>{
//     return a+b 
// }
// console.log(add(18,7))

// //## One Parameter

// let multi = number =>{
//     return number*number
// }
// console.log(multi(8))
// console.log(multi(9))
// console.log(multi(5))
// console.log(multi(10))

//## Short Arrow

// let Name = (name)=> console.log(name)
// Name ("AnandLashkan")

// let add =(a,b,c) => a+b*c

// console.log(add(10,8,2))

//===================================Basic Error Handling=============================

// let a = 20;
// let c = 10;
// console.log(a)

// try {
//     console.log(b);
// } catch (error) {
//     console.log("bro you made mistake and your mistake is :  ",error);
// } finally{
//     console.log('hii im final..');
    
// }
// console.log(c)
///##======================================Throw Error==================================== 

// function checkage(age){
//     if (age<18){
//         throw new Error ("you must be 18 or older")
//     }
//     return "Registration successful"
// }
// console.log(checkage(19))

//##========================Try catch===========================================


// try {
    
//     console.log("Hello");
// } catch (error) {
//     console.log("Error occurred");
// } finally {
//     console.log("Program finished");
// }



// const city ="Indore"
// function Showcity(){
//     console.log(city)
// }
// Showcity()

// let num = (nums)=>{
//     return nums*nums
// }
// console.log(num(5))


// let a =52
// let c = 36

// try{
//     console.log(b)
// }catch(error){
// console.log("bro i am not here",error)
// }finally{
//     console.log("end game")
// }