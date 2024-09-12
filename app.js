// // Q1) Write a script to greet your website visitor using JS alert box?
// // alert("hello user!");

// //Q2) Write a script to display following message on your web page?
// // alert("Error! Please enter a valid password");

// //Q3) Write a script to display following message on your web?
// // alert("Welcome to JS land " + "\nHappy coding");

// //Q4) Write a script to diplay following messages in sequence:
// // alert("welcome to JS land");
// // alert("Happy Coding!" + "\nprevent this page from creating additional dialogs");

// //Q5)Generate the following message through browsers developers console:
// //Just write this code in the console..
// // alert("Hello...I can run JS through my web browser's console");

// //Q6,7,8 Script addition in a html file done already.

// // CHAP ONE DONE 


// //CHAPTER NO 02 : Variables for Strings

// //Q1) Declare a variable called username.
// // var username;

// // //Q2) Declare a variable called myNmae & assign to it a string that represents your Full Name.
// // var MyName = "Hassan shakil";

// //Q3) Write script to 
// //a) Declare a JS variable, titled message.
// //b) Assign "Hello World" to variable message.
// //c) Display the message in a alert box.

// // var message="Hello World";
// // alert(message);

// //Q4) Write a script to save students bio data in JS variables and show the data in alert boxes.
// //  alert("Jhone Doe");
// //  alert("15 years old");
// //  alert("Certified Mobile Application Development");

// //Q5) Write a script to display the following alert using one JS variable:
// //  alert("PIZZA\n"+"PIZZ\n"+"PIZ\n"+"PI\n"+"P");

// //Q6) Declare a variable called email and assign to it a string that represents your Email Address.Show the mentioned message in a alert box.

// // var email = "hassanshakil3008gmail.com";
// // alert(email);

//  //Q7) Declare a variable called book and give it the value "A smarter way to learn JavaScript".Display the following message in alert box.

// //  var book = "A Smarter Way To learn JS";
// //  alert(book);

// //   Q8) Write a script to display this in browser through JavaScript 

// // console.log("Yah! I can write HTML content through JavaScript");

// //Chapter No 02 ended!

// // Chapter No 03 : Variables for Numbers

// //Q1) Declare a variable called age and assign to it your age in an alert box.

// // var age = 16;
// // alert(age);

// //Q2) Declare and intialize a variable to keep track of how many times a visitor has visited a web page.

// // var webVisited = 17;
// // alert("you have visited this site " + webVisited + " times");

// //Q3) Declare a variable called birthtYear and assign it to your birth year.Show the following message in your browser:

// // var birthYear = 2008;
// // console.log("my birth year is " + birthYear);

// // Q4

// // var visitorName="Hassan";
// // var quantity=7;
// // var product="T-shirts";
// // console.log(visitorName+" ordered "+quantity+" "+product+" on XYZ Store.");

// // Chapter No 03  Ended!

// // Chapter No 04 : Variable Names

// //Q1) Declare 3 variables in one statment.

// // var var1,var2,var3;

// //Q2) Declare 5 legal and 5 illegal variable names.

// //Legal Variable Names

// // var my_name;
// // var myname;
// // var $my;
// // var _my;
// // var myName;

// //Illegal Variable Names

// // var 1myname;
// // var @myname;
// // var -myname;
// // var .myname;
// // var %myname;

// //Q3) Display in your browser.
// // console.log("Rules for naming JS variables");
// // console.log("Variable names can only contain, numbers, $ and _. For example: $my_1stVariable");
// // console.log("Variable must begin with a letter, $ or _. For example: $name,_name or name");
// // console.log("Variable names are case sensitive");
// // console.log("Variable names should not be JS keywords");

// // Chapter No 4 Ended

// // Chapter No 5 : Math Expressions

// //Q5) Write a program that take two numbers and add them in a new variable.Show the result in your browser.
// // var num1 = 4;
// // var num2 = 8;
// // var result = num1 + num2;
// // console.log("sum of 4 and 8 is " + result);


