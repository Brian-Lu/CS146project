var words = document.getElementsByClassName("word");
var showDefinitions = function() {
    var definition  = event.target.parentElement.childNodes[1];
    definition.style.display = "inline";
};
var hideDefinitions = function() {
   var definition = event.target.parentElement.childNodes[1];
    definition.style.display = "none";
};
for (var i = 0; i < words.length; i++) {
    words[i].addEventListener('mouseover', showDefinitions, false);
    words[i].addEventListener('mouseout', hideDefinitions, false);
}