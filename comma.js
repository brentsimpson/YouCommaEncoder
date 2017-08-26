/* This code is for my YouCommaEncoder - a game to teach about correct comma usage. Currently, a string is given in the variable text, then iterated over looking for all the commas. */

function start() {
  
var text = "We need walnuts, cinnamon, sugar, and milk.";  
var newText;
var selectComma = ","; // this could be any punctuation you want
var hits = [];
var commaCheck;
var commaPlacement;
var progressBar = 0;
var offset = 0;
  
newText = text.replace(/,/g, '');

$("#commabox").val(newText); //writes newText to textarea
$("#commanumber").text(commanumbertext);

console.log("The sentence is " + text.length + " characters long.");

for(i = 0; i<text.length; i++){
if(text[i] === selectComma){
  commaPlace = i - offset;
  offset = offset + 1;
  hits.push(commaPlace);
	}
}

var commaNumber = hits.length;
var commanumbertext = "There should be " + commaNumber + " commas in this sentence.";
progressBarProgress = Math.round(100 / hits.length);
$("#progressbardisplay").css('width', progressBar + "%"); // resets the progress bar

console.log("Commas were placed at these characters: " + hits);


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
right place in the string. Could probably use indexOf() here instead */
function checkCommaPlacement() {
    a = hits.indexOf(commaPlacement);
    if (commaCheck === 44 && a != -1) {
        progressBar = progressBar + progressBarProgress;
        $("#progressbardisplay").css('width', progressBar + "%");
        console.log("Comma is in array at " + a);
        for (var i = a; i < commaNumber; i++){
            hits[i] += 1; // updates the array places above comma
          }} else {
        console.log("Comma incorrecly placed.") }               
   };

};
  
start();

$( ".btn" ).click(function() {
  $('#commabox').val('');
  start();
});
