/* This code is for my YouCommaEncoder - a game to teach about correct comma usage. Currently, a string is given in the variable text, then iterated over looking for all the commas. */

var text = "We need walnuts, cinnamon, sugar, and milk.";
var selectComma = ","; // this could be any punctuation you want
var hits = [];
var commaCheck;
var commaPlacement;
var progressBar = 0;

console.log("The sentence is " + text.length + " characters long.");

for(i = 0 ; i<text.length ; i++){
if(text[i] === selectComma){
  commaPlace = i;
  hits.push(commaPlace);
	}
}

var commaNumber = hits.length;
var commanumbertext = "There should be " + commaNumber + " commas in this sentence.";
var progressBarProgress = Math.round(100 / hits.length);

console.log("Commas were placed at these characters: " + hits);

var newText = text.replace(/,/g, '');

$("#commabox").text(newText); //writes newText to textarea
$("#commanumber").text(commanumbertext);

/* code runs after keypress and checks if a comma has been placed
   at a place where one was removed */
$( "#commabox" ).keypress(function( event ) {
    commaCheck = event.which;
    console.log( commaCheck + " was pressed." );
    var caret = $("#commabox").caret();
    commaPlacement = caret["begin"]; //assigns value of begin in caret object to commaPlacement
    console.log("Comma placed at " + commaPlacement);
    checkCommaPlacement();
            });

/* this function checks if commas have been placed at the 
right place in the string */
function checkCommaPlacement() {
    if (commaCheck === 44) {
            for (var i = 0; i < commaNumber; i++) { 
                if (hits[i] === commaPlacement) {
                  console.log("Correct comma placement!")
                  progressBar = progressBar + progressBarProgress
                  $("#progressbardisplay").css('width', progressBar + "%");
                } else {console.log("Incorrect placement.")} }                                 
        } else { alert("That\'s not actually a comma.") }
   };
