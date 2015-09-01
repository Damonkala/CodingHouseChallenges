function superCounter(text) {
    length = text.length;
    regex = /\s+/gi;
    wordCount = text.trim().replace(regex, ' ').split(' ').length;
    spaceCount = text.split(" ").length - 1;
    average = length / wordCount;
  console.log(length + " characters");
  console.log(wordCount + " words"); 
  console.log(spaceCount + " spaces");
  console.log(Math.floor(average) + " average words");
}
superCounter("ex ample");
//returns 8 characters 2 words 1 space and 4 average words
