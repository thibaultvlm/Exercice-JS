export class Personne {
    #nom;

    constructor (nom) {
        this.#nom = nom
    }

    get nom() {
        return this.#nom;
    }

    parler() {
        return `${this.#nom} parle.` 
    }
}