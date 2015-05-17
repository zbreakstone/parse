// Main JS File
var par1;

// Create new Parse contstructor function
function Parse(paragraph){
	// Store paragraph input in a property
    this.paragraph = paragraph;

    // List of words to remove
    this.words = ['miles', 'granola', 'Henry', 'away.'];
    this.newParagraph = '';

    // Method to convert the paragraph into an array to more easily remove words
    this.makeArray = function() {
        var p = paragraph.split(/([\,\"\\\/\+\-\!\@\#\$\%\^\&\*\(\)\;\|\<\>\?\:\~\`\.\s])+/g);
        return p;
    };

    // Method to count the number of words in the string after converting to array
    this.numWords = function() {
        return paragraph.makeArray().length;
    };

    // Method to count the number of characters in string
    this.numLetters = function() {
        return paragraph.length;
    };

    // Method to add words to the list of words to remove
    this.addWord = function(word) {
        this.words.push(word);
        return word.charAt(0).toUpperCase() + word.slice(1) + ' added to list of words to remove!\n' +
            'Words to remove:' + this.words.map(function(e){return ' ' + e});
    };

    // Method to remove words from the list of words to remove
    this.removeWord = function(word) {
        var index = this.words.indexOf(word);
        index > -1 ? this.words.splice(index, 1) : ' ';
        return word.charAt(0).toUpperCase() + word.slice(1) + ' was removed from list of words to remove!' +
            'Words to remove:' + this.words.map(function(e){return ' ' + e});
    };

    // Method to parse the starting paragraph to remove key words
    this.parse = function() {
    	// Use makeArray method to split paragraph into words
        var parArray = this.makeArray();
        // Map through all the words in the 'words' array
        this.words.map(function(i) {
        	// Also map through each word in the parArray
            parArray.map(function(e) {
            	// If the word to remove is exactly equal to the word in the paragraph, remove it from the parArray
                e.toUpperCase() === i.toUpperCase() ? parArray.splice(parArray.indexOf(e), 1) : '';
            });
        });
        // Rejoin the paragraph back on the spaces, and save it to the newParagraph property
        this.newParagraph = parArray.join(' ');
        // Set the innerHTML for the paragraph to the contents of the newParagraph property, and return
        return document.getElementsByTagName('p')[0].innerHTML = this.newParagraph;
    };
}

// Cache the button#btn element and a count variable
var btn = document.getElementById('btn'),
    count = 1;

// When #btn is clicked, create a p variable, create a new Parse object and pass 'p' into it
btn.onclick = function(){
    var p = document.getElementsByTagName('p')[0].innerHTML;
    par1 = new Parse(p);

    // Parse the paragraph
    par1.parse();

    // Increase count
    count += 1;
    return par1;
};