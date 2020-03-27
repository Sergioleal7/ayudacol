var db = firebase.firestore();

function ayuda(){
    
    var nombre = document.getElementById('nombre').value;
    var ciudad = document.getElementById('ciudad').value;
    var celular = document.getElementById('celular').value;
    var ayuda = document.getElementById('ayuda').value;
    var otro = document.getElementById('otro').value;
    var texto = document.getElementById('texto').value;



    db.collection("Ayuda").add({
        nombre: nombre,
        ciudad: ciudad,
        celular: celular,
        ayuda: ayuda,
        otro: otro,
        texto: texto,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);

        document.getElementById('nombre').value='';
        document.getElementById('ciudad').value='';
        document.getElementById('celular').value='';
        document.getElementById('ayuda').value='';
        document.getElementById('otro').value='';
        document.getElementById('texto').value='';
        alert('Tu ayuda ha sido enviada exitosamente, Gracias!');
        window.location.href="ayudemos.html"
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

var cards = document.getElementById('cards');

db.collection("Ayuda").onSnapshot((querySnapshot) => {

    cards.innerHTML = '';
    querySnapshot.forEach((doc) => {

        console.log(`${doc.id} => `);
    

        cards.innerHTML+= `

        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-center">${doc.data().nombre}</h5>
          <p class="card-subtitle mb-2"> Ciudad: ${doc.data().ciudad}</p>
          <p class="card-subtitle mb-2"> Celular: <a> ${doc.data().celular}</a> </p>
          <p class="card-subtitle mb-2 ">Tipo de ayuda: ${doc.data().ayuda}</p>
          <p class="card-text">${doc.data().texto}</p>
          <div class="text-center">
          <a href="https://wa.me/57${doc.data().celular}/?text=Hola%20${doc.data().nombre}%20vi%20tu%20petición%20en%20ayudaCol%20y%20me%20gustaría%20ayudarte,%20como%20lo%20puedo%20hacer?%20" class="btn btn-primary" style="background:#1a3b8e; border-radius: 20px; border: none;"  >Chat</a>
          </div>
        </div>
      </div>
`
    });
});
