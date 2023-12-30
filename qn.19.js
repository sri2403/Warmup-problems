/* Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’. */

function getNthElement(array, n) {
	
	if (array.length === 0) {
		return undefined;
	}
	if (n >= 0 && n < array.length) {
		return array[n];
	} else {
		return undefined;
	}
}


console.log(getNthElement([1, 3, 5], 1));
console.log(getNthElement([1, 3, 5], 2));
console.log(getNthElement([], 2));