export class Livre {
    #titre;
    #auteur;

    constructor(titre, auteur) {
        this.#titre = titre;
        this.#auteur = auteur;
    }

    description() {
        return `Titre : ${this.#titre}, Auteur : ${this.#auteur}`;
    }
}
