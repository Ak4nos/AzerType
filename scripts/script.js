 // Fonction qui ffiche le score
function afficherResultat (score, nombreMotsProposes) {
    //console.log('Votre score est de ' + score + ' sur ' + nombreMotsProposes)
    let scoreAfficheSpan = document.querySelector(".zoneScore span")

    let afficheScore = `${score} / ${nombreMotsProposes}`
    scoreAfficheSpan.innerText = afficheScore

}

 // Fonction qui redemande à l'uttilisateur de choisir tant que "mots" ou "phrases" n'est pas tapé 
/* function choisirPhrasesOuMots () {
    let choixUtilisateur = prompt("Tapez 'mots' pour choisir les mots ou 'phrases' pour les phrases :")
    while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
        choixUtilisateur = prompt("Tapez 'mots' pour choisir les mots ou 'phrases' pour les phrases :")
    }
    return choixUtilisateur
} */


/* function lancerBoucleDeJeu (listeProposition){
    let score = 0
    for (let i = 0; i < listeProposition.length; i++) {
        let motUtilisateur = prompt("Rentrez le mot : " + listeProposition[i])

        if (motUtilisateur === listeProposition[i]) {
            score++
        }
    }
    return score
} */

function lancerLeJeu () {
    //let choix = choisirPhrasesOuMots()
    let score = 0

    let boutonValidationEcriture = document.getElementById("btnValiderMot")
    let zoneInputEcriture = document.getElementById("inputEcriture")
    let i = 0
    afficherProposition(listeMots[i])

    boutonValidationEcriture.addEventListener('click', () =>{
        console.log(zoneInputEcriture.value)
        if (zoneInputEcriture.value === listeMots[i]){
            score++
        }
        i++
        afficherResultat(score, i)
        zoneInputEcriture.value = ''
        if (listeMots[i] === undefined) {
            afficherProposition("Le jeu est terminé")
            boutonValidationEcriture.disabled = true

        } else

        afficherProposition(listeMots[i])
    })
    
    afficherResultat(score, i)
}

function afficherProposition (proposition){
    let motsAffiches = document.querySelector(".zoneProposition")
    motsAffiches.innerText = proposition

}



