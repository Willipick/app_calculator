const getAgeButton = document.getElementById("getAge");
const dayButton = document.getElementById("dayInput");
const monthButton = document.getElementById("monthInput");
const yearButton = document.getElementById("yearInput");
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
var yearDiff = 0;
var monthDiff = 0;
var dayDiff = 0;
var dayParagraph = document.getElementById("dayError");
dayParagraph.style.fontWeight=('300');
var monthParagraph = document.getElementById("monthError");
var yearParagraph = document.getElementById("yearError");
var correctDay = false;
var correctMonth = false;
var correctYear = false;


function changeButtonColorEnter () {
    document.getElementById("getAge").style.background = ("hsl(259, 100%, 40%)");
}

function changeButtonColorLeave () {
    document.getElementById("getAge").style.background = ("hsl(259, 100%, 65%)");
}


function ageCalculation () {
    var birthDay = Number(dayButton.value);
    var birthMonth = Number(monthButton.value);
    var birthYear = Number(yearButton.value);
    if (correctDay==true && correctMonth==true && correctYear==true) {

        if (currentMonth<birthMonth) {

            if (currentDay<birthDay) {
                monthDiff = 12 - birthMonth + currentMonth - 1;
                dayDiff = 31 - birthDay + currentDay;
                yearDiff = currentYear - (birthYear + 1);
            }

            else {
                monthDiff = 12 - birthMonth + currentMonth;
                dayDiff = currentDay - birthDay;
                yearDiff = currentYear - (birthYear + 1);
            }
        }
            
        else {

            if (currentDay<birthDay) {
                monthDiff = currentMonth - (birthMonth + 1);
                dayDiff = 31 - birthDay + currentDay; 
                yearDiff = currentYear - birthYear;                
            }

            else {
                monthDiff = currentMonth - birthMonth;
                dayDiff = currentDay - birthDay;
                yearDiff = currentYear - birthYear;   
            }
            
        }

        document.getElementById("numberDay").innerHTML = dayDiff;
        document.getElementById("numberMonth").innerHTML = monthDiff;
        document.getElementById("numberYear").innerHTML = yearDiff;
    }
}



function validDay () {
    var birthDay = Number(dayButton.value);
    var errorText = document.createTextNode("");
    dayParagraph.appendChild(errorText);
    var value = document.getElementById("dayError").textContent;

    if (value=="") {
        console.log("cestnul");

        if (0<birthDay && birthDay<32) {
            document.getElementById("dayError").innerHTML=("Valid day");
            document.getElementById("dayError").style.color=("green");
            document.getElementById("dayInput").style.borderColor=('green');
            document.getElementById("dayTitle").style.color=("green");
            correctDay = true;
        } 

        else if(birthDay==0) {
            document.getElementById("dayError").innerHTML=("This field is required");
            document.getElementById("dayError").style.color=("red");
            document.getElementById("dayInput").style.borderColor=('red');
            document.getElementById("dayTitle").style.color=("red");
            correctDay = false;
        }

        else {
            document.getElementById("dayError").innerHTML=("Enter a valid day");
            document.getElementById("dayError").style.color=("red");
            document.getElementById("dayInput").style.borderColor=('red');
            document.getElementById("dayTitle").style.color=("red");
            correctDay = false;
        }
    }

    if (value=="Valid day") {

        if(0<birthDay && birthDay<32) {
            document.getElementById("dayError").innerHTML=("Valid day");
            document.getElementById("dayError").style.color=("green");
            document.getElementById("dayInput").style.borderColor=('green');
            document.getElementById("dayTitle").style.color=("green");
            correctDay = true;
        }

        else if(birthDay==0) {
            document.getElementById("dayError").innerHTML=("This field is required");
            document.getElementById("dayError").style.color=("red");
            document.getElementById("dayInput").style.borderColor=('red');
            document.getElementById("dayTitle").style.color=("red");
            correctDay = false;
        }

        else {
            document.getElementById("dayError").innerHTML=("Enter a valid day");
            document.getElementById("dayError").style.color=("red");
            document.getElementById("dayInput").style.borderColor=('red');
            document.getElementById("dayTitle").style.color=("red");
            correctDay = false;
        }
    }

    if (value=="Enter a valid day") {

        if(0<birthDay && birthDay<32) {
            document.getElementById("dayError").innerHTML=("Valid day");
            document.getElementById("dayError").style.color=("green");
            document.getElementById("dayInput").style.borderColor=('green');
            document.getElementById("dayTitle").style.color=("green");
            correctDay = true;
        }

        else if(birthDay==0) {
            document.getElementById("dayError").innerHTML=("This field is required");
            document.getElementById("dayError").style.color=("red");
            document.getElementById("dayInput").style.borderColor=('red');
            document.getElementById("dayTitle").style.color=("red");
            correctDay = false;
        }

        else {
            document.getElementById("dayError").innerHTML=("Enter a valid day");
            document.getElementById("dayError").style.color=("red");
            document.getElementById("dayInput").style.borderColor=('red');
            document.getElementById("dayTitle").style.color=("red");
            correctDay = false;
        }
    }

    if (value=="This field is required") {

        if(0<birthDay && birthDay<32) {
            document.getElementById("dayError").innerHTML=("Valid day");
            document.getElementById("dayError").style.color=("green");
            document.getElementById("dayInput").style.borderColor=('green');
            document.getElementById("dayTitle").style.color=("green");
            correctDay = true;
        }

        else if(birthDay==0) {
            document.getElementById("dayError").innerHTML=("This field is required");
            document.getElementById("dayError").style.color=("red");
            document.getElementById("dayInput").style.borderColor=('red');
            document.getElementById("dayTitle").style.color=("red");
            correctDay = false;
        }

        else {
            document.getElementById("dayError").innerHTML=("Enter a valid day");
            document.getElementById("dayError").style.color=("red");
            document.getElementById("dayInput").style.borderColor=('red');
            document.getElementsById("dayTitle").style.color=("red");
            correctDay = false;
        }
    }



}



