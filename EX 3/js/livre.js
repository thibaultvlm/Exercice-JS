export class Livre {
    #titre;
    #auteur;

    constructor(titre, auteur) {
        this.#auteur = auteur;
        this.#titre = titre;
    }

    desciption() {
        return `Titre : ${titre}, Auteur : ${auteur}`
    }
    
}
