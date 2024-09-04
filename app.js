// Q1) Write a script to greet your website visitor using JS alert box?
// alert("hello user!");

//Q2) Write a script to display following message on your web page?
// alert("Error! Please enter a valid password");

//Q3) Write a script to display following message on your web?
// alert("Welcome to JS land " + "\nHappy coding");

//Q4) Write a script to diplay following messages in sequence:
// alert("welcome to JS land");
// alert("Happy Coding!" + "\nprevent this page from creating additional dialogs");

//Q5)Generate the following message through browsers developers console:
//Just write this code in the console..
// alert("Hello...I can run JS through my web browser's console");

//Q6,7,8 Script addition in a html file done already.

// CHAP ONE DONE 


//CHAPTER NO 02 : Variables for Strings

//Q1) Declare a variable called username.
// var username;

// //Q2) Declare a variable called myNmae & assign to it a string that represents your Full Name.
// var MyName = "Hassan shakil";

//Q3) Write script to 
//a) Declare a JS variable, titled message.
//b) Assign "Hello World" to variable message.
//c) Display the message in a alert box.

// var message="Hello World";
// alert(message);

//Q4) Write a script to save students bio data in JS variables and show the data in alert boxes.
//  alert("Jhone Doe");
//  alert("15 years old");
//  alert("Certified Mobile Application Development");

//Q5) Write a script to display the following alert using one JS variable:
//  alert("PIZZA\n"+"PIZZ\n"+"PIZ\n"+"PI\n"+"P");

//Q6) Declare a variable called email and assign to it a string that represents your Email Address.Show the mentioned message in a alert box.

// var email = "hassanshakil3008gmail.com";
// alert(email);

 //Q7) Declare a variable called book and give it the value "A smarter way to learn JavaScript".Display the following message in alert box.

//  var book = "A Smarter Way To learn JS";
//  alert(book);

//   Q8) Write a script to display this in browser through JavaScript 

// console.log("Yah! I can write HTML content through JavaScript");

//Chapter No 02 ended!

// Chapter No 03 : Variables for Numbers

//Q1) Declare a variable called age and assign to it your age in an alert box.

// var age = 16;
// alert(age);

//Q2) Declare and intialize a variable to keep track of how many times a visitor has visited a web page.

// var webVisited = 17;
// alert("you have visited this site " + webVisited + " times");

//Q3) Declare a variable called birthtYear and assign it to your birth year.Show the following message in your browser:

// var birthYear = 2008;
// console.log("my birth year is " + birthYear);

// Q4

// var visitorName="Hassan";
// var quantity=7;
// var product="T-shirts";
// console.log(visitorName+" ordered "+quantity+" "+product+" on XYZ Store.");

// Chapter No 03  Ended!

// Chapter No 04 : Variable Names

//Q1) Declare 3 variables in one statment.

// var var1,var2,var3;

//Q2) Declare 5 legal and 5 illegal variable names.

//Legal Variable Names

// var my_name;
// var myname;
// var $my;
// var _my;
// var myName;

//Illegal Variable Names

// var 1myname;
// var @myname;
// var -myname;
// var .myname;
// var %myname;

//Q3) Display in your browser.
// console.log("Rules for naming JS variables");
// console.log("Variable names can only contain, numbers, $ and _. For example: $my_1stVariable");
// console.log("Variable must begin with a letter, $ or _. For example: $name,_name or name");
// console.log("Variable names are case sensitive");
// console.log("Variable names should not be JS keywords");

// Chapter No 4 Ended

// Chapter No 5 : Math Expressions

//Q5) Write a program that take two numbers and add them in a new variable.Show the result in your browser.
// var num1 = 4;
// var num2 = 8;
// var result = num1 + num2;
// console.log("sum of 4 and 8 is " + result);


//Q2) Repeat task1 for subtraction, multiplication, division and modulus.

var num1 = 6;
var num2 = 3;
var subtractionResult = num1 - num2;
var multiplicationResult = num1 * num2;
var divisionResult = num1 / num2;
var modulusResult = num1 % num2;
//subtraction
console.log("subtraction of 6 and 3 is " + subtractionResult);

//multiplication
console.log("multiplication of 6 and 3 is " + multiplicationResult);

//division
console.log("division of 6 and 3 is " + divisionResult);

