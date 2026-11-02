// ///=====================================Practice Deliverable:====================================================


// ///=========Quation NO.1

// function EvenorOdd(num){
//     if(num%2 === 0){
//       return "Even Number"  
//     }else{
//         return "Odd Number"
//     }

// }

// console.log(EvenorOdd(27))
// console.log(EvenorOdd(29))
// console.log(EvenorOdd(28))
// console.log(EvenorOdd(8))

// //=================Quation NO.2

// function largest(x,y){
//     if ( x > y ){
//         return x
//     }else if(y > x){
//         return y
//     }else{
//         return "Both are equal"
//     }
// }
// console.log(largest(20,80))
// console.log(largest(100,50))
// console.log(largest(6,6))
// console.log(largest(10,10))

// //=====================Quation NO.3

// function isValidAge(age){
//     return age >= 18 && age <= 64
// }
// console.log(isValidAge(40))
// console.log(isValidAge(90))
// console.log(isValidAge(50))
// console.log(isValidAge(10))

// //=====================Quation NO.4

// let numbers = [10, 20, 30];

// console.log(numbers[1])
// console.log(numbers[5])


// //======================Quation NO.5

// function Reverse(str){
//     return str.split("") . reverse().join("")
// }
// console.log(Reverse("hello"))

// ///==================Quation NO.6

// function Factorial(n){
//     let result= 1

//     for (let i = 1; i <=n; i++){
//         result = result*i
//     }
//     return result
// }
//  console.log(Factorial(6))


// ////========================Quation NO.7

// function palindrome(str){
//     let reversed =str.split("").reverse().join("")

//     return str===reversed
// }
// console.log(palindrome("Anand"))
// console.log(palindrome("Ankit"))
// console.log(palindrome("madam"))



// ///=======================Quation NO.8

// function CalculateGrade(marks){
//     if ( marks < 0 || marks > 100){
//         return "invalid marks"
    
//     }else if (marks>=90){
//         return "A"
//     }else if (marks>=80){
//         return "B"
//     }else if (marks>=70){
//         return "C"
//     }else if (marks>=60){
//         return "D"
//     }else{
//         return "Fail"
//     }
// }

// console.log(CalculateGrade(91))
// console.log(CalculateGrade(85))
// console.log(CalculateGrade(75))
// console.log(CalculateGrade(69))
// console.log(CalculateGrade(35))
// console.log(CalculateGrade(110))

// ///=======================Quation NO.9

// function add(a,b){
//     return a + b 
// }
// console.log(add(8,6))


// //======================Quation NO.10


// function isPrime(num){
//     if (num <= 1){
//         return false
//     }

// for (let i = 2; i<num; i++){
//     if (num % i === 0){
//         return false
//     }
// }
// return true
// }

// console.log(isPrime(23))
// console.log(isPrime(90))
// console.log(isPrime(37))
// console.log(isPrime(239))
// console.log(isPrime(82))


// //=====================

// let score = 79;
// if (score >= 90  && score <= 100){
//     grade = "A";
// }else if (score >=70 && score <=89){
//     grade = "B";

// } else if (score >=60 && score <=69){
//     grade ="C";
// }else if ( score >=50 && score <= 59){
// grade = "F"
// }else if (score >= 0 && score <= 49){
//     grade = "F";
// }

// console.log(" according to your score, your grade was :"  , grade);

//====================Prime Number

let number = 18
let isPrime = true 

for (let i = 2; i <number; i++){
   if( number % 2 === 0){
    isPrime = false
    break
}
}
if (isPrime===true){
    console.log("Prime Number")
}else {
    console.log("Not a prime number")

}

