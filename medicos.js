var db = firebase.firestore();
// Registrar Medico


function enviarMedico(){
    
    var nombreMedico = document.getElementById('nombreMedico').value;
    var profesion = document.getElementById('profesion').value;
    var correoMedico = document.getElementById('correoMedico').value;



    db.collection("Profesionales").add({
        nombreMedico: nombreMedico,
        profesion: profesion,
        correoMedico: correoMedico
   
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('nombreMedico').value='';
        document.getElementById('profesion').value='';
        document.getElementById('correoMedico').value='';
        alert('Gracias tu ayuda, tu registro se ha completado exitosamente');
        window.location.href="medicos.html"
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

var table = document.getElementById('table');

db.collection("Profesionales").onSnapshot((querySnapshot) => {

    table.innerHTML = '';
    querySnapshot.forEach((doc) => {

        console.log(`${doc.id} => `);
    

        table.innerHTML+= `
        <tr>
            <td>${doc.data().nombreMedico}</td>
            <td>${doc.data().profesion}</td>
            <td>${doc.data().correoMedico}</td>
            <td>
            <a href="mailto:${doc.data().correoMedico};?subject=Solicitud%20Cita%20|%20CAyudaCol&body=Hola%20${doc.data().nombreMedico}%20Me%20gustaría%20saber%20csi%20me%20podrias%20ayudar%20con%20preguntas%20}%2"><button type="button" class="btn btn-primary btn-lg"style="background:#1a3b8e; border-radius: 20px; border: none;" >Cita</button>  </a>
            </td>
       
         </tr>
`
    });
});