// //Q2) Repeat task1 for subtraction, multiplication, division and modulus.

// var num1 = 6;
// var num2 = 3;
// var subtractionResult = num1 - num2;
// var multiplicationResult = num1 * num2;
// var divisionResult = num1 / num2;
// var modulusResult = num1 % num2;
// //subtraction
// console.log("subtraction of 6 and 3 is " + subtractionResult);

// //multiplication
// console.log("multiplication of 6 and 3 is " + multiplicationResult);

// //division
// console.log("division of 6 and 3 is " + divisionResult);

// //modulus
// console.log("modulus of 6 and 3 is " + modulusResult);

// //Q3) Do the following using JS Mathematic Expressions
// //a) Declare a variable
// //b) Show the value of variable in your browser like "Value after variable declaration is:??".
// //c) Initialize the variable with some number.
// //d) Show the value of variable in your browser like "Initial value: 5".
// //e) Increament the variable.
// //f) Show the value of variable in your browser like "Value after increament is: ??"
// //g) Add 7 to the variable.
// //h) Show the value of variable in your browser like "value after addition is: 13".
// //i) Decrement the variable.
// //j) Show the value of variable in your browser like "Value after decrement is: 12"'
// //k) Show the remainder after dividing the variable value by 3.
// //l) Output: "The remainder is : 0".


// //a)
// // var username;

// //b
// // console.log("Value after variable declaration is undefined");

// //c
// // var num1 = 5;

// // //d
// // console.log("initial value: " + num1);

// // //e)
// // num1++;

// // //f)
// // console.log("value after increment is " +num1);

// // //g
// // num1+=7;

// // //h
// // console.log("Value after addition is: " +num1);

// // //i
// // num1--;

// // //j
// // console.log("Value after decrement is: " +num1);

// // //k
// // num1%=3;  //num1=num1%3

// // //l
// // console.log("The remainder is: " +num1);

// // //Q4
// // var oneTicket = 600;
// // var numofTickets = 5; 
// // console.log("Total cost to buy "+numofTickets+" tickets to a movie is " +oneTicket+"PKR");

// // //Q5
// // //Table of 4
// // console.log("Table of 4");
// // var num=4;
// // console.log("4x1=" + num*1);
// // console.log("4x2=" + num*2);
// // console.log("4x3=" + num*3);
// // console.log("4x4=" + num*4);
// // console.log("4x5=" + num*5);
// // console.log("4x6=" + num*6);
// // console.log("4x7=" + num*7);
// // console.log("4x8=" + num*8);
// // console.log("4x9=" + num*9);
// // console.log("4x10=" + num*10);

// // //Q6

// // var celsius = 25;
// // var fahrenheitConversion= (celsius*9/5)+32;
// // var fahrenheit=70;
// // var celsiusConversion=(fahrenheit-32)*5/9;
// // console.log(celsius + "C" + " is " + fahrenheitConversion + "F");
// // console.log(fahrenheit + "F" + " is " + celsiusConversion + "C");

// // //Q7
// // var itemonePrice = 650;
// // var itemtwoPrice = 100;
// // var orderQuantityItemOne = 3;
// // var orderQuantityItemTwo = 7;
// // var shippingCharges = 100;
// // var Total = itemonePrice*3 + itemtwoPrice*7 + shippingCharges;
// // console.log("Price of item 1 is " + itemonePrice);
// // console.log("order quantity of Item one is " + orderQuantityItemOne);
// // console.log("Price of item 2 is " + itemtwoPrice);
// // console.log("order quantity of Item two is " + orderQuantityItemTwo);
// // console.log("shipping charges " + shippingCharges);
// // console.log("Total cost of your order is " + Total);

// // //Q8
// // var TotalMarks = 980;
// // var MarksObtained = 804;
// // var Percentage = MarksObtained/TotalMarks*100;
// // console.log("Total Marks: " + TotalMarks);
// // console.log("MarksObtained: " + MarksObtained);
// // console.log("percentage: " + Percentage + "%" );

