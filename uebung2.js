console.log ("Ja");

function empfaenger1( antwort ){
    console.log("Die Daten wurden empfangen");
    console.log(antwort);

    var json = antwort.json();
    return json;   //Übergabe in die fetch-funktion
}

function empfaenger2(person){  //return von empfänger1 wird an empänger 2 übergeben.
    console.log(person);
    console.log(person.vorname);
    console.log(person.nachname);
    console.log(person.strasse);
    console.log(person.postleitzahl);
    console.log(person.stadt);
    
    //var vorname = person.vorname;
    //var nachname = person.nachname;

    document.getElementById("vorname").value = person.vorname;
    document.getElementById("nachname").value = person.nachname;
    document.getElementById("strasse").value = person.strasse;
    document.getElementById("postleitzahl").value = person.postleitzahl;
    document.getElementById("stadt").value = person.stadt;
}

function mit_key_vor_nachname_abrufen (){
    //Eingabe
    var key = document.getElementById("eingabe").value;

    //Verarbeitung
    fetch("json/" + key + ".json") //Url:was wird geholt
    .then(empfaenger1)             // was macht man damit: auspacken
    .then(empfaenger2);            // was macht man damit: ausgeben 
}

function verschicken() {

    // URL:
    // http(s): Hypertext Transfer Protocol (s=secure)
    // ://
    // host: Gastgeber - ein Computer im Netzwerk
    // port: 80, 8000 - Nebenstelle
    // pfad/auf/eine - Verzeichnis
    // datei - "Der Endpunkt"
    //
    var url = "json/brief.json";
    
    var vorname = document.getElementById("vorname").value; // statt "Paul" ... ?
    var nachname = document.getElementById("nachname").value;
    var strasse = document.getElementById("strasse").value;
    var postleitzahl = document.getElementById("postleitzahl").value;
    var stadt = document.getElementById("stadt").value;
    
    console.log(vorname);
    console.log(nachname);
    console.log(strasse);
    console.log(postleitzahl);
    console.log(stadt);

    var data = {
    "vorname": vorname,
    "nachname": nachname,
    "strasse": strasse,
    "postleitzahl": postleitzahl,
    "stadt": stadt
    };

    console.log(data);
    
    var datajson = JSON.stringify( data ); // JSON-Object to String in var datajson ablegen
    
    console.log(datajson);

    // Verschicken der Daten
    fetch( url,
      {
        method: "POST", // "GET"
        body: datajson // Der body muss ein string sein,deshalb die Umwandlung 
      }
    );
 }


function clean() {  
    document.getElementById("vorname").value = "";
    document.getElementById("nachname").value = "";
    document.getElementById("eingabe").value = "";
    document.getElementById("strasse").value = "";
    document.getElementById("postleitzahl").value = "";
    document.getElementById("stadt").value = "";
}

document.getElementById("drueck_mich").addEventListener("click",mit_key_vor_nachname_abrufen);
document.getElementById("absenden").addEventListener("click",verschicken);
document.getElementById("loeschen").addEventListener("click",clean);
