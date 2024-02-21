var num = [
    {
     name:"sriraj",
     nickname:"appu",
     age:'23',
     place:"tvl"
    },
    {
     name:"dill",
     nickname:"dill",
     age:'22',
     place:"tvl"
    },
    {
     name:"ajay",
     nickname:"aadu",
     age:'15',
     place:"tuty",
     a:[{name:"siva",nickname:"dora",age:"22",place:"ngl"}]
    }
];
var array = num.filter(value => value.age > 20).map((out) => out.name);
console.log("vava",array)
var b = [num[2].a[2]];
console.log("va",b);
