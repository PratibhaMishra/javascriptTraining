var str = 'My name is Pranay';
String.prototype.stringReplace = function( str1, str2 ) {
	return str.split(str1).join(str2);
};

stringReplace( "Pranay", "Shamsher" );