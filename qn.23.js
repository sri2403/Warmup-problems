/* Given an object and a key, "removeProperty" removes the given key from the given object. */

var obj = {
	"mykey": "value"
}

function removeProperty(obj, key) {
	if (obj.hasOwnProperty(key)) {
		delete obj[key];
	}
	return obj;
}
removeProperty(obj, "mykey");