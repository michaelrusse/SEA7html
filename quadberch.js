function berechnung() {
    var x2 = document.getElementById("x2").value;
    var x1 = document.getElementById("x1").value;
    var x = document.getElementById("x").value;
    var e = document.getElementById("Ergebnis").value;
    var Q = x - e; 
    var p = x1/x2;
    var q = Q/x2;
    X1 = -p/2 + Math.sqrt(((p/2)*(p/2)) - q);
    X2 = -p/2 - Math.sqrt(((p/2)*(p/2)) - q);   
    console.log(X1);
    console.log(X2);
    document.getElementById("X1").value = X1;
    document.getElementById("X2").value = X2;
}

document.getElementById("button").addEventListener("click",berechnung);


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
