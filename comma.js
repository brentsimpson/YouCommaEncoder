/* This code is for my YouCommaEncoder - a game to teach about correct comma usage. Currently, a string is given in the variable text, then iterated over looking for all the commas. */

var text = "There were good times, and there were, bad times, yo.";
var selectComma = ","; // this could be any punctuation you want
var hits = [];
var commaCheck;
var commaPlacement;

console.log("The sentence is " + text.length + " characters long.");

for(i = 0 ; i<text.length ; i++){
if(text[i] === selectComma){
  commaPlace = i + 1;
  hits.push(commaPlace);
	}
}

var commaNumber = hits.length;

console.log("Commas were placed at these characters: " + hits);

var newText = text.replace(/,/g, '');

console.log(newText);

$("#commabox").text(newText); //writes newText to textarea

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

function checkCommaPlacement() {
    if (commaCheck === 44) {
            for (var i = 0; i < commaNumber; i++) { 
                if (hits[i] === commaPlacement + 1) {console.log("Correct comma placement!")} else {console.log("Incorrect placement.")} }                                 
      
        } else { console.log("Not a comma.") }
   };
