var Student = function(name, age, city){
    this.name = name
    this.age = age
    this.city = city
}

var student1 = new Student('Pratibha', 26, 'Nashik')
var student2 = new Student('Priya', 20, 'Nashik')

Student.prototype.sayHello = function(){
    return "Hello, I'm " + this.name + ', I am '+ this.age + ' years old and I live in '+ this.city +' city.';
}

var student3 = new Student('Abhishek', 22, 'Nashik')
console.log(student1)
console.log(student2)
console.log(student3)
console.log(student3.sayHello())