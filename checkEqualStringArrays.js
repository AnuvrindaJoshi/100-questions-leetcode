//https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
var arrayStringsAreEqual = function(word1, word2) {
  
    let new1= word1.join('')
    let new2= word2.join('');

    if(new1===new2){
        return true;
    }else return false;
    
};

console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]));