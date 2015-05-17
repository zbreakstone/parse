var newParse = {
    paragraph: document.getElementsByTagName('p')[0].innerHTML,
    words: ["and", "but", "or", "yet", "for", "nor", "so", "Henry", "David", "Thoreau."],
    newParagraph: "",
    makeArray: function() {
        var p = this.paragraph.split(' ');
        return p;
    },
    numWords: function() {
        return this.makeArray().length;
    },
    numLetters: function() {
        return this.paragraph.length;
    },
    addWord: function(word) {
        this.words.push(word);
        return word.charAt(0).toUpperCase() + word.slice(1) + " added to list of words to remove!";
    },
    removeWord: function(word) {
        var index = this.words.indexOf(word);
        index > -1 ? this.words.splice(index, 1) : ' ';
        return word.charAt(0).toUpperCase() + word.slice(1) + " was removed from list of words to remove!";
    },
    parse: function() {
        var parArray = this.makeArray();
        this.words.map(function(i) {
            parArray.map(function(e) {
                e.toUpperCase() === i.toUpperCase() ? parArray.splice(parArray.indexOf(e), 1) : '';
            });
        });
        this.newParagraph = parArray.join(' ');
        return document.getElementsByTagName('p')[0].innerHTML = this.newParagraph;
    }
};

function Parse(paragraph){
    this.paragraph = paragraph;
    this.words = ['miles', 'granola', 'Henry'];
    this.newParagraph = '';
    this.makeArray = function() {
        var p = paragraph.split(' ');
        return p;
    };
    this.numWords = function() {
        return paragraph.makeArray().length;
    };
    this.numLetters = function() {
        return paragraph.length;
    };
    this.addWord = function(word) {
        this.words.push(word);
        return word.charAt(0).toUpperCase() + word.slice(1) + ' added to list of words to remove!\n' +
            'Words to remove:' + this.words.map(function(e){return ' ' + e});
    };
    this.removeWord = function(word) {
        var index = this.words.indexOf(word);
        index > -1 ? this.words.splice(index, 1) : ' ';
        return word.charAt(0).toUpperCase() + word.slice(1) + ' was removed from list of words to remove!' +
            'Words to remove:' + this.words.map(function(e){return ' ' + e});
    };
    this.parse = function() {
        var parArray = this.makeArray();
        this.words.map(function(i) {
            parArray.map(function(e) {
                e.toUpperCase() === i.toUpperCase() ? parArray.splice(parArray.indexOf(e), 1) : '';
            });
        });
        this.newParagraph = parArray.join(' ');
        return document.getElementsByTagName('p')[0].innerHTML = this.newParagraph;
    };
}

var btn = document.getElementById('btn'),
    count = 1;

btn.onclick = function(){
    var p = document.getElementsByTagName('p')[0].innerHTML,
        par1 = new Parse(p);

    par1.parse();

    count += 1;
};

