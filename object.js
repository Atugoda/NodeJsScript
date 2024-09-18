const person = {
    name: ' nadun',
    age: 24,
    // greet:function(){
    //     console.log('hi im ' +this.name);
    // }   
        greet(){
            console.log('hi im ' +this.name);
        }


};

person.greet();
// console.log(person);
//arrow functionis refered globally, not locally.
