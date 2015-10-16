var add = function() {
	if( arguments.length < 2 ) {
		alert("Atleast 2 arguments required")
	} else {
		console.log(typeof(arguments[0]))
    	console.log(typeof(arguments[1]))
		return arguments[0] + arguments[1]
	}
}
console.log(add(12, 2))

var subtract = function() {
	if( arguments.length < 2 ) {
		alert("Atleast 2 arguments required")
	} else {
		console.log(typeof(arguments[0]))
    	console.log(typeof(arguments[1]))
		return arguments[0] - arguments[1]
	}
}
console.log(subtract(12, 2))

var divide = function() {
	if( arguments.length < 2 ) {
		alert("Atleast 2 arguments required")
	} else {
		console.log(typeof(arguments[0]))
    	console.log(typeof(arguments[1]))
		return arguments[0] / arguments[1]
	}
}
console.log(divide(2, 20))

var multiply = function() {
	if( arguments.length < 2 ) {
		alert("Atleast 2 arguments required")
	} else {
		console.log(typeof(arguments[0]))
    	console.log(typeof(arguments[1]))
		return arguments[0] * arguments[1]
	}
}
console.log(multiply(12, 2))