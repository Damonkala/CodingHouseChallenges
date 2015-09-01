var array = [2, 7, 4, 8, 6, 4];
var largest = 0;

for (i=0; i<=largest;i++){
    while (array[i]>largest) {
        var largest=array[i];
    }
}
console.log(largest);


for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
console.log(largest);


function largestArrayElements(element, index, array) {
  if (array[i]>largest) {
        largest=array[i];
}
}

[2, 7, 4, 8, 6, 4].forEach(largestArrayElements);
console.log(largest);

var obj = { "wheels": 3, "horsepower": 600, "decal": "flames", "awesome": true , "holdsBarred": [] };
    
for (var prop in obj) {
  console.log( prop + " " + obj[prop]);
}



var numbers = [1, 2, 5, 7, 11].map(function(x) { return x * x; });
console.log(numbers);



var product = [3, 5, 7, 9, 12].reduce(function(a, b) {
  return a + b;
});
console.log(product);


function isOdd(value) {
  return value % 2;
}
var filtered = [1, 22, 35, 2, 4, 7, 9].filter(isOdd);
console.log(filtered);


var things = ['water', 'balloon', 'baseball', 'computer', 'notebook', 'frisbee'];
things.sort();
things.reverse();
console.log(things);
