////=====================================callback=====================================////
// function greet(name,callback){
//     console.log("hello" + name)
//     callback()
// }
// function message(){
//     console.log("welcome to javascript")
// }

// greet("Anand",message)

//###//
// function sum(a,b){
//     console.log(a+b)
// }
// function calculator (a,b,sumcall){
//     sumcall(a,b)
// }
// calculator(1,2,(a,b)=>{
//     console.log(a+b)
// })


// setTimeout(function() {
//     console.log("Hello Anand");
// }, 2000);


////=================================

// function getData(dataId){
//     setTimeout(() => {
//        console.log("data",dataId) 
//     }, 2000);
// }
// getData(1)
// getData(2)
// getData(3)
// getData(4)
// getData(5)


///=============================Callback Hell==================///

// function getData(dataId,getNextData){
//     setTimeout(() => {
//        console.log("data",dataId)
//        if (getNextData){
//         getNextData()
//        }
//     }, 2000);
// }
// getData(1,()=>{
//     console.log("getting data2...")
//     getData(2,()=>{
//         console.log("getting data3...")
//         getData(3,()=>{
//             console.log("getting data4....")
//             getData(4,()=>{
//                 console.log("Finished")

//             })
//         })
//     })
// })

///////////======================Promises===========================/////////////

// let promise =new Promise((resolve,reject)=>{
//     console.log("I am a promise")
//     reject("some error occurred")
// })

////===######=================promise===================//////////

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             // console.log("data", dataId)
//             // resolve("success")
//             reject("Network issue")
//             if (getNextData){
//                 getNextData()   
//             }
//         }, 2000);
//     })
// }

// let promise =getData("push the value")
// promise.then((res)=>{
//     console.log("promise fullfilled", res)
// })

// promise.catch((err)=>{
//     console.log("rejected",err)
// })


////========================promise chain====================/////


// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data1")
//             resolve("success")
//         }, 4000);
//     })
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data2")
//             resolve("success")
//         }, 4000);
//     })
// }


// console.log("fetching data1....")
// let p1=asyncFunc1()
// p1.then((res)=>{
//     console.log("fetching data2....")
//     let p2=asyncFunc2()
//     p2.then((res)=>{})
// })


/////================promise chain=================
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataId)
//             resolve("success")
//         }, 2000);
//     })
// }
// getData(1)
// .then((res)=>{
//     return getData(2)
// })
// .then((res)=>{
//    return getData(3)
// }).then((res)=>{
//     console.log(res)
// })

// function getData() {

//     return new Promise(function(resolve) {

//         setTimeout(function() {

//             resolve("Data received");

//         }, 2000);

//     });

// }

// async function showData() {

//     console.log("Starting");

//     let result = await getData();

//     console.log(result);

//     console.log("Finished");

// }

// showData();

////========================synchronous===========================
    
// console.log("First");

// console.log("Second");

// console.log("Third");

////=====================asynchronous==============================

// console.log("First")
// setTimeout(function() {
//     console.log("Second")
// }, 2000);

// console.log("Third")

////=====================async==========================


// async function greet() {
//     return "Hello Anand";
// }

// let result = greet();

// console.log(result);


////===================.then use========================

// async function greet() {

//     return "Hello Anand";

// }

// greet().then(function(result) {

//     console.log(result);

// });

////==============async============================

// async function getData() {

//     console.log("Getting data");

// }

// getData();


////==================await============================


// async function showData() {

//     console.log("First");

//     let result = await getData();

//     console.log(result);

//     console.log("Third");

// }

// showData();


////==============practice 


// function calculate(a,b,callback){
//     let result =a+b
//     callback(result)
// }
// function showans(value){
//     console.log("Answeris:"+value)
// }

// calculate(10,20,showans)

///////////============================================================================================================


// console.log("Start")

// setTimeout(function(){
//     console.log("hello Anand")
// }, 2000);
// console.log("End")  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let numbers = [10, 20, 30];

// numbers.forEach(function(number) {
//     console.log(number);
// });

///=====================================================================================================================

// let myPromise = new Promise(function(resolve,reject){
//     let orderdelivered = true

//     if(orderdelivered){
//         resolve("Mobile Delivered")
//     }else{
//         reject("Order Cancelled!")
//     }
// })

// myPromise
// .then(function(result){
//     console.log(result)
// })
// .catch(function(error){
//     console.log(error)
// })



///======================================================================================================================

// let myPromise = new Promise(function(resolve,reject){
    

//   setTimeout(function(){
//     resolve("Mobile Delivered")
//   }, 2000)
// })

// myPromise.then(function(result){
//     console.log(result)
// })
///=======================================================================================================

// let promise = new Promise(function(resolve,reject){
//     resolve("Task Completed")
// })

// promise
// .then(function(result){
//     console.log(result)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log("Process completed")
// })

////=================================================================================================================

// async function name(){
//     return"Hello Anand"
// }
// name().then(function(result){
//     console.log(result)
// })


//====================================================================================================================

// function getData(){
//     return new  Promise(function(resolve,reject){
//         setTimeout(function()  {
//             resolve("Data received")
//         }, 3000);
//     })
// }

// async function showData (){
//     console.log("Please wait....")
//     let result = await getData()
//     console.log(result)
// }
// showData()


//==================================================================================================================

// function firstTask(){
//     return Promise.resolve("First Task Is Completed")

// }
// function secondTask(){
//     return Promise.resolve("Second Task Is Completed")

// }
// async function start(){
//     let result1=(await firstTask())
//     console.log(result1)

//     let result2=(await secondTask())
//     console.log(result2)

// }
// start()


//===================================================================================================================

// try{
//     console.log("Anand")
//     console.log(myname)
// }catch(error){
//     console.log("Something went wrong")
// }

///===================================================================================

// let age = 16

// try{
//     if(age < 18){
//         throw new Error("You are not eligible")
//     }
//     console.log("You are eligible")
// }catch(error){
//     console.log(error.message)
// }


//=====================================================================================

async function getUsers(){
    try{
        console.log("Loading users....")
        let respone= await fetch(
            "https://jsonplaceholder.typicode.com/users"
        )
        let users =await respone.json()
        console.log(users)
    } catch{
        console.log("Something went wrong")
        console.log(error.message)
    }
}
getUsers()