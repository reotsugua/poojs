class Cliente {
    constructor(nome, cpf) {
        this.name = nome;
        this.document = cpf;
    }
}

class ContaCorrente {
    #saldo = 0;
    constructor(ag) {
        this.agencia = ag;
    }

    getSaldo() {
        return this.#saldo;
    }

    sacar(valor){
        if (this.#saldo < valor) return "Saldo insuficiente";

        this.#saldo -= valor;
        return valor; 
    }

    depositar(valor){
        if (valor <= 0) return "Depósito inválido";

        this.#saldo += valor;
        return valor;
    }
}