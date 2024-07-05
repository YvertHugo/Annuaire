function getParameterByName(name) {
    const url = window.location.href;
    const nameEncoded = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + nameEncoded + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

async function getFonctionId(id) {
    try {
        const response = await fetch("http://localhost:8080/fonctions/findById/" + idFonction);
        const fonction = await response.json();
        console.log(fonction.nom);
        affichage(fonction)
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function affichage(fonction) {
    const nom = document.getElementById("nom");

    nom.value = fonction.nom;
}

function update(idFonction) {

    const nom = document.getElementById("nom").value
    
    const updatedFonction = {
            "nom":  nom,
    };
  
    fetch(`http://localhost:8080/fonctions/update/${idFonction}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFonction)
    })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
      alert('Service mit à jour avec succès');
      window.location.href = '/admin/modif/fonctions/modif_fonction.html';
  }
  

const button = document.getElementById("button")

button.addEventListener("click", function () {
    update(idFonction)
})


const idFonction = getParameterByName('id');
getFonctionId(idFonction)