const name = 'Nadun';
let age = 24;
const hoshobbies = true;

age = 30

const summarizeUser =  (Usernameis,Userageis,Userhobbieis)=>{
    return(
        'Name is ' + Usernameis + 'age is ' +age+ 'haing the hobbies ' +hoshobbies
    );

}
//use of arrow functions 

// const add=(a,b)=>{
//     return a+b;
// };

const add=(a,b)=>(a+b);
//if only having the return statement, then this can be wirtten as the arrow function

const addOne = (a) =>  (a+1);

//havin the random without the arguments 
const addRandom=()=> 1+2+3;

console.log(addOne(9))
//this is because the arrowfunction has the variable and the addOne function name for the printing value.

// console.log(add(1,2));
console.log(summarizeUser(name,age.hoshobbies))
//printing the randomly added numbers 
console.log(addRandom());