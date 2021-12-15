console.log ("Ja");

function vorname_und_nachname_verkneupfen(){
    // Eingabe
    var vorname = document.getElementById("vorname").value;
    var nachname = document.getElementById("nachname").value;
    
    // Verarbeitung
    if (vorname == ""){ 
        var name = nachname;
    }else{
        var name = vorname +" "+ nachname;
    }

    /*alternativ (besser)
    var name = " ";

    if (vorname == ""){ 
        name = nachname,
    }else{
        name = vorname +" "+ nachname;
    }
    */

    //Ausgabe
    document.getElementById("name").value = name;
}

function clean() {  
    document.getElementById("vorname").value = "";
    document.getElementById("nachname").value = "";
    document.getElementById("name").value = "";
	
}

document.getElementById("drueck_mich").addEventListener("click",vorname_und_nachname_verkneupfen);
/* man kann es auch so schreiben:
   var derButton = document.getElementById("drueck_mich")
   derButton.addEventListener("click", vorname_und_nachname_verkneupfen);
*/
document.getElementById("loeschen").addEventListener("click",clean);