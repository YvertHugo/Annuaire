function getParameterByName(name) {
    const url = window.location.href;
    const nameEncoded = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + nameEncoded + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

async function getSiteId(id) {
    try {
        const response = await fetch("http://localhost:8080/sites/findById/" + idSite);
        const site = await response.json();
        console.log(site.nom);
        affichage(site)
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function affichage(site) {
    const ville = document.getElementById("ville");
    const type = document.getElementById("type");

    ville.value = site.ville;
    type.value = site.type;
}

function update(idSite) {

    const ville = document.getElementById("ville").value
    const type = document.getElementById("type").value
    
    const updatedSite = {
            "ville":  ville,
            "type": type,
    };
  
    fetch(`http://localhost:8080/sites/update/${idSite}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedSite)
    })
      .then(response => response.json())
      .then(data => console.log('réussis:', data))
      .catch(error => console.error('Erreur:', error));
      alert('Site mit à jour avec succès');
      window.location.href = '/admin/modif/sites/modif_site.html';
  
  }
  

const button = document.getElementById("button")

button.addEventListener("click", function () {
    update(idSite)
})


const idSite = getParameterByName('id');
getSiteId(idSite)