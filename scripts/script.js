 // Fonction qui ffiche le score
function afficherResultat (score, nombreMotsProposes) {
    console.log('Votre score est de ' + score + ' sur ' + nombreMotsProposes)
}

 // Fonction qui redemande à l'uttilisateur de choisir tant que "mots" ou "phrases" n'est pas tapé 
function choisirPhrasesOuMots () {
    let choixUtilisateur = prompt("Tapez 'mots' pour choisir les mots ou 'phrases' pour les phrases :")
    while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
        choixUtilisateur = prompt("Tapez 'mots' pour choisir les mots ou 'phrases' pour les phrases :")
    }
    return choixUtilisateur
}


function lancerBoucleDeJeu (listeProposition){
    let score = 0
    for (let i = 0; i < listeProposition.length; i++) {
        let motUtilisateur = prompt("Rentrez le mot : " + listeProposition[i])

        if (motUtilisateur === listeProposition[i]) {
            score++
        }
    }
    return score
}

function lancerLeJeu () {
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nombreMotsProposes = 0

    if (choix === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nombreMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nombreMotsProposes = listePhrases.length
    }

    afficherResultat(score, nombreMotsProposes)
}