// // //Q9
// // var Dollars = 10;
// // var Riyal = 25;
// // var pkr = (10*104.80)+(25*28)
// // console.log("Total currency in pkr: " + pkr);

// //Q10
// var num1=1;
// var results = num1+5;
// results*=10;
// results/=2;
// console.log(results);

// //Q11
// console.log("Age calculator");
// var currentYear = 2024;
// var birthyear = 2006;
// var age1 = 2024-2006;
// var age2 = age1-1;
// console.log("They are either " + age1 + " or " + age2 + " years old");

// //Q12
// var radius = 20;
// var circumference = 2*3.142*radius;
// var area = 3.142*radius*radius;
// console.log("Radius of a circle: " + radius);
// console.log("The circumference is " + circumference);
// console.log("The area is " + area);

// //Q13
// var favSnack = "chips";
// var CurrentAge = 16;
// var MaxAge = 24;
// var snackQ=3;
// var totalSnack=((MaxAge-CurrentAge)*snackQ);
// console.log("You will need " + totalSnack + " " + favSnack + " to last you until the ripe old age of " + MaxAge + ".");



// CONDITIONAL STATEMENTS

// Q1 Write a program to check whether the given input number is divisible by 3 or else shows a message (number is not divisible by 3)

// var num = prompt("enter a number");


//     if(num%3==0){
//         alert("number is divisible by 3");
//     }
//     else{
//        alert("number is not divisible by 3");
//     }

// Q2 Write a program to check whether the given input is an odd or even number

// var num = prompt("Enter a number");

// if(num%2==0){
//     alert("this number is even")
// }
// else{
//     alert("this number is odd")
// }

// Q3 write an if/else statement with the following condition: If the variable age is greater than 18, output "old enough", otherwise output "Too young".

// var age = prompt("enter your age");

// if(age >= 18){
//     console.log("old enough");
    
// }else{
//     console.log("too young");
    
// }

// Q4 

// var name = "Hassan";
// var username = prompt("Enter your name");

// if(name==username){
//     alert("Oh!What a coincidence.Your name is same as mine...")
// }
// else{
    
// }

// Q5

// var num = prompt("enter a number");


//     if(num%3==0){
//         alert("number is divisible by 3");
//     }
//     else{
//        alert("number is not divisible by 3");
//     }


// Q6
// var input =prompt("Enter")
// var firstAplha = input.slice().toUpperCase()
// var secondAplha = input.slice().toLowerCase()
// if(input>=0){
//     alert("It is a number")
// }
// else if(input==firstAplha){
//     alert("It is a upper case")
// }
// else {
//     alert("It is a lower case")
// }

// Q7
// var first =+prompt("Enter first number")
// var second =+prompt("Enter second number")
// var operator =prompt("Enter operator")
// if(operator=="+"){
//     alert(first+second)
// }
// else if(operator=="-"){
//     alert(first-second)
// }
// else if(operator=="*"){
//     alert(first*second)
// }
// else if(operator=="/"){
//     alert(first/second)
// }
// else if(operator=="%"){
//     alert(first%second)
// }
// else {
//     alert("Please enter input")
// }

// Q8
// var time =prompt("Enter time according to 24 hrs format")
// if(time> 6){
//     alert("Good night")
// }
// else if(time<12){
//     alert("Good Morning")
// }
// else if(time<16){
//     alert("Good afternoon")
// }
// else if(time<19){
//     alert("Good evening")
// }
// else if(time<24){
//     alert("Good night")
// }

// Q9

// var year = +prompt("Enter year");
// if(year==2027 || year==2031){
//     alert("It is a leap year")
// }
// else{
//     alert("It is not a leap year")
// }

// Q10
// var password = "karachi";
// var enterPassword = prompt("enter your password");
// if(password == enterPassword){
//     alert("Correct! Password")
// }
// else if(password != enterPassword){
//     alert("incorrect passowrd")
// }
// else{
//     alert("please enter your password")
// }

