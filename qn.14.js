/* Write a function called "isEven". "isEven" Should return whether it is even or not. Return -1 for invalid input. */

function isEven(num) {
	if (!isNaN(num)) {
		return num % 2 === 0;
	} else {
		return -1;
	}
}
console.log(isEven(12));
console.log(isEven(0));
console.log(isEven(11));
console.log(isEven("11h"));
/*
Lines For TestCase
isEven(12);
isEven(0);
isEven(11);
isEven("11h");
*/