import { Personne } from "./personne.js";

export class Etudiant extends Personne {
    constructor(nom, classe) {
        super(nom);
        this.classe = classe;
    }

    parler() {
        return `Nom ${this.nom} (classe : ${this.classe}) pose une question.`
    }
}