function validMonth () {
    var birthMonth = Number(monthButton.value);
    var errorText = document.createTextNode("");
    monthParagraph.appendChild(errorText);
    var value = document.getElementById("monthError").textContent;

    if (value=="") {
        console.log("cestnul");

        if (0<birthMonth && birthMonth<13) {
            document.getElementById("monthError").innerHTML=("Valid month");
            document.getElementById("monthError").style.color=("green");
            document.getElementById("monthInput").style.borderColor=('green');
            document.getElementById("monthTitle").style.color=("green");
            correctMonth = true;
        } 

        else if(birthMonth==0) {
            document.getElementById("monthError").innerHTML=("This field is required");
            document.getElementById("monthError").style.color=("red");
            document.getElementById("monthInput").style.borderColor=('red');
            document.getElementById("monthTitle").style.color=("red");
            correctMonth = false;
        }
        
        else {
            document.getElementById("monthError").innerHTML=("Enter a valid month");
            document.getElementById("monthError").style.color=("red");
            document.getElementById("monthInput").style.borderColor=('red');
            document.getElementById("monthTitle").style.color=("red");
            correctMonth = false;
        }
    }

    if (value=="Valid month") {

        if(0<birthMonth && birthMonth<13) {
            document.getElementById("monthError").innerHTML=("Valid month");
            document.getElementById("monthError").style.color=("green");
            document.getElementById("monthInput").style.borderColor=('green');
            document.getElementById("monthTitle").style.color=("green");
            correctMonth = true;
        }

        else if(birthMonth==0) {
            document.getElementById("monthError").innerHTML=("This field is required");
            document.getElementById("monthError").style.color=("red");
            document.getElementById("monthInput").style.borderColor=('red');
            document.getElementById("monthTitle").style.color=("red");
            correctMonth = false;
        }

        else {
            document.getElementById("monthError").innerHTML=("Enter a valid month");
            document.getElementById("monthError").style.color=("red");
            document.getElementById("monthInput").style.borderColor=('red');
            document.getElementById("monthTitle").style.color=("red");
            correctMonth = false;
        }
    }

    if (value=="Enter a valid month") {

        if(0<birthMonth && birthMonth<13) {
            document.getElementById("monthError").innerHTML=("Valid month");
            document.getElementById("monthError").style.color=("green");
            document.getElementById("monthInput").style.borderColor=('green');
            document.getElementById("monthTitle").style.color=("green");
            correctMonth = true;
        }

        else if(birthMonth==0) {
            document.getElementById("monthError").innerHTML=("This field is required");
            document.getElementById("monthError").style.color=("red");
            document.getElementById("monthInput").style.borderColor=('red');
            document.getElementById("monthTitle").style.color=("red");
            correctMonth = false;
        }

        else {
            document.getElementById("monthError").innerHTML=("Enter a valid month");
            document.getElementById("monthError").style.color=("red");
            document.getElementById("monthInput").style.borderColor=('red');
            document.getElementById("monthTitle").style.color=("red");
            correctMonth = false;
        }
    }

    if (value=="This field is required") {

        if(0<birthMonth && birthMonth<13) {
            document.getElementById("monthError").innerHTML=("Valid month");
            document.getElementById("monthError").style.color=("green");
            document.getElementById("monthInput").style.borderColor=('green');
            document.getElementById("monthTitle").style.color=("green");
            correctMonth = true;
        }
        
        else if(birthMonth==0) {
            document.getElementById("monthError").innerHTML=("This field is required");
            document.getElementById("monthError").style.color=("red");
            document.getElementById("monthInput").style.borderColor=('red');
            document.getElementById("monthTitle").style.color=("red");
            correctMonth = false;
        }

        else {
            document.getElementById("monthError").innerHTML=("Enter a valid month");
            document.getElementById("monthError").style.color=("red");
            document.getElementById("monthInput").style.borderColor=('red');
            document.getElementById("monthTitle").style.color=("red");
            correctMonth = false;
        }
    }
}


