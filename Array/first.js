// //=========================================================Arrays=================================================

// let fruits =["Apple","Mango","Orange","grapes"]

// console.log(fruits)
// console.log(fruits.length)
// console.log(fruits[0])
// console.log(fruits[1])

// //##==============push method====================
// let fruit =["Apple","Mango",]

// fruit.push("Lichi")
// console.log(fruit)

// //##===============pop method=====================

// let Fruit =["Apple","Mango","Lichi"]

// Fruit.pop()
// console.log(Fruit)

// ///##================For Each method===============

// let heros =["Ironman","Thor","Hulk","Spiderman"]

// heros.forEach(function(hero){
//     console.log(hero)
// })

// ///=================================================OBJECT==================================================================

// let student = {
//     name: "Anand",
//      age: 18,
//     city: "Maksi",
//   course: "JavaScript",
// }
// console.log(student)
// console.log(student.name)
// console.log(student["age"])

// //### How to change values

// student.age=19
// console.log(student.age)
// console.log(student)

//================================================Array of Object===========================================================

// let student =[
//     {
//         name:"Anand",
//         age:  18
//     },
//     {
//         name:"Krishna",
//         age: 19
//     },
//     {
//         name:"Ankit",
//         age: 20
//     }

// ]

// console.log(student.length)
// console.log(student[0].name)
// console.log(student[0].age)
// console.log(student[1].name)
// console.log(student[1].age)
// console.log(student[2].name)
// console.log(student[2].age)

//================Use a loop with an array============================
//###========for loop
// let cities = ["Maksi","Jhonkar","Dewas","Indore"]
// for (let i= 0; i<cities.length;i++){
//     console.log(cities[i])
// }
//###========for of loop

    // let cities = ["Maksi","Jhonkar","Dewas","Indore"]
    // for (let city of cities){
    //     console.log(city)
    // }


//===================================================Map()=============================================================
 
// let number= [1,2,3,4,5]

// let val = number.map(function(values){
//     return values * 2

// })
// console.log(val)


///================Another example using objects============

// let student =[
//     {name: "Anand",age:18},
//     {name: "Ankit",age:19},
//     {name: "Krishna",age:20}
// ]

// let Name = student.map(function(print){
//     return print.name
// })
// console.log(Name)

//##=======================filter()================================================

// const numbers = [10,20,30,40,50,60,70,80]

// const result = numbers.filter(function(number){
//     return number >25 && number <75
// })
// console.log(result)


//##=====================find()====================================

// const numbers = [10,20,30,40,50,60]

// const result = numbers.find(function(number){
//     return number >25 
// })
// console.log(result)

//=====================

// const numbers = [10,20,30,40,50,60]

// const total = numbers.reduce(function(name, number) {
//     return name + number;
// },0);

// console.log(total);



//==============================================Pratice========================================================
///============Quation NO.1=============


// let num= [1,2,3,4,5]

// for (let i = 0; i < num.length; i++){
//     console.log(num[i])
// }



//=============Quation NO.2

// let num= [1,2,3,4,5,6]

// let result = num.map(function(val){
//     return val*3
// })
// console.log(result)

//==============Quation NO.3

// let Filter =[1,2,3,4,5,6,7,15,18]

// let result = Filter.filter(function(val){
//     return val % 2 !== 0
// })
// console.log(result)

//==============Quation NO.4

// let nums = [10,20,30,40,50,60,70,80,90]

// let final = nums.find(function(num){
//     return num > 50

// })
// console.log(final)

//=================Quation NO.5

let score = [
    {name:"Anand", marks:90},
    {name:"Ankit", marks:75},
    {name:"Krishna", marks:50}
]

let finalresult =score.filter(function(val){
    return val.marks >= 65
})
console.log(finalresult)



