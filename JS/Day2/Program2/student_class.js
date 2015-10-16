var Student = function(name, age, city){
  this.name = name
  this.age = age
  this.city = city
}

var student1 = new Student('Pratibha', 26, 'Nashik')
var student2 = new Student('Priya', 20, 'Nashik')

console.log('student 1 is ' + student1.name + ' ,age is ' + student1.age + ' and lives in ' + student1.city )
console.log('student 2 is ' + student2.name + ' ,age is ' + student2.age + ' and lives in ' + student2.city )