function validYear () {
    var birthYear = Number(yearButton.value);
    var errorText = document.createTextNode("");
    yearParagraph.appendChild(errorText);
    var value = document.getElementById("yearError").textContent;

    if (value=="") {
        console.log(birthYear);

        if (0<birthYear && birthYear<=currentYear) {
            document.getElementById("yearError").innerHTML=("Valid year");
            document.getElementById("yearError").style.color=("green");
            document.getElementById("yearInput").style.borderColor=('green');
            document.getElementById("yearTitle").style.color=("green");
            correctYear = true;
        }  

        else if(birthYear==0) {
            document.getElementById("yearError").innerHTML=("This field is required");
            document.getElementById("yearError").style.color=("red");
            document.getElementById("yearInput").style.borderColor=('red');
            document.getElementById("yearTitle").style.color=("red");
            correctYear = false;
        }
        
        else {
            document.getElementById("yearError").innerHTML=("Enter a valid year");
            document.getElementById("yearError").style.color=("red");
            document.getElementById("yearInput").style.borderColor=('red');
            document.getElementById("yearTitle").style.color=("red");
            correctYear = false;
        }
    }

    if (value=="Valid year") {

        if(0<birthYear && birthYear<=currentYear) {
            document.getElementById("yearError").innerHTML=("Valid year");
            document.getElementById("yearError").style.color=("green");
            document.getElementById("yearInput").style.borderColor=('green');
            document.getElementById("yearTitle").style.color=("green");
            correctYear = true;
        }

        else if(birthYear==0) {
            document.getElementById("yearError").innerHTML=("This field is required");
            document.getElementById("yearError").style.color=("red");
            document.getElementById("yearInput").style.borderColor=('red');
            document.getElementById("yearTitle").style.color=("red");
            correctYear = false;
        }

        else {
            document.getElementById("yearError").innerHTML=("Enter a valid year");
            document.getElementById("yearError").style.color=("red");
            document.getElementById("yearInput").style.borderColor=('red');
            document.getElementById("yearTitle").style.color=("red");
            correctYear = false;
        }
    }

    if (value=="Enter a valid year") {

        if(0<birthYear && birthYear<=currentYear) {
            document.getElementById("yearError").innerHTML=("Valid year");
            document.getElementById("yearError").style.color=("green");
            document.getElementById("yearInput").style.borderColor=('green');
            document.getElementById("yearTitle").style.color=("green");
            correctYear = true;
        }

        else if(birthYear==0) {
            document.getElementById("yearError").innerHTML=("This field is required");
            document.getElementById("yearError").style.color=("red");
            document.getElementById("yearInput").style.borderColor=('red');
            document.getElementById("yearTitle").style.color=("red");
            correctYear = false;
        }

        else {
            document.getElementById("yearError").innerHTML=("Enter a valid year");
            document.getElementById("yearError").style.color=("red");
            document.getElementById("yearInput").style.borderColor=('red');
            document.getElementById("yearTitle").style.color=("red");
            correctYear = false;
        }
    }

    if (value=="This field is required") {

        if(0<birthYear && birthYear<=currentYear) {
            document.getElementById("yearError").innerHTML=("Valid year");
            document.getElementById("yearError").style.color=("green");
            document.getElementById("yearInput").style.borderColor=('green');
            document.getElementById("yearTitle").style.color=("green");
            correctYear = true;
        }

        else if(birthYear==0) {
            document.getElementById("yearError").innerHTML=("This field is required");
            document.getElementById("yearError").style.color=("red");
            document.getElementById("yearInput").style.borderColor=('red');
            document.getElementById("yearTitle").style.color=("red");
            correctYear = false;
        }

        else {
            document.getElementById("yearError").innerHTML=("Enter a valid year");
            document.getElementById("yearError").style.color=("red");
            document.getElementById("yearInput").style.borderColor=('red');
            document.getElementById("yearTitle").style.color=("red");
            correctYear = false;
        }
    }
}






dayButton.addEventListener("input", validDay);
monthButton.addEventListener("input", validMonth);
yearButton.addEventListener("input", validYear);
getAgeButton.addEventListener("mouseenter", changeButtonColorEnter);
getAgeButton.addEventListener("mouseleave", changeButtonColorLeave);
getAgeButton.addEventListener("click", ageCalculation)