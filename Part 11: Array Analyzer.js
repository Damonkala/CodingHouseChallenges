function arrayAnalyzer(values)  {
    {{
        var odds = 0;
        for (var i = 0; i < values.length; i++){
            if(values[i] % 2){
                odds = odds + 1;
}
}
         odds = "Odds: " + odds;
}

}
{
        var negative = 0;
        for (i = 0; i < values.length; i++){
            if(values[i] < 0){
                negative = negative + 1;
}
}
        negative = "Negative: " + negative;
}
{
    var sum = 0;
for( var i = 0; i < values.length; i++ ){
    sum += parseInt( values[i], 10 ); 
}

var avg = sum/values.length;
avg2 = "Average: " + Math.round(avg * 100) / 100; 
    
}
{
    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length/2);

    if(values.length % 2)
        med = "Median: " + values[half];
        
    else
        med = "Median: " + (values[half-1] + values[half]) / 2.0;
        
}
console.log(avg2,med,negative,odds);
return[avg2,med,negative,odds];
}
arrayAnalyzer([7, -3, 0, 12, 44, -5, 3]);
