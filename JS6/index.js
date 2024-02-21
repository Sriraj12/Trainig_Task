function object(){
var user =
[     
    { 
      name: "Vedha",
      age: 45,
      place: "Chennai"
    },
    {
      name: "Muthu",
      age: 23,
      place: "Mumbai"
    },
    {
      name: "Rocky",
      age:35,
      place: "KGF"
    }
] 
var customer =
[
  {
    name: "Senthil",
    age: 40,
    place: "North madras"
  },
  {
    name: "Guna",
    age: 45,
    place: "North madras"
  },
  {
    name: "Anbu",
    age: 25,
    place: "North madras"
  }
]
var all = [...user,...customer];
var array = all.filter(value => value.name).map((list) => list.name);
console.log("map",array)
document.getElementById("output").innerHTML = array;
var [one, two, three, ...rest] = array;
console.log("rest",rest)
}