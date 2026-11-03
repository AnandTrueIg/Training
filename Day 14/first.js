// // ////=======================localStorage========================////

// // ///========== Save data using setItem() method =============////

// // localStorage.setItem("key","value")
// // localStorage.setItem("city","Maksi")

// // ///========== Get data using getItem() method =============////

// // let city = localStorage.getItem("city")
// // console.log(city)

// // //========== Remove data using removeItem() method =============////

// // // localStorage.removeItem("city")
// // // console.log(localStorage.getItem("city"))

// // ///========== Clear all data using clear() method =============////

// // // localStorage.clear()
// // // console.log(localStorage.getItem("key"))


// // ////================update data using setItem() method =============////
// // localStorage.setItem("city","Indore")
// // console.log(localStorage.getItem("city"))

// // ////=====How to store an array or object in localStorage============////

// // let user ={
// //     name:"Anand",
// //     age:18,
// //     city:"Maksi",
// //     course:"JavaScript"
// // }

// // localStorage.setItem(
// //     "user",JSON.stringify(user)

// // )
// // console.log(user)
// // localStorage.setItem("user",JSON.parse(localStorage.getItem("user")))


// ///=======================project========================////
// function showName(){
//     let name=localStorage.getItem("username")
//     if(name!==null){
//         document.getElementById("displayName").textContent = 
//         "welcome" + name

//     }
// }

// function saveName(){
//     let name =document.getElementById("username").value
//     localStorage.setItem("username",name)
//   showName()
// }

// function removeName(){
//     localStorage.removeItem("username")
//     document.getElementById("displayName").textContent = ""
//     document.getElementById("username").value =""
// }

// showName()


// ////===========================================================================================================////
// localStorage.setItem("name","Anand")
// localStorage.setItem("age",18)

// let age =localStorage.getItem("age")
// console.log(age)
// console.log(typeof age)
// console.log(age + 5)
// let age1 =Number(localStorage.getItem("age"))
// console.log(typeof age1)
// console.log(age1+ 5)


// ////==========================sessionStorage=======================================////

// sessionStorage.setItem("username", "Anand");

// let username = sessionStorage.getItem("username");

// console.log(username);

