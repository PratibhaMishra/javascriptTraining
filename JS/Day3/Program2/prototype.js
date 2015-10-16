var Student = function(name, age, city){
	this.name = name
	this.age = age
	this.city = city
}

var student1 = new Student('Pratibha', 26, 'Nashik')
var student2 = new Student('Priya', 20, 'Nashik')

Student.prototype.printName = function() {
	console.log("Hello, I'm " + this.name + ', I am '+ this.age + ' years old and I live in '+ this.city +' city.');
};

student1.printName();
student2.printName();