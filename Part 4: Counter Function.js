
function superCounter(text) {
    length = text.length;
    regex = /\s+/gi;
    wordCount = text.trim().replace(regex, ' ').split(' ').length;
    spaceCount = text.split(" ").length - 1;
    average = length / wordCount;
    count = ("characters: " + length + ", " + "words: " + wordCount + ", " + "spaces: " + spaceCount + ", " + "average words " + Math.floor(average))
    return count
 
}
superCounter("count me in");
