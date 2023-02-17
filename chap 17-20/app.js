////****Chapter 17-20****////

///Question 15

// var arr=["Apple", "Motorolla", "Samsung", "Huawei"]
// document.write("<select>");
// for(i=0;i<arr.length;i++){
//     document.write("<option value>"+arr[i]+"</option>")
// }
// document.write("</select>")
//Question 1

//var array=[[]]

//Question 2

// var matrix=[

//     [0,1,2,3],[1,0,1,2],[2,1,0,1]

// ]
// console.log(matrix)

//Question 3

// for(var i=1;i<=10;i++){
//     document.write(i+"</br>")
// }

//Question 4

// var tablenum=prompt("Enter a table num");
// var tablelength=prompt("Enter table length")

// for(var i=1;i<=tablelength;i++){
//     document.write(tablenum+"x"+i+"="+tablenum*i+"</br>")
// }

//Question 5

// var fruits=["apple", "banana", "mango", "orange",
//     "strawberry"];
//     for (var i=0;i<fruits.length;i++){
//         document.write(fruits[i]+"</br>")
//     }

//Question 6
//a
// var Counting="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15"
// document.write("<h1>"+"Counting:"+"</h1>");
// for(var i=1;i<=15;i++){
//     document.write(i+",")
// }

//b
// for(var i=10;i>=1;i++){
//     document.write(i+",")
// }

//c
// document.write("<h1>"+"Even:"+"</h1>");
// for(i=0;i<=20;i++){
//     if(i%2===0)
//     document.write(i+",")
// }

//d
// document.write("<h1>"+"odd:"+"</h1>");
// for(i=1;i<=19;i++){
//     if(i%2!==0)
//     document.write(i+",")
// }

//e



//Question 7

// var cake=["cake", "apple pie", "cookie", "chips", "patties"]
// var usercake=prompt("Enter your cake")
// var flag=false
// for(i=0;i<cake.length;i++)
//     if(usercake===cake[i]){
//         flag=true
//         break;
//     }
// if(flag){
//     alert("true");
// }
// else{
//     alert("false")
// }

//Question 8

// var A = [24, 53, 78, 91, 12];

// var largest = A[0]; // initialize largest with the first element of the array

// // loop through the array
// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i]; // update largest if current element is greater
//   }
// }

// console.log(`The largest number in the array is: ${largest}`);


//Question 9

// var A = [24, 53, 78, 91, 12];

// var smallest = A[0]; // initialize smallest with the first element of the array

// // loop through the array
// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i]; // update smallest if smallest element is greater
//   }
// }

// console.log(`The largest number in the array is: ${smallest}`);


//Question 10

for(i=1;i<=100;i++){
    if(i%5===0){
        document.write(i+",")
    }
}