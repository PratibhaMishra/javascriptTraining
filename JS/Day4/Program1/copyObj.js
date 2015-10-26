function Copy( source, target ) {
	for (var property in source) {
		if (typeof source[property] === 'object') {
			target[property] = (source[property].constructor === Array)?[]:{};
			Copy(source[property],target[property]);
		} else {
			target[property] = source[property];
		}
	}
	return target;
}

console.log(Copy(obj1, obj2))
console.log(Copy(obj2, obj1))
console.log(Copy(obj2, obj3))