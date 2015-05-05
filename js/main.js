// Main JS File

var btn = document.getElementById('btn');

var parse = function() {
    var paragraph = document.getElementsByTagName('p')[0].innerHTML;
    var words = ["and", "but", "or", "yet", "for", "nor", "so", "Henry", "David", "Thoreau."];
    var newParagraph;

    return function() {
        var parArray = paragraph.split(' ');
        for (var i = 0; i < words.length; i++) {
            parArray.map(function(e) {
                if (e === words[i]) {
                    parArray.splice(parArray.indexOf(e), 1);
                    //console.log(words[i]);
                }
            });
        }
        newParagraph = parArray.join(' ');
        return document.getElementsByTagName('p')[0].innerHTML = newParagraph;;
    };
};

btn.onclick = parse();