$(document).on('ready', function() {

	/*

	var getName = function(a, b) {
		console.log(a.name)
	};

	getName({ name: 'Luisa', age: 25 })

	

	var totalLetters = function(items) {
		var itemString = items.toString();
		console.log(itemString.length - items.length + 1)

	}

	totalLetters(['javascript', 'is', 'awesome']);
	totalLetters(['what', 'happened', 'to', 'my', 'function'])



  var keyValue = function(a, b) {
  	var obj = {city: b};
  	console.log(obj)
  }

  keyValue('city', 'Denver')



    var negativeIndex = function(arr, b) {
    	var desired = arr[arr.length + b];
    	console.log(desired)
    }

    negativeIndex(['a', 'b', 'c', 'd', 'e'], -2);
	negativeIndex(['jerry', 'sarah', 'sally'], -1)

	*/

	var removeM = function(word) {
		var withoutM = word.replace(/m/g,'');
		console.log(withoutM)
	}

	removeM('family');
	removeM('memory')
});