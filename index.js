
console.log("Hello Michael");
//document.getElementById("Bild1").classList.toggle("Bild");

/*
function faculty_uebung( eineZahl ) {
	var n = 1; // Zum hochzaehlen
	var m = 1; // Ergebnis (Fakultät)
	while ( n <= eineZahl ) {
		m = m * n;
		n = n + 1;
	console.log(m);
	}
	return m;
}
*/

function faculty_uebung( eineZahl ){
	var m = 1;
	for (var n = 1; n <= eineZahl; n++ ){
		m = m * n;
		console.log(m);
	}
	return m;
}


function ausrechnen() {
	var dieZahl = document.getElementById("eingabe").value;

	var ausgabe =faculty_uebung (dieZahl);

	document.getElementById("ausgabe").value = ausgabe;
}
//ausrechnen():

document.getElementById("button").addEventListener("click",ausrechnen);


/*function faculty_uebung( zahlElement ) {
var n = 1; // Zum hochzaehlen
var m = 1; // Ergebnis (Fakultät)
while ( n <= zahlElement ) {
m = m * n;
n = n + 1;
console.log(m);
}
return m;
};

var eingabeVar = document.getElementById("eingabe").value;
document.getElementById("ausgabe").value = faculty_uebung (eingabeVar);*/

function addNumberToTextbox(number) {
    var existingValue = document.getElementById("outputBox_rechner").value;
    existingValue = existingValue + number;
    document.getElementById("outputBox_rechner").value = existingValue;
}

function calc_Sqrt() {
    var existingValue = document.getElementById("outputBox_rechner").value;
    document.getElementById("outputBox_rechner").value = Math.sqrt(existingValue);
}

function calc_exponential() {
    var existingValue = document.getElementById("outputBox_rechner").value;
    document.getElementById("outputBox_rechner").value = existingValue * existingValue;
}

function clean() {  
    document.getElementById("outputBox_rechner").value = "";
	
}

function ausrechnenfor() {
	var dieZahl = document.getElementById("outputBox_rechner").value;

	var ausgabe =faculty_uebung (dieZahl);

	document.getElementById("outputBox_rechner").value = ausgabe;
}

function plus(){
	var linkeroperand = document.getElementById("outputBox_rechner").value;
	document.getElementById("operandlinks").value = linkeroperand;
	document.getElementById("operator").value = "+";
	clean();
}

function minus(){
	var linkeroperand = document.getElementById("outputBox_rechner").value;
	document.getElementById("operandlinks").value = linkeroperand;
	document.getElementById("operator").value = "-";
	clean();
}

function mal(){
	var linkeroperand = document.getElementById("outputBox_rechner").value;
	document.getElementById("operandlinks").value = linkeroperand;
	document.getElementById("operator").value = "*";
	clean();
}

function geteilt(){
	var linkeroperand = document.getElementById("outputBox_rechner").value;
	document.getElementById("operandlinks").value = linkeroperand;
	document.getElementById("operator").value = "/";
	clean();
}

function gleich(){
	var rechteroperand = document.getElementById("outputBox_rechner").value;
	var linkeroperand = document.getElementById("operandlinks").value; 
	var operator = document.getElementById("operator").value;

	switch(operator){
		case "+": var result = Number(linkeroperand) + Number(rechteroperand);
				  document.getElementById("outputBox_rechner").value = result;
				  break;
		case "-": var result = Number(linkeroperand) - Number(rechteroperand);
				  document.getElementById("outputBox_rechner").value = result;
				  break;
		case "*": var result = Number(linkeroperand) * Number(rechteroperand);
				  document.getElementById("outputBox_rechner").value = result;
				  break;
		case "/": var result = Number(linkeroperand) / Number(rechteroperand);
				  document.getElementById("outputBox_rechner").value = result;
				  break;
	}
	
	
}

function addZeroToTextbox() { addNumberToTextbox("0"); }
function addOneToTextbox() { addNumberToTextbox("1"); }
function addTwoToTextbox() { addNumberToTextbox("2"); }
function addThreeToTextbox() { addNumberToTextbox("3"); }
function addFourToTextbox() { addNumberToTextbox("4"); }
function addFiveToTextbox() { addNumberToTextbox("5"); }
function addSixToTextbox() { addNumberToTextbox("6"); }
function addSevenToTextbox() { addNumberToTextbox("7"); }
function addEightToTextbox() { addNumberToTextbox("8"); }
function addNineToTextbox() { addNumberToTextbox("9"); }

document.getElementById("button_0").addEventListener("click",addZeroToTextbox);
document.getElementById("button_1").addEventListener("click",addOneToTextbox);
document.getElementById("button_2").addEventListener("click",addTwoToTextbox);
document.getElementById("button_3").addEventListener("click",addThreeToTextbox);
document.getElementById("button_4").addEventListener("click",addFourToTextbox);
document.getElementById("button_5").addEventListener("click",addFiveToTextbox);
document.getElementById("button_6").addEventListener("click",addSixToTextbox);
document.getElementById("button_7").addEventListener("click",addSevenToTextbox);
document.getElementById("button_8").addEventListener("click",addEightToTextbox);
document.getElementById("button_9").addEventListener("click",addNineToTextbox);
document.getElementById("button_sqrt").addEventListener("click",calc_Sqrt);
document.getElementById("button_exponential").addEventListener("click",calc_exponential);
document.getElementById("button_c").addEventListener("click",clean);
document.getElementById("button_fac").addEventListener("click",ausrechnenfor);
document.getElementById("button_plus").addEventListener("click",plus);
document.getElementById("button_minus").addEventListener("click",minus);
document.getElementById("button_mal").addEventListener("click",mal);
document.getElementById("button_geteilt").addEventListener("click",geteilt);
document.getElementById("button_gleich").addEventListener("click",gleich);