// Q11
// var firstName = "Ali";
// if (firstName === "Fahad") {
// document.write("Hello Fahad!");
// }
// else{
//     document.write("You are not Fahad")
// }

// Q12
// var hour = 13;
// if (hour < 18) {
// console.log(greeting = "Good day");
// }
// else {
// console.log(greeting = "Good evening");
// }

// Q13
// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter a number");
// if(num1>num2){
//     alert(+num1 + "is larger than " +num2)
// }
// else if(num1<num2){
//     alert(+num2 + "is larger than " +num1)
// }
// else{
//     alert("bothe the numbers are equal")
// }

// Q14
// var num1 = +prompt("enter a number");
// if(num1>0){
//     alert("the number is positive")
// }
// else if(num1<0){
//     alert("the number is negative");
// }
// else{
//     alert("the number is zero")
// }

// Q15

// var hour = +prompt("What the current hour is in 24 hours format");
// if(hour<6){
//     alert("sorry you will have to wait ya zyada bhook lagi hai tou apne liye bazaar se le aya")
// }
// else if(hour<9){
//     alert("breakfast is served")
// }
// else if(hour<13){
//     alert("Time for lunch")
// }
// else if(hour<17){
//     alert("Its dinner time")
// }
// else{
//     alert("please enter the hour within 17")
// }

// Q16
// var enter =prompt("Enter")
// if(enter>=0){
//     alert("number")
// }
// else if(enter=="true" || enter=="false"){
//     alert("boolean")
// }
// else {
//     alert("string")
// }

// Q17
// var enter = prompt("enter a letter");
// if(enter== "a"){
//     alert("True! its a wovel");
// }
// else if(enter== "e"){
//     alert("True! its a wovel");
// }
// else if(enter== "i"){
//     alert("True! its a wovel");
// }
// else if(enter== "o"){
//     alert("True! its a wovel");
// }
// else if(enter== "u"){
//     alert("True! its a wovel");
// }
// else{
//     alert("false! not a wovel");
// }

// Q18
// if(10!=8){
//     alert("true")
// }

// Q19
// var month =+prompt("Number of month")
// if(month==1){
//      alert("January")
// }
// else if(month==2){
//     alert("Feburary")
// }
// else if(month==3){
//     alert("March")
// }
// else if(month==4){
//     alert("April")
// }
// else if(month==5){
//     alert("May")
// }
// else if(month==6){
//     alert("June")
// }
// else if(month==7){
//     alert("July")
// }
// else if(month==8){
//     alert("August")
// }
// else if(month==9){
//     alert("September")
// }
// else if(month==10){
//     alert("October")
// }
// else if(month==11){
//     alert("November")
// }
// else if(month==12){
//     alert("December")
// }
// else{
//     alert("Invalid month no.")
// }



// Q20

// var age = +prompt("enter your age");


// if(age<18){
//     alert("Too young")
// }
// else{
//     alert("old enough")
// }


// "ARRAY"

// Q1-Q7
// var literalNotation = [];
// var objectNotation = new Array();
// var strArr = ["Hassan" , "Shakil"];
// var numarr = [2];
// var booleanarr = [true];
// var mixedArr = ["Hassan" , 5 , true];
// var mobileNetworks = ["Jazz" , "Telenor" , "ufone" , "warid" , "zong"];

// Q8
// var arr =["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","phD"];
// document.write(`<h1>QUALIFICATIONS:</h1> 1) ${arr[0]}<br> 2) ${arr[1]}<br>3) ${arr[2]}<br>4) ${arr[3]}<br>5) ${arr[4]}<br>6) ${arr[5]}<br>7) ${arr[6]}<br>8) ${arr[7]}<br>`)

// Q9
// var arr = [];
// arr.push("Avengers: Age of Ultron");
// arr.push("Spectre");
// arr.push("Jurassic world");
// arr.push("Inside out");
// document.write(`<h1>Top movies of 2015</h1>1) ${arr[0]} <br>2) ${arr[1]} <br>3) ${arr[2]} <br>4) ${arr[3]}<h1>Length of array:${arr.length}</h1>`)