//modulus
console.log("modulus of 6 and 3 is " + modulusResult);

//Q3) Do the following using JS Mathematic Expressions
//a) Declare a variable
//b) Show the value of variable in your browser like "Value after variable declaration is:??".
//c) Initialize the variable with some number.
//d) Show the value of variable in your browser like "Initial value: 5".
//e) Increament the variable.
//f) Show the value of variable in your browser like "Value after increament is: ??"
//g) Add 7 to the variable.
//h) Show the value of variable in your browser like "value after addition is: 13".
//i) Decrement the variable.
//j) Show the value of variable in your browser like "Value after decrement is: 12"'
//k) Show the remainder after dividing the variable value by 3.
//l) Output: "The remainder is : 0".


//a)
// var username;

//b
// console.log("Value after variable declaration is undefined");

//c
// var num1 = 5;

// //d
// console.log("initial value: " + num1);

// //e)
// num1++;

// //f)
// console.log("value after increment is " +num1);

// //g
// num1+=7;

// //h
// console.log("Value after addition is: " +num1);

// //i
// num1--;

// //j
// console.log("Value after decrement is: " +num1);

// //k
// num1%=3;  //num1=num1%3

// //l
// console.log("The remainder is: " +num1);

// //Q4
// var oneTicket = 600;
// var numofTickets = 5; 
// console.log("Total cost to buy "+numofTickets+" tickets to a movie is " +oneTicket+"PKR");

// //Q5
// //Table of 4
// console.log("Table of 4");
// var num=4;
// console.log("4x1=" + num*1);
// console.log("4x2=" + num*2);
// console.log("4x3=" + num*3);
// console.log("4x4=" + num*4);
// console.log("4x5=" + num*5);
// console.log("4x6=" + num*6);
// console.log("4x7=" + num*7);
// console.log("4x8=" + num*8);
// console.log("4x9=" + num*9);
// console.log("4x10=" + num*10);

// //Q6

// var celsius = 25;
// var fahrenheitConversion= (celsius*9/5)+32;
// var fahrenheit=70;
// var celsiusConversion=(fahrenheit-32)*5/9;
// console.log(celsius + "C" + " is " + fahrenheitConversion + "F");
// console.log(fahrenheit + "F" + " is " + celsiusConversion + "C");

// //Q7
// var itemonePrice = 650;
// var itemtwoPrice = 100;
// var orderQuantityItemOne = 3;
// var orderQuantityItemTwo = 7;
// var shippingCharges = 100;
// var Total = itemonePrice*3 + itemtwoPrice*7 + shippingCharges;
// console.log("Price of item 1 is " + itemonePrice);
// console.log("order quantity of Item one is " + orderQuantityItemOne);
// console.log("Price of item 2 is " + itemtwoPrice);
// console.log("order quantity of Item two is " + orderQuantityItemTwo);
// console.log("shipping charges " + shippingCharges);
// console.log("Total cost of your order is " + Total);

// //Q8
// var TotalMarks = 980;
// var MarksObtained = 804;
// var Percentage = MarksObtained/TotalMarks*100;
// console.log("Total Marks: " + TotalMarks);
// console.log("MarksObtained: " + MarksObtained);
// console.log("percentage: " + Percentage + "%" );

// //Q9
// var Dollars = 10;
// var Riyal = 25;
// var pkr = (10*104.80)+(25*28)
// console.log("Total currency in pkr: " + pkr);

//Q10
var num1=1;
var results = num1+5;
results*=10;
results/=2;
console.log(results);

//Q11
console.log("Age calculator");
var currentYear = 2024;
var birthyear = 2006;
var age1 = 2024-2006;
var age2 = age1-1;
console.log("They are either " + age1 + " or " + age2 + " years old");

//Q12
var radius = 20;
var circumference = 2*3.142*radius;
var area = 3.142*radius*radius;
console.log("Radius of a circle: " + radius);
console.log("The circumference is " + circumference);
console.log("The area is " + area);

//Q13
var favSnack = "chips";
var CurrentAge = 16;
var MaxAge = 24;
var snackQ=3;
var totalSnack=((MaxAge-CurrentAge)*snackQ);
console.log("You will need " + totalSnack + " " + favSnack + " to last you until the ripe old age of " + MaxAge + ".");









 













