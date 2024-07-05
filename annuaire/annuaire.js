const url = 'http://localhost:8080/salaries';

async function fetchSalaries() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': '*/*'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        displaySalaries(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displaySalaries(salaries) {
    const container = document.getElementById('salaries-container');
    container.innerHTML = ''; // Clear previous results
    salaries.forEach(salarie => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${salarie.prenom} ${salarie.nom}</h2>
            <p><strong>Téléphone :</strong> ${salarie.tel}</p>
            <p><strong>Email :</strong> ${salarie.email}</p>
            <p><strong>Service :</strong> ${salarie.fonction.nom}</p>
            <p><strong>Site :</strong> ${salarie.site.ville} (${salarie.site.type})</p>
        `;
        container.appendChild(card);
    });
}

function filterSalaries() {
    const siteFilter = document.getElementById('site-filter').value;
    const serviceFilter = document.getElementById('service-filter').value;
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();

    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': '*/*'
        }
    })
    .then(response => response.json())
    .then(data => {
        const filteredSalaries = data.filter(salarie => {
            const fullText = `
                ${salarie.prenom} ${salarie.nom}
                ${salarie.tel}
                ${salarie.email}
                ${salarie.fonction.nom}
                ${salarie.site.ville} (${salarie.site.type})
            `.toLowerCase();

            return (siteFilter === '' || salarie.site.ville === siteFilter) &&
                   (serviceFilter === '' || salarie.fonction.nom === serviceFilter) &&
                   (searchQuery === '' || fullText.includes(searchQuery));
        });
        displaySalaries(filteredSalaries);
    })
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

document.getElementById('site-filter').addEventListener('change', filterSalaries);
document.getElementById('service-filter').addEventListener('change', filterSalaries);
document.getElementById('search-bar').addEventListener('input', filterSalaries);

fetchSalaries();
