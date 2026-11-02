// //==============================select with ID===========================

// let heading = document.getElementById("heading");
// console.dir(heading)
// console.log(heading)

// //==============================select with class========================


// let headings = document.getElementsByClassName("my class")
// console.dir(headings)

// let button = document.getElementsByClassName("myId")
// console.dir(button)
// console.log(button)

// //==============================select with tag name========================

// let  pera= document.getElementsByTagName("p")
// console.dir(pera)

// //==============================select with querySelector========================

// let element = document.querySelector("p")
// console.dir(element)

// //==============================select with querySelectorAll========================

// let  elements =document.querySelectorAll("p")
// console.dir(elements)


// let heading = document.getElementById("heading");

// heading.classList.add("red");

// heading.classList.remove("red");

// heading.classList.toggle("red");
// console.log(heading.classList.contains("red"));
// let message = document.getElementById("message");

///remove the element from the DOM=======================================

// message.remove();


///========create new element and add to the DOM========================

// let anand =document.getElementById("anand")

// let paragraph =document.createElement("p")
// paragraph.textContent ="this is a new paragraph"
// anand.appendChild(paragraph)





////===============================Event Listeners========================

// let btn = document.getElementById("btn")
// let message =document.getElementById("message")

// btn.addEventListener("click",function(){
//     message.textContent = "Button is Clicked!"
// })



////===============================Dom Practice==========================


let heading =document.getElementById("heading")
let changebtn =document.getElementById("changebtn")
let colorbtn =document.getElementById("colorbtn")
let addbtn =document.getElementById("addbtn")
let removebtn =document.getElementById("removebtn")
let container =document.getElementById("container")

///change text===============================

changebtn.addEventListener("click", function(){
    heading.textContent ="Hello I Am Anand Lashkan"
})


///change color===============================

 colorbtn.addEventListener("click",function(){
    heading.classList.toggle("red")
 })

 ///Add new Element===============================

 addbtn.addEventListener("click",function(){
    let paragraph =document.createElement("p")
    paragraph.textContent ="This is a new paragraph"
    container.appendChild(paragraph)
    paragraph.id="Mypara"
 })

 ///Remove Element===============================

 removebtn.addEventListener("click",function(){
    let paragraph =document.getElementById("Mypara")
    paragraph.remove()
 })