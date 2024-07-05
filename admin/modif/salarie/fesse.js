function getParameterByName(name) {
    const url = window.location.href;
    const nameEncoded = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + nameEncoded + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
async function getSalarieId(id) {
    try {
        const response = await fetch("http://localhost:8080/salaries/findById/" + idSalarie);
        const salarie = await response.json();
        console.log(salarie.nom);
        affichage(salarie)
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function affichage(salarie) {
    const prenom = document.getElementById("prenom");
    const nom = document.getElementById("nom");
    const tel = document.getElementById("tel");
    const email = document.getElementById("email");

    prenom.value = salarie.prenom;
    nom.value = salarie.nom;
    tel.value = salarie.tel;
    email.value = salarie.email;
}

async function site() {
    try {
        const response = await fetch("http://localhost:8080/sites");
        const site = await response.json();
        const select_site = document.getElementById("site");
        for (let i = 0; i < site.length; i++) {
            const element_site = site[i];
            console.log(element_site.id)
            const option_site = document.createElement("option")
            option_site.setAttribute("value", element_site.id)
            option_site.innerHTML = element_site.ville;
            select_site.appendChild(option_site);
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
async function service() {
    try {
        const response = await fetch("http://localhost:8080/fonctions");
        const service = await response.json();
        const select_service = document.getElementById("service");
        for (let i = 0; i < service.length; i++) {
            const element_service = service[i];
            console.log(element_service.id)
            const option_service = document.createElement("option")
            option_service.setAttribute("value", element_service.id)
            option_service.innerHTML = element_service.nom;
            select_service.appendChild(option_service);
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}




function update(idSalarie) {

    const prenom = document.getElementById("prenom").value
    const nom = document.getElementById("nom").value
    const tel = document.getElementById("tel").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const site = document.getElementById("site").value;
    
    const updatedSalarie = {
            "nom":  nom,
            "prenom": prenom,
            "tel": tel,
            "email": email,
            "fonction": {
              "id": service,
            },
            "site": {
              "id": site,
            }
    };
  
    fetch(`http://localhost:8080/salaries/update/${idSalarie}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedSalarie)
    })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
      alert('Salarié mit à jour avec succès');
      window.location.href = '/admin/admin.html';
  }
  

const button = document.getElementById("button")

button.addEventListener("click", function () {
    update(idSalarie)
})






const idSalarie = getParameterByName('id');
site()
service()
getSalarieId(idSalarie)

