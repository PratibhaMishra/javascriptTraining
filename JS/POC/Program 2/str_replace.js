var str = 'My name is Pranay';
var stringReplace = function( str1, str2 ) {
	return str.split(str1).join(str2);
};

stringReplace( "Pranay", "Shamsher" );
