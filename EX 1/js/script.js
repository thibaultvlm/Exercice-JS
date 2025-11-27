export class Utilisateur {
    nom;
    #motDePasse;

    constructor(nom, motDePasse) {
        this.nom = nom;
        this.#motDePasse = motDePasse;
    }

    get motdepasseMasque() {
        return '*****';
    }
}
