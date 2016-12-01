var randomLetterString = "havok"
console.log("Text String is: " + randomLetterString)
var fs  = require("fs");

var arraya = fs.readFileSync('defaultList.txt').toString().replace("/(\r\n|\n|\r)/gm","").split("\n")
console.log("Length of Dictionary: " + arraya.length)

var dictionary = arraya
//////////////////////////////////////////////////////////////////////
var tree = function(leafs) {
    var branches = [];
    if( leafs.length == 1 ) return leafs;
    for( var k in leafs ) {
        var leaf = leafs[k];
        tree(leafs.join('').replace(leaf,'').split('')).concat("").map(function(subtree) {
            branches.push([leaf].concat(subtree));
        });
    }
    return branches;
};
///////////////////////////////////////////////////////////////////
var wordCombos = tree(randomLetterString.split('')).map(function(str){return str.join('')})
console.log("Length of Original WordCombos: " + wordCombos.length)
var wordCombos2 = wordCombos.filter(function(elem, pos){
  return wordCombos.indexOf(elem) == pos;
})
console.log("Length of WordCombos: " + wordCombos2.length + "\n")
///////////////////////////////////////////////////////////////////
var word2 = []
for (x in dictionary){
  word2.push(dictionary[x].trim())
}
///////////////////////////////////////////////////////////////////

var timeStart = Math.floor(Date.now() / 1000)

for (var words=0; words<wordCombos2.length; words++){
  if (wordCombos2[words].length > 1){
  for (aWords in word2){
      if (wordCombos2[words] == word2[aWords]){
        console.log(wordCombos2[words] + " is a word!")
      }
  }
}
}
var timeEnd = Math.floor(Date.now() / 1000)
console.log("Time Took: " + (timeEnd - timeStart) + " seconds")
