
var db = firebase.firestore();

// Subir ideas

function guardar(){
    
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var idea = document.getElementById('idea').value;


    db.collection("Ideas").add({
        nombre: nombre,
        email: email,
        idea: idea,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);

        document.getElementById('nombre').value='';
        document.getElementById('email').value='';
        document.getElementById('idea').value='';
        alert('Tu idea ha sido enviada exitosamente, Gracias!');
        window.location.href="index.html"
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}


// Reportar Problema

function enviarProblema(){
    
    var email2 = document.getElementById('email2').value;
    var problema = document.getElementById('problema').value;



    db.collection("Bugs").add({
        email2: email2,
        problema: problema,
   
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('email2').value='';
        
                document.getElementById('problema').value='';
        alert('Gracias por ayduar, el problema ha sido reportado');
        window.location.href="index.html"
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

