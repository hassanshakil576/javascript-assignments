// Q1 Create a block of code that you can use several times. 

// function sum(num1 , num2){
//     console.log(num1 + num2);
    
// }
// sum(5,7);
// sum(6,9);
// sum(8,7);
// sum(12,9);

// Q2 Write a function that displays current date & time in your browser.

// function date(){
//     var date= new Date();
//     console.log(date.toLocaleString())
// }
// date();

// Q3	Write a function that takes first & last name and then it greets the user using his full name.

// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");

// function greetuser(){
//     console.log(firstName + lastName);
    
// }
// // greetuser();

// Q4 Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// var num1 = +prompt("enter number 1");
// var num2 = +prompt("enter number 2");

// function sum(){
//     console.log(`The sum of two numbers is ${num1 + num2}`);
    
// }
// sum()

// Q5 Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calculator(num1, num2){
//        return num1 + num2;
// }
// var sum = calculator(40, 70);
// console.log(sum);

// function calculator(num1 , num2, operator){
//     var result;
//     if(operator=="+"){
//          return num1 + num2
//     }
//     if(operator=="-"){
//         return num1 - num2
//     }
//     if(operator=="*"){
//     return num1 * num2
//     }
//     if(operator=="/"){
//     return num1 / num2
// }
// return result;
// }
// var sum1 = calculator(20,50 ,'+');
// var sum2 = calculator(20,50 ,'-')
// var sum3 = calculator(20,50 ,'*');
// var sum4 = calculator(20,50 ,'/');

// console.log(` addition of 20 and 50 is ${sum1} , subtraction of 20 and 50 is ${sum2}, Multiplication of 20 and 50 is ${sum3}, Division of 20 and 50 is ${sum4}`);

// Q6 Write a function that squares its argument.

// function square(num){
//         return num*num;
//     }
//     var ans1=square(2);
//     var ans2=square(10);
//     var ans3=square(20);
//     console.log(ans1+", "+ans2+" ,"+ans3);

// Q7 Write a function that computes factorial of a number.
// var number = prompt("enter a number")
// var fact = 1;
// function factorial(n){
//          if(number==0){
//             console.log(`The factorial of ${number} is 1`);
//         }
//         else if(number< 0){
//             console.log(`The factorial of -ive numbers is not defined`);
//         }
//         else{
//             for(var i=1;i<=number;i++){
//                 fact = fact *i;
                
//             }
//             console.log(`the factorial of ${number} is ${fact}`);
//         }
// }

// factorial()

// Q8.	Write a function that take start and end number as inputs & display counting in your browser.

// function Counter(start,end){
//    var div = document.querySelector("#div-1");
// //    div.innerHTML="";
//    for(start; start<=end; start++){
//    div.innerHTML += start + "<br/>";
    
//    }
// }
// Counter(6 , 9);

// Q11 Write a function that accepts any number of arguments & find largest of the number

// function findLargest(...args) {
//         if (args.length === 0) {
//             return "No numbers provided";
//         }
//         return Math.max(...args);
//     }
    
//     console.log(findLargest(5, 10, 3, 8));  // Output: 10
//     console.log(findLargest(-5, -10, -3, -8));  // Output: -3
//     console.log(findLargest());  // Output: No numbers provided

// Q12.	Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// a.	Arguments as values
// b.	Arguments as variables

// function rectangel(width,height){
//  var area=width*height
//  console.log(area);
 
// }
// rectangel(400,300);

// Q13 	Write a function that receives an array & returns the sorted array.

// function sortArry(arry){
//        let result= arry.sort();
//        console.log(result)
// }
//  sortArry([45,86,96,75]);

//  Q14.	Write a function that takes numbers array, sums its elements & returns the sum.

// function sum(arry){
//     var result= arry.reduce((accumulator, currentValue) => accumulator+currentValue );
//     console.log(result)

// }
// sum([67,98,70,30]);

// Q16	Write a function that computes power of a number. E.g. 23 is 8.
// function powerNumber(){
//    var result= 2**3
//     console.log(result);
    
// }
// powerNumber()

// Q26
// function Age(birthyear, currentYear){
//     console.log("Age calculator");
// // var currentYear = 2024;
// // var birthyear = 2006;
// var age1 = 2024-2008;
// var age2 = age1-1;
// console.log("They are either " + age1 + " or " + age2 + " years old");
// }
// Age(2008 , 2024)

// Q27
// function calculateSupply(){
//     var favSnack = "chips";
//     var CurrentAge = 16;
//     var MaxAge = 24;
//     var snackQ=3;
//     var totalSnack=((MaxAge-CurrentAge)*snackQ);
//     console.log("You will need " + totalSnack + " " + favSnack + " to last you until the ripe old age of " + MaxAge + ".");
// }
// calculateSupply()

// Q28 Create 2 functions that calculate properties of a circle, using the definitions here.
// function calcCircumference(radius){
//     var circumference = 2*3.142*radius;
//     var area = 3.142*radius*radius;
//     console.log("Radius of a circle: " + radius);
//     console.log("The circumference is " + circumference);
//     console.log("The area is " + area);
// }
// calcCircumference(30)

// Q29

// function celsiusToFahrenheit(){
//     var celsius = 25;
//     var fahrenheitConversion= (celsius*9/5)+32;
//     console.log(celsius + "C" + " is " + fahrenheitConversion + "F");
// }
// celsiusToFahrenheit()

// function fahrenheitToCelsius(){
//     var fahrenheit=100;
//     var celsiusConversion=(fahrenheit-32)*5/9;
//     console.log(fahrenheit + "F" + " is " + celsiusConversion + "C");
// }
// fahrenheitToCelsius()








