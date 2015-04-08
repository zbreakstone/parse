// Main JS File
var p = document.getElementsByTagName('p')[0];
var pi = p.innerHTML;

var conjunctions = ["for", "and", "nor", "but", "or", "yet", "so"];

var parse = function() {
	var res = pi.replace(/ and /g, " ");
	console.log(res);
	p.innerHTML = res;
	return res;
};

var parseArray = function() {
	var conjLength = conjunctions.length;
	for (var i = 0; i <= conjLength; i++) {
		new RegExp('/ ' + conjunctions[i] + ' /g');
		var res = pi.replace(conj, " ");
		console.log(res);
		p.innerHTML = res;
	};
	return;
}