export class Cliente {
    #cpf;

    constructor(nome, cpf) {
        this.name = nome;
        this.#cpf = cpf;
    }

    get cpf(){
        return this.#cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
}