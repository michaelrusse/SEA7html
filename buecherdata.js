console.log ("Ja");

function empfaenger1( antwort ){
    console.log("Die Daten wurden empfangen");
    console.log(antwort);

    var json = antwort.json();
    return json;   //Übergabe in die fetch-funktion
}

function empfaenger2(buch){  //return von empfänger1 wird an empänger 2 übergeben.
    console.log(buch);
    console.log(buch.autor);
    console.log(buch.zeichner);
    console.log(buch.titel);
    console.log(buch.art);
    console.log(buch.isbn);
    
    document.getElementById("autor").value = buch.autor;
    document.getElementById("zeichner").value = buch.zeichner;
    document.getElementById("titel").value = buch.titel;
    document.getElementById("art").value = buch.art;
    document.getElementById("isbn").value = buch.isbn;
}

function mit_suche_daten_abrufen (){
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
    
    var autor = document.getElementById("autor").value; // statt "Paul" ... ?
    var zeichner = document.getElementById("zeichner").value;
    var titel = document.getElementById("titel").value;
    var art = document.getElementById("art").value;
    var isbn = document.getElementById("isbn").value;
    
    console.log(autor);
    console.log(zeichner);
    console.log(titel);
    console.log(art);
    console.log(isbn);

    var data = {
    "vorname": autor,
    "nachname": zeichner,
    "strasse": titel,
    "postleitzahl": art,
    "stadt": isbn
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
    document.getElementById("autor").value = "";
    document.getElementById("zeichner").value = "";
    document.getElementById("eingabe").value = "";
    document.getElementById("titel").value = "";
    document.getElementById("art").value = "";
    document.getElementById("isbn").value = "";
}

document.getElementById("suchestarten").addEventListener("click",mit_suche_daten_abrufen);
document.getElementById("absenden").addEventListener("click",verschicken);
document.getElementById("loeschen").addEventListener("click",clean);
