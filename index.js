
console.log("Hello Michael");
//document.getElementById("Bild1").classList.toggle("Bild");


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
