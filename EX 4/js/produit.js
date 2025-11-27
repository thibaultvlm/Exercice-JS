export class Produit {
    #prix = 0
    
    deposer(m) {
        this.#prix += m;
    }

    set prix(valeur) {
        if (valeur < 0) {
            console.error("Impossible de mettre une valeur négative !");
            return;
        }
        this.#prix = valeur;
    }

    get prix() {
        return this.#prix;
    }
}