function afficheVille() {
    let nomVilleChoisie = document.getElementById('ville').value;
    let villes = document.getElementsByClassName('ville');
    for (let i = 0; i < villes.length; i++) {
        if (villes[i].id === nomVilleChoisie) {
            villes[i].style.display = "";
        } else {
            villes[i].style.display = "none";
        }
    }
}

window.onload = afficheVille;
