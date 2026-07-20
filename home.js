//Functions
// function greet(){
//     console.log('hello');

// }
// greet()
// Functions with parameters and arguments
// function greet(name)
// {
//     console.log('Hello' + name);



// }
// greet('Jishnu')// Function call cheyyuva greet use cheythitt
// function sum(a,b)
// {
//     console.log(a +b);
    
 // }
// sum(5,10)
 // function square(a){
//     console.log(a * b)
        
// }
// square(10)
//default parameter with functions
// function greet(name='gust'){
//     console.log('Hello' + name)
//// }
// // greet()
//function with return keyword
        
// function add(a,b){
// return a+b
// }
// console.log(add(10,5)); // evidya yann call cheythitt avidthekh return povu
// console.log(a);
// var a =10;// global  var --
//Hoisting
// greet()
//     function greet(){
//         console.log('hello')
// }
//Function Expression
// const namefun = function(){
//     console.log('In The java Script')
// }
// namefun()// this function is unoanymous function-- it have no name in function
// const greet = function(lan){
//     return lan
// }
// console.log(greet('Javascript'));
// const getsquare =function(a){
//     return a * a
// }
// console.log(getsquare(3));
//Arrow function
// let hello=()=> 'this is you'
// console.log(hello());
// let hello=()=>{
//     return 'this is you'

// } 
// console.log(hello());
//Arrow function with parameters
// let greet=(name)=>"Hello" + name
// console.log(greet('Appu'))
// let greet=name=>"Hello" + name
// console.log(greet('Appu'))
//Anonymous function shortest
// const greet = function(){
//     console.log("Hello,world!");
// };
// greet()
//eg:2
// const greet =()=>{
//     console.log("Hello,World");

// };
// greet();
//IIFE function
// (function (){
//     console.log('Alok')
// })();
// (()=>{
//     console.log("Arrow IIFE works too!");
// })();
//Callback function
function mainfunction(Callback){
    Callback()
    console.log('task start');
}
function greet(){
    console.log('hello');
}
mainfunction(greet);





