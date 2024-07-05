document.getElementById('add_form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const salarie = {
        prenom: document.getElementById('prenom').value,
        nom: document.getElementById('nom').value,
        tel: document.getElementById('tel').value,
        email: document.getElementById('email').value,
        fonction: { id: document.getElementById('service').value },
        site: { id: document.getElementById('site').value }
    };
    
    try {
        const response = await fetch('http://localhost:8080/salaries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(salarie)
        });
        
        if (response.ok) {
            alert('Employé ajouté avec succès');
            window.location.href = '/admin/admin.html';
        } else {
            alert('Erreur lors de l\'ajout de l\'employé');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'ajout de l\'employé');
    }
});

// AJOUTER DYNAMIQUEMENT LES OPTIONS DES SELECTS HTML
async function loadOptions() {
    try {
        const fonctionsResponse = await fetch('http://localhost:8080/fonctions');
        const fonctions = await fonctionsResponse.json();
        const siteResponse = await fetch('http://localhost:8080/sites');
        const sites = await siteResponse.json();
        
        const fonctionSelect = document.getElementById('service');
        fonctions.forEach(fonction => {
            const option = document.createElement('option');
            option.value = fonction.id;
            option.text = fonction.nom;
            fonctionSelect.add(option);
        });
        
        const siteSelect = document.getElementById('site');
        sites.forEach(site => {
            const option = document.createElement('option');
            option.value = site.id;
            option.text = site.ville;
            siteSelect.add(option);
        });
    } catch (error) {
        console.error('Erreur lors du chargement des options:', error);
    }
}

window.onload = loadOptions;