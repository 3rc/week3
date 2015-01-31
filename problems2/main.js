$(document).on('ready', function() {
  

  // var firstReverse = function(words) {
  // 	console.log(words.split(" ").reverse());
  // }

  // firstReverse("the quick brown fox jumped over the lazy dog");

var swapCase = function(userString) {
		var newString = [];
	for(var i = 0; i < userString.length; i++) {
		var c = userString[i];
		if(c === c.toLowerCase()) {
			newString.push(c.toUpperCase())
		}
		else if(c === c.toUpperCase()) {
			newString.push(c.toLowerCase())
		}
	var newStringOut = newString.join("");
	}
	console.log(newStringOut)
}

swapCase("i aM iN a wHoLe BuNCH of DiFFereNT cASES")
});