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

console.log(add(1,2));
console.log(summarizeUser(name,age.hoshobbies))