var sentence = "stash and pop on this level",
        words = sentence.split(" ").map(function(word) {
                    var isPalindrome = word.length > 1 && (word.toLowerCase() === word.toLowerCase().split("").reverse().join(""));
                    return isPalindrome;
                });
console.log(words);
//Returns [false, false, true, false, false, true]
