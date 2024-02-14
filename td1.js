// td1.js

// Fonction pour récupérer les données météo d'une ville depuis l'API OpenWeatherMap
async function getWeatherData(cityName) {
    const apiKey = 'eccf8200898239c01b81626293da9f1d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données météo : ', error);
        return null;
    }
}

// Fonction pour afficher les informations météo d'une ville sélectionnée
async function afficheVille() {
    let nomVilleChoisie = document.getElementById('ville').value;
    let villes = document.getElementsByClassName('ville');
    
    for (let i = 0; i < villes.length; i++) {
        if (villes[i].id === nomVilleChoisie) {
            villes[i].style.display = "";
            // Récupérer les données météo et les afficher
            const weatherData = await getWeatherData(nomVilleChoisie);
            if (weatherData) {
                const temperature = weatherData.main.temp;
                const description = weatherData.weather[0].description;
                villes[i].querySelector('p').textContent = `${temperature}°, ${description}`;
            } else {
                villes[i].querySelector('p').textContent = 'Impossible de récupérer les données météo.';
            }
        } else {
            villes[i].style.display = "none";
        }
    }
}

// Appeler la fonction afficheVille lors du chargement de la page
window.onload = afficheVille;
