// Main JS File

var btn = document.getElementById('btn');

var parse = function() {
	// Save inner contents of the <p> tag at the 0th-index to memory
    var paragraph = document.getElementsByTagName('p')[0].innerHTML;
    // Create array of words to remove from paragraph
    var words = ["and", "but", "or", "yet", "for", "nor", "so", "Henry", "David", "Thoreau."];

    // Create and return closure that takes in paragraph and words to remove
    return function() {
    	// Split original paragraph at spaces to create an array of paragraph words
        var parArray = paragraph.split(' ');

        // Iterate through the words array indices and the parArray indices
        words.map(function(i){
            parArray.map(function(e) {
            	// If parArray item is exactly equal to the word to remove, remove it from the parArray
                if (e === i) {
                    parArray.splice(parArray.indexOf(e), 1);
                }
            });
        });
        // Rejoin the parArray on spaces and save in new var
        var newParagraph = parArray.join(' ');
        // Return the new var as the inner contents of the p tag
        return document.getElementsByTagName('p')[0].innerHTML = newParagraph;;
    };
};

// Execute the parse function on button click
btn.onclick = parse();