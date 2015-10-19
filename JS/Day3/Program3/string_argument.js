var found, count, lIndex;

function checkSum( string, char ) {
	found = new RegExp(char, 'g');
	
	if((string.match(found))){
		count = (string.match(found)).length
		lIndex = string.lastIndexOf(char)
	} else {
		count = -1
		lIndex = "Not Applied"
	}
}

checkSum("pseudopseudohypoparathyroidism", "p")
console.log("Occurences : "+count)
console.log("Last Index : "+lIndex)

checkSum("pseudopseudohypoparathyroidism", "q")
console.log("Occurences : "+count)
console.log("Last Index : "+lIndex)
