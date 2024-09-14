// Q1

for(var i=1; i<=5; i++){
    console.log("Hello World ");
    
}

// Q2
 for(var i=1; i<=10; i++){
    console.log(i);
    
}

// Q3

var table = prompt("enter any number");
var len = prompt("enter table length");
console.log("Multiplication table of "+table+" Length "+len);
for(i=1; i<=len; i++){
    console.log(`${table} x ${i} = ${table * i}`);
}

// Q4

var div = document.querySelector("div");

var arr = ["Nokia" , "samsung" , "apple" , "sony"];
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
    div.innerHTML += `${arr[i]} <br>`
}

// Q5

var div = document.querySelector("div");

var fruits = ["apple" , "mango" , "peach" , "pineapple" , "banana"];
for(var i=0; i<fruits.length; i++){
    console.log(fruits[i]);
    div.innerHTML += `${fruits[i]} <br>` 
}
for(var i=0; i<fruits.length; i++){
    div.innerHTML += `Element at index ${i} is ${fruits[i]} <br>`;
}

// Q6
var div1 = document.querySelector("#div-1");
var div = document.querySelector("div");


var arr =[]
var numofitems =+prompt("Enter number of items")
for(var i=0;i<numofitems;i++){
    arr[i] =prompt("Enter value for index "+i)
    div1.innerHTML += ("Number of items:" + numofitems + "<br> Items:<br>")
}

for(var j=0;j<arr.length;j++){
    div.innerHTML+= (arr[j]+"<br>")
}

// Q7

document.write("Counting <br><br>")
for(var i=1;i<=15;i++){
    document.write(i+" , ")
}


document.write("<br><br> Reverse counting<br><br>")
for(var i=10;i>0;i--){       
    document.write(i+" , ")
}

document.write("<br><br> Even <br><br>")
for(var i=0;i<=20;i=i+2){
    document.write(i+" , ")
}

document.write("<br><br> Odd <br><br>")
for(var i=1;i<=20;i=i+2){
    document.write(i+" , ")
}


document.write("<br><br> Series <br><br>")
for(var i=2;i<=20;i=i+2){
    document.write(i+"K , ")
}
 
// Q8

var arr =["cake", "apple","pie", "cookie", "chips", "patties"]
var userinp =prompt("Welcome to ABC bakery.What do you want to order sir/ma'am")
var flag =false
for(var i =0;i<arr.length;i++){
    if(userinp==arr[i]){
        flag =true
        alert(userinp+" is available at index "+i+" in our bakery...")
        break
    }
}
if(flag==false){
    alert("We are sorry."+userinp+" is not available in our bakery....")
}

// Q9

var arr =[24,53,78,91,12]
var max =arr[0]
for(var i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
document.write("Array items:"+arr+"<br> The largest number is "+max)

// Q10

var arr =[24,53,78,91,12]
var max =arr[0]
for(var i=0;i<arr.length;i++){
    if(arr[i]<max){
        max=arr[i]
    }
}
document.write("Array items:"+arr+"<br> The smallest number is "+max)

// Q11

var arr = [12,34,67,89,23];
var max = arr[0];
var min = arr[0];
for(var i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    for(var i=0;i<arr.length;i++){
        if(arr[i]<min){
        min=arr[i]
        }
    }
    document.write(`Array items: <br> ${arr} <br> The largest number in array is ${max} <br> and the smallest number in array is ${min}` )

// Q12
var div = document.querySelector("div")
for(var i=0;i<=100;i=i+5){
    div.innerHTML += `${i} <br>`
}

// Q13
var div = document.querySelector("div")
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
div.innerHTML += ("<table border='1px'><tr><th>Students</th><th>Scores</th></tr><tr><td>"+students[0]+"</td><td>"+scores[0]+"</td></tr><tr><td>"+students[1]+"</td><td>"+scores[1]+"</td></tr><tr><td>"+students[2]+"</td><td>"+scores[2]+"</td></tr><tr><td>"+students[3]+"</td><td>"+scores[3]+"</td></tr></table>")

Q14
var scores =[12, 45, 3, 22, 34, 50]
var userinp =prompt("Enter stop value")
var flag = false
for(var i=0;i<scores.length;i++){
    if(userinp==scores[i]){
        flag =true
        alert(i)
        break
     }
    for(var j = -1 ;j<=i;j++){
        document.write(scores[i]+" , ")
        break
    }
}
document.write(userinp)

// Q15
var arr = [ [1,2,3] , [4,5,6] , [7,8,9] ]
for(var i=0;i<1;i++){
    for(var j=1;j<2;j++){
        for(var c=2;c<3;c++){
            document.write(arr[i]+"<br>"+arr[j]+"<br>"+arr[c])
        }
    }
}

// Q16
var div = document.querySelector("div")
var num = prompt("Enter value")
for(num = num;num<=num*2;num =num-0.5){
  div.innerHTML += `${num} ,`
}

// Q17
var div = document.querySelector("div")
for(var i = 0; i<=20 ;i++){
    if(i%2==0){
        div.innerHTML += (i+" is even <br>")
    }
    else{
        div.innerHTML += (i+" is odd <br>")
    }
// }

// Q18
var div = document.querySelector("div")
for( var i = 1; i<=7 ; i++){
    if(i%2==0){

    }
    else{
        div.innerHTML += ("The odd integers are "+i+"<br>")
    }
}
var product =1*3*5*7
div.innerHTML += ("The product of odd integers from 1 to 7 is "+product)

// Q19
var div = document.querySelector("div")
var userInp =prompt("Enter initial number of stars")
for(var i = 1; i<=userInp ; i++){
    for(var j = i; j<=userInp ; j++){
        div.innerHTML += ("*")
    }
    div.innerHTML += ("<br>")
}

// Q20
var div = document.querySelector("div")
var userInp =prompt("Enter number of lines")
for(var i = 1; i<=userInp ; i++){
    for(var j = i; j<=userInp ; j++){
        div.innerHTML += ("*")
    }
    div.innerHTML += ("<br>")
}
}
