// Objects
let car = {
// Properties
    color: "red",
    engine: {cylinders: 4, turdo: false}

// Methods
    
}





let multiDimensional = ['something',['somethingElse']]



// array o' objects
let people = [{name: "isaiah", age:17},
            {name: "alan", age:28},
            {name:'connor', age:17},
            {name: "Carlos", age:17},
            {name: "Bren", age:"eternal"},
            {name:'Tony', age:17} 

            ]


// for loop
for (let i=0; i < people.length; i++) {
    console.log(people[i].age)
}





// write a program that find the summation of every number from 1-num

//counting challenge for loops
function summation(num){
    if(num  == 1)
      return num
    let total = 0;
    for(let i=0; i < num;i++){
        total= i + total
    }
        return total+num
    }
  
  
  summation(26)

    
