/* Given a word, "getLengthOfWord" returns the length of the given word. */

function getLengthOfWord(word1) {
	if (typeof(word1) == "string") {
		return word1.length;
	} else {
		return -1;
	}
}


console.log(getLengthOfWord("GUVI"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord());
console.log(getLengthOfWord(9));