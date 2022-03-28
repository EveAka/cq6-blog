/*  
 Normal temperature (20-36), Above normal (37-40 degrees), Erratic (40- above)
*/

//let NORMAL_TEMP = 35;
let min_NORMAL_TEMP = 20;
let max_NORMAL_TEMP = 36;
let min_ABOVE_NORMAL = 37;
let max_ABOVE_NORMAL = 40;

let person = {
  NORMAL_TEMP : 35
};


if (person.NORMAL_TEMP >= min_NORMAL_TEMP && person.NORMAL_TEMP <= max_NORMAL_TEMP){
   console.log("You are good to go!");
}
else if (person.NORMAL_TEMP >= min_ABOVE_NORMAL && person.NORMAL_TEMP <= max_ABOVE_NORMAL){
  console.log("Check with a doctor, you are starting burn up!");

}
else {
      console.log("You need a doctor NOW!");


}




