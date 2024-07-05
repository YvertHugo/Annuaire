const url = 'http://localhost:8080/fonctions';

async function fetchFonctions() {
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
        displayFonctions(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayFonctions(fonctions) {
    const container = document.getElementById('sites-container');
    fonctions.forEach(fonction => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.backgroundImage = `url('/image/${fonction.nom}.webp')`;

        card.innerHTML = `
            <div class="footer">
                <svg id="curve">
                    <path id="p" d="M0,200 Q80,100 400,200 V150 H0 V50" transform="translate(0 300)" />
                    <rect id="dummyRect" x="0" y="0" height="450" width="400" fill="transparent" />
                    <!-- slide up-->
                    <animate xlink:href="#p" attributeName="d" to="M0,50 Q80,100 400,50 V150 H0 V50" fill="freeze" begin="dummyRect.mouseover" end="dummyRect.mouseout" dur="0.1s" id="bounce1" />
                    <!-- slide up and curve in -->
                    <animate xlink:href="#p" attributeName="d" to="M0,50 Q80,0 400,50 V150 H0 V50" fill="freeze" begin="bounce1.end" end="dummyRect.mouseout" dur="0.15s" id="bounce2" />
                    <!-- slide down and curve in -->
                    <animate xlink:href="#p" attributeName="d" to="M0,50 Q80,80 400,50 V150 H0 V50" fill="freeze" begin="bounce2.end" end="dummyRect.mouseout" dur="0.15s" id="bounce3" />
                    <!-- slide down and curve out -->
                    <animate xlink:href="#p" attributeName="d" to="M0,50 Q80,45 400,50 V150 H0 V50" fill="freeze" begin="bounce3.end" end="dummyRect.mouseout" dur="0.1s" id="bounce4" />
                    <!-- curve in -->
                    <animate xlink:href="#p" attributeName="d" to="M0,50 Q80,50 400,50 V150 H0 V50" fill="freeze" begin="bounce4.end" end="dummyRect.mouseout" dur="0.05s" id="bounce5" />

                    <animate xlink:href="#p" attributeName="d" to="M0,200 Q80,100 400,200 V150 H0 V50" fill="freeze" begin="dummyRect.mouseout" dur="0.15s" id="bounceOut" />
                </svg>
                <div class="info">
                    <div class="ville">${fonction.nom}</div>
                    <a href="form_fonction.html?id=${fonction.id}"><button id="button_modif">Modfier</button></a>
                </div>
            </div>
            <div class="card-blur"></div>
        `;
        container.appendChild(card);
    });
}

fetchFonctions();
