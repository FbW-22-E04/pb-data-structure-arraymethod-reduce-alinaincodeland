
//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
//1

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {
  return array.reduce((item,value) => 
  { item[value.id] = value;
    return item;

  }, {})
}

let usersById= groupById(users)
console.log(usersById)

/* expected output: 

{
  john: { id: 'john', name: 'John Smith', age: 20 },
  ann: { id: 'ann', name: 'Ann Smith', age: 24 },
  pete: { id: 'pete', name: 'Pete Peterson', age: 31 }
}
  
*/