var Student = function(name, age, city){
	this.name = name
	this.age = age
	this.city = city
}

var student1 = new Student('Pratibha', 26, 'Nashik')
var student2 = new Student('Priya', 20, 'Nashik')

function Student(){}
Student.prototype.sayHello = function(){
  	console.log("Hello, I'm " + this.name + ', I am '+ this.age + ' years old and I live in '+ this.city +' city.');
}

var student3 = new Student('Abhishek', 22, 'Nashik')
student3.sayHello()