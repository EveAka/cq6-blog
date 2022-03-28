// condition statements
 /*if(expression){
     code goes here
 }*/


 const IG_MIN_AGE = 13;
 let susan = {
   age : 12
 };

 if(susan.age >= IG_MIN_AGE){
   console.log('congrats you can join instagram!');
 }

 //send exit message
 let oldiesAge = 45;
 if(oldiesAge >= 45 && oldiesAge <= 60){
   console.log('This aint for you , boomer!');
 }

//if else
if(susan.age >= IG_MIN_AGE){
   console.log('congrats you can join instagram!');
 } else{
   //this runs when the above doesnt fulfil condition.
   console.log('sorry, you cant watch reels yet.');
 }

 //else if

 if(susan.age >= IG_MIN_AGE){
   console.log('congrats you can join instagram!');
 }
 else if(susan.age == IG_MIN_AGE-1) {
   console.log('just one more year!');
 }
 else if(susan.age == IG_MIN_AGE-2){
   console.log('2 more years!');
 }
 else{
   console.log('please concetrate on school for now!');
 }

 //Switch case
 switch(susan.age){
   case susan.age >= IG_MIN_AGE:
      console.log('congrats you can join instagram!');


     break
   
   case susan.age == IG_MIN_AGE-1:
      console.log('just one more year!');


     break

   case susan.age == IG_MIN_AGE-2:
     console.log('2 more years!');
     break

     default:
     console.log('please concetrate on school for now!');  


 };

//ternary truth or false
// (condition) ? truth : false :

let ageGroup = (susan.age >= 18)? "Adult": "minor";
