/* Given two words, "isSameLength" returns whether the given words have the same length. */

function isSameLength(word1, word2) {
	if (word1.length == word2.length) {
		return true;
	} else {
		return false;
	}
}

console.log(isSameLength("GUVI", "GEEK"));
console.log(isSameLength("GUVI", "ZEN"));
console.log(isSameLength("Hello", "GUVI"));