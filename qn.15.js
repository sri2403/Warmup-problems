/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	if (!firstName && !lastName) {
		return "";
	} else if (!firstName) {
		return lastName;
	} else if (!lastName) {
		return firstName;
	} else {
		return `${firstName} ${lastName}`;
	}
}
console.log(getFullName("GUVI", "GEEK"));
console.log(getFullName("GUVI"));
console.log(getFullName("GEEK"));
console.log(getFullName("", ""));