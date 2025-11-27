export class Compte {
    #solde = 0

    deposer(m) {
        this.#solde += m;
    }

    set solde(valeur) {
        if (valeur < 0) {
            console.error("Impossible de mettre une valeur négative !");
            return;
        }
        this.#solde = valeur;
    }

    get solde() {
        return this.#solde;
    }
}