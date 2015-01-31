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


	var removeM = function(word) {
		var withoutM = word.replace(/m/g,'');
		console.log(withoutM)
	}

	removeM('family');
	removeM('memory')

	var printObject = function(objects) {
		for(var prop in objects) {
			console.log(prop + " is " + objects[prop])
		}
	};
	printObject({ a: 10, b: 20, c: 30 })
	printObject({ firstName: 'pork', lastName: 'chops' })

	var vowels = function(words) {
		var extractedVowels = words.match(/a|e|i|o|u/gi);
		console.log(extractedVowels)
	};

	vowels('alabama');
	vowels('What lets in youth?') 



	var twins = function(requested) {
		x = 0
		for( y = 1; y < requested.length; y += 2) {
			var matching = (requested[x] === requested[y]);
			var x = x += 2
		}
		if(requested.length % 2 != 0) {
			var matching = false
		}
		else {
			var matching = matching
		}
		console.log(matching)
	};

	twins(['a', 'a', 'b', 'b', 'c', 'c']);
	twins(['a', 'a', 'b', 'z']);
	twins(['a', 'a', 'b']);
	twins(['a', 'a', 'b', undefined])



	var or = function(booleans) {
		var containsTrue = false;
		for( i = 0; i < booleans.length; i++) {
			if(booleans[i] === true) {
				return true;
			}
		}
		return false
	}
		console.log(or([false, false, true, false]));
		console.log(or([false, false, false]));
		console.log(or([]))


	*/

	var unique = function(strings) {
		return _.uniq(strings);
	}

	console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']))
		






});