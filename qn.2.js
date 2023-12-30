/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(num) {

	if (num % 1 === 0) {
		return -num;
	} else {
		return -1;
	}
}
console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("5a"));
console.log(getOpposite(5.5));