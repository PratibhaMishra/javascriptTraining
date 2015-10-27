var myArray = [ 1, 2, 3, 4 ];
Array.prototype.customPush  = function( element ) {
	this[this.length] = element;
	return this;
};

Array.prototype.customPop  =  function() {
	return this.slice(0,-1);
};

myArray.customPush(6);
myArray.customPush(7);
myArray.customPop();