// Q10
// var cars =["Bmw","Mercedes","Audi","G-Wagon"]
// document.write(`<h1>Favourite cars</h1>${cars}<br>First index of the array:0 <br> Car at first index of the array:${cars[0]}<br>Last index of the array:3 <br>Car at last index of the array: ${cars[3]} `)

// Q11

// var studentNames = ["micheal" , "John" , "Tony"];
// var scores = [320 , 230 , 480];
// var percent1 = 320*100/500;
// var percent2 = 230*100/500;
// var percent3 = 480*100/500;
// document.write(`Score of ${studentNames[0]} is ${scores[0]} .Percentage:${percent1}% <br>Score of ${studentNames[1]} is ${scores[1]} .Percentage:${percent2}% <br>Score of ${studentNames[2]} is ${scores[2]} .Percentage:${percent3}% <br>`)

// Q12
// part "a"
// var colours = ["black" , "blue" , "white" , "purple"];
// var prom = prompt("enter a colour");
// colours.unshift(prom)
// console.log(colours);

// part "b"
// var colours = ["black" , "blue" , "white" , "purple"];
// var prom = prompt("enter a colour");
// colours.push(prom)
// console.log(colours);

// part "c"
// var colours = ["black" , "blue" , "white" , "purple"];
// var color1 =prompt("Enter color");
// var color2 =prompt("Enter one more color");
// colours.unshift(color1)
// colours.unshift(color2);
// console.log(colours);

// part "d"
// var colours = ["black" , "blue" , "white" , "purple"];
// colours.shift()
// console.log(colours);

// part "e"
// var colours = ["black" , "blue" , "white" , "purple"];
// arr.splice(add,0,add2);
// colours.pop()
// console.log(colours);

// part "f"
// var colours = ["black" , "blue" , "white" , "purple"];
// var add =prompt("Enter index no. at which you want to add color")
// var add2 =prompt("Enter color name what you want to add")
// colours.splice(add,0,add2);
// console.log(colours.splice(add,add2));

// part "g"
// var colours = ["black" , "blue" , "white" , "purple"];
// var delete =prompt("Enter index no. at which you want to add color")
// var delete2 =prompt("Enter color name what you want to add")
// colours.splice(delete,delete2);
// console.log(colours.splice(delete,delete2));

// Q13

// var studentScores = [320 , 230 , 480 ,120];
// console.log(studentScores.sort());

// Q14
// var fruits = ["strawberry", "apple", "orange", "banana"]
// console.log(fruits.sort());

// Q15
// var cityNames = ["Karachi" , "lahore" , "Islamabad" , "quetta" , "Peshawar"];
// var selectedCities = cityNames.slice(2 , 4);
// console.log(selectedCities);

// Q16
// var arr = ["this" , "is" , "my" , "cat"];
// console.log(arr.join(" "));

// Q17
// var arr = [];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Pointer");
// arr.push("Monitor");
// document.write(`Devices:<br>${arr}<br>Out:<br>${arr[0]}<br>Out:<br>${arr[1]}<br>Out:<br>${arr[2]}<br>Out:<br>${arr[3]}`)

// Q18
// var arr = [];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Pointer");
// arr.push("Monitor");
// document.write(`Devices:<br>${arr}<br>Out:<br>${arr[3]}<br>Out:<br>${arr[2]}<br>Out:<br>${arr[1]}<br>Out:<br>${arr[0]}`)

// Q19
// var arr =["Apple","Samsung","Motorolla","Nokia","Sony","Haier"]
// document.write(`<select><option>${arr[0]}</option><option>${arr[1]}</option><option>${arr[2]}</option><option>${arr[3]}</option><option>${arr[4]}</option><option>${arr[5]}</option></select>`)

// Q20-Q21
// var arr =[["0","1","2","3"],["1","0","1","2"],["2","1","0","1"]]
// document.write(arr[0]+"<br>"+arr[1]+"<br>"+arr[2])














 













