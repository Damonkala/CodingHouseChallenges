var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

var date2 = new Date();
var dd2 = 0;
var mm2 = 0;
var yyyy2 = 0;

//var date3 = new Date();


if(dd<10) {
    dd='0'+dd;
} 

if(mm<10) {
    mm='0'+mm;
} 

function age (day2, month2, year2) {
    dd2 = day2;
    mm2 = month2;
    yyyy2 = year2;
    dd3 = dd - dd2;
    mm3 = mm - mm2;
    yyyy3 = yyyy - yyyy2;
}

function mathDate() {
    if (yyyy3 >= 1) {
        if (mm3 >= 1) {
            if (dd3 >= 1) {
                console.log(yyyy3 + " years and " + mm3 + " months and " + dd3 + " days.");
                return yyyy3 + " years and " + mm3 + " months and " + dd3 + " days.";
            } else if (dd3 <= 0) {
                console.log(yyyy3 + " years and " + mm3 + " months.");
                return yyyy3 + " years and " + mm3 + " months.";
            }
        } else if (mm3 <= 0) {
            console.log(yyyy3 + " years and " + dd3 + " days.");
            return yyyy3 + " years and " + dd3 + " days.";
        }
    } else if (yyyy3 <= 1 ){
        if (mm3 >= 1) {
            console.log(mm3 + " months and " + dd3 + " days.");
            return mm3 + " months and " + dd3 + " days.";
        } else if (dd3 <= 0){
            console.log(mm3 + " months.");
            return mm3 + " months.";
        } else if (mm3 <= 0){
            console.log(dd3 + " days.");
            return dd3 + " days.";
        }
        
    }
    

}

age(13, 4, 2009);
mathDate();
