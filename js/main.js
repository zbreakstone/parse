// Main JS File
var p = document.getElementsByTagName('p')[0];
var pi = p.innerHTML;

// var conjunc = ["for", "and", "nor", "but", "or", "yet", "so"];

// var parse = function() {
// 	var res = pi.replace(/ and /g, " ");
// 	console.log(res);
// 	p.innerHTML = res;
// 	return res;
// };

var parseArray = function(text) {
	var conjunc = ["for", "and", "nor", "but", "or", "yet", "so"];
	for (var word in conjunc) {
		// var re = /\s/;
		// console.log(re);
		console.log(word);
		var text = text.replace(new RegExp(conjunc[word], "ig"), " ");
		p.innerHTML = text;
		console.log(p.innerHTML);
	}
	// return text;
}

// var parsed = parseArray(